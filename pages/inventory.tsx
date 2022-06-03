import AppShell from "~/components/AppShell";
import DataGrid, { TextEditor } from "react-data-grid";
import { useEffect, useState } from "react";
import { supabase } from "~/utils/supabaseClient";
import { debounce, omit } from "lodash";

type Props = {};

type Row = {
  id: string;
  data: Record<string, any>;
  name: string;
};

const Inventory = (props: Props) => {
  const [columns, setColumns] = useState([
    {
      key: "id",
      name: "id",
    },
    {
      name: "料号",
      key: "part_number",
      editor: TextEditor,
    },
    {
      key: "name",
      name: "名称",
      editor: TextEditor,
    },
    {
      key: "model",
      name: "型号",
      editor: TextEditor,
    },
    {
      name: "规格",
      key: "spec",
      editor: TextEditor,
    },
    {
      name: "储位",
      key: "location",
      editor: TextEditor,
    },
  ]);

  const [rows, setRows] = useState<Row[]>([]);

  // 获取列表数据
  const handleGetRows = async () => {
    const { data } = await supabase
      .from("material_info")
      .select("*")
      .order("inserted_at", { ascending: false });
    if (data) {
      setRows(data.map((item) => ({ id: item.id, ...item.data })));
    }
  };

  useEffect(() => {
    handleGetRows();
  }, []);

  // 编辑/添加数据
  const handleSaveRow = async (row: Partial<Row> = {}) => {
    const data = {
      id: row.id,
      data: omit(row, ["id", "inserted_at", "updated_at", "data"]),
    };
    const { error } = await supabase.from("material_info").upsert(data);

    if (!error) {
      handleGetRows();
    }
  };

  return (
    <AppShell className="flex flex-col gap-4 h-screen">
      <div>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => handleSaveRow()}
        >
          新建
        </button>
      </div>
      <DataGrid
        className="h-full"
        rowKeyGetter={(row) => row.id}
        rows={rows}
        columns={columns}
        onRowsChange={(rows, data) => {
          setRows(rows);
          const row = rows[data.indexes[0]];
          handleSaveRow(row);
        }}
      ></DataGrid>
    </AppShell>
  );
};

export default Inventory;
