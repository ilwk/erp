import { IResourceComponentsProps } from "@pankod/refine-core";

import { List, Table, Space, EditButton } from "@pankod/refine-antd";

import { useTable } from "@pankod/refine-antd";

import { definitions } from "../../types/supabase";

const ContactsList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, filters } = useTable<definitions["contacts"]>({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="姓名" />

        <Table.Column<definitions["contacts"]>
          title="操作"
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

export default ContactsList;
