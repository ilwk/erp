import {
  Edit,
  Form,
  Input,
  useForm,
  Select,
  useSelect,
} from "@pankod/refine-antd";
import { COMPANY_SIZE_OPTIONS } from "../../constants";
import { definitions } from "../../types/supabase";

const CompanyEdit: React.FC = () => {
  const { formProps, saveButtonProps } = useForm<definitions["companies"]>();
  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="企业名称" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="企业规模" name="size">
          <Select options={COMPANY_SIZE_OPTIONS} />
        </Form.Item>
      </Form>
    </Edit>
  );
};

export default CompanyEdit;
