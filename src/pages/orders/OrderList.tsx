import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  List,
  Table,
  Space,
  EditButton,
  ShowButton,
} from "@pankod/refine-antd";

import { useTable } from "@pankod/refine-antd";

import { definitions } from "../../types/supabase";

const OrderList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, filters } = useTable<definitions["orders"]>({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="title" title="Title" />

        <Table.Column<definitions["orders"]>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};

export default OrderList;
