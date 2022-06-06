import { Edit, Form, Input, useForm } from "@pankod/refine-antd";
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
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};

export default CompanyEdit;
