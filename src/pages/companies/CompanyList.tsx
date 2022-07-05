import { IResourceComponentsProps } from "@pankod/refine-core";

import { DataGrid, List, useDataGrid } from "@pankod/refine-mui";

import { definitions } from "../../types/supabase";
import { COMPANY_SIZE_OPTIONS } from "../../constants";

const CompanyList: React.FC<IResourceComponentsProps> = () => {
  const { dataGridProps } = useDataGrid();
  const columns = [];
  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns}></DataGrid>
    </List>
  );
};

export default CompanyList;
