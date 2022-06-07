import {
  Edit,
  Form,
  Input,
  useForm,
  Select,
  Space,
  SaveButton,
} from "@pankod/refine-antd";
import { definitions } from "../../types/supabase";

const CompanyCreate: React.FC = () => {
  const { formProps, saveButtonProps, onFinish, redirect } = useForm<
    definitions["companies"]
  >({
    redirect: false,
  });

  return (
    <Edit
      actionButtons={
        <Space>
          <SaveButton
            {...saveButtonProps}
            onClick={async () => {
              await onFinish?.();
              redirect("list");
            }}
          />
          <SaveButton {...saveButtonProps}>
            Save and continue editing
          </SaveButton>
          <SaveButton
            {...saveButtonProps}
            onClick={async () => {
              await onFinish?.();
              redirect("create");
            }}
          >
            Save and add another
          </SaveButton>
        </Space>
      }
    >
      <Form {...formProps} layout="vertical">
        <Form.Item label="公司名称" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="公司名称" name="name">
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};

export default CompanyCreate;
