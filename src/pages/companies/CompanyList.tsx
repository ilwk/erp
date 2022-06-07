import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  List,
  Table,
  Space,
  EditButton,
  ShowButton,
  TextField,
} from "@pankod/refine-antd";

import { useTable } from "@pankod/refine-antd";

import { definitions } from "../../types/supabase";
import { COMPANY_SIZE_OPTIONS } from "../../constants";

const CompanyList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, filters } = useTable<definitions["companies"]>({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column<definitions["companies"]>
          dataIndex="size"
          title="Size"
          render={(value, row) => {
            const label = COMPANY_SIZE_OPTIONS.find(
              (item) => item.value === value
            )?.label;
            return <TextField value={label}></TextField>;
          }}
        />
        <Table.Column<definitions["companies"]>
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

export default CompanyList;
