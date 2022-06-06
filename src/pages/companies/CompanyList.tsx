import {
  IResourceComponentsProps,
  useMany,
  getDefaultFilter,
} from "@pankod/refine-core";

import {
  List,
  Table,
  TextField,
  Space,
  EditButton,
  ShowButton,
  FilterDropdown,
  Select,
  Radio,
  TagField,
} from "@pankod/refine-antd";

import { useTable, useSelect } from "@pankod/refine-antd";

import { IPost, ICategory } from "../../types";

const CompanyList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, filters } = useTable<IPost>({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Name" />

        <Table.Column<IPost>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};

export default CompanyList;
