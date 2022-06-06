import AppShell from "~/components/AppShell";
import DataGrid, { SelectColumn, TextEditor } from "react-data-grid";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "~/utils/supabaseClient";
import { omit } from "lodash";

type Props = {};

type Row = {
  id: string;
  data: Record<string, any>;
  name: string;
};

const Order = (props: Props) => {
  const [columns, setColumns] = useState([
    SelectColumn,
    {
      name: "订单号",
      key: "order_no",
      frozen: true,
      editor: TextEditor,
    },
    {
      key: "name",
      name: "名称",
      editor: TextEditor,
    },
    {
      name: "客户",
      key: "customer",
    },
    {
      name: "备注",
      key: "remark",
      editor: TextEditor,
    },
  ]);

  const [search, setSearch] = useState("");

  const [rows, setRows] = useState<Row[]>([]);
  const filterRows = useMemo(() => {
    if (!search) return rows;
    return rows.filter((item) => {
      const row = omit(item, ["id"]);
      return Object.values(row).some((value) => {
        return value.toString().includes(search);
      });
    });
  }, [rows, search]);
  const [selectedRows, setSelectedRows] = useState<ReadonlySet<number>>(
    () => new Set()
  );

  // 获取列表数据
  const handleGetRows = async () => {
    const { data } = await supabase
      .from("orders")
      .select("*")
      .order("inserted_at", { ascending: false });
    if (data) {
      setRows(data.map((item) => ({ id: item.id, ...item.data })));
    }
    return data;
  };

  // 刚进入页面时获取列表数据
  useEffect(() => {
    handleGetRows();
  }, []);

  // 编辑/添加数据
  const handleSaveRow = async (row: Partial<Row> = {}) => {
    const data = {
      id: row.id,
      data: omit(row, ["id", "inserted_at", "updated_at", "data"]),
    };
    const { error } = await supabase.from("orders").upsert(data);

    if (!error) {
      handleGetRows();
    }
  };

  // 删除数据
  const handleDeleteRows = async () => {
    const isConfirm = confirm("确认删除？");
    if (!isConfirm) return;

    const ids = Array.from(selectedRows);
    const { error } = await supabase.from("orders").delete().in("id", ids);
    if (!error) {
      await handleGetRows();
      setSelectedRows(new Set());
    }
  };

  return (
    <AppShell className="flex flex-col gap-2 h-screen">
      <div>
        <input
          type="text"
          className="input input-bordered input-sm"
          placeholder="请输入搜索条件"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="flex gap-4">
        <button
          className="btn btn-success btn-sm text-xs"
          onClick={() => handleSaveRow()}
        >
          新建
        </button>
        <button
          className="btn btn-error btn-sm text-xs"
          onClick={() => handleDeleteRows()}
          disabled={!selectedRows.size}
        >
          删除
        </button>
      </div>
      <div className="tabs tabs-boxed">
        <a className="tab tab-active">所有订单</a>
        <a className="tab">未完成</a>
        <a className="tab">已完成</a>
      </div>
      <DataGrid
        className="h-full"
        rowKeyGetter={(row) => row.id}
        rows={filterRows}
        columns={columns}
        defaultColumnOptions={{
          resizable: true,
        }}
        onRowsChange={(rows, data) => {
          setRows(rows);
          const row = rows[data.indexes[0]];
          handleSaveRow(row);
        }}
        selectedRows={selectedRows}
        onSelectedRowsChange={setSelectedRows}
      ></DataGrid>
    </AppShell>
  );
};

export default Order;
