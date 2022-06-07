import {
  Create,
  Form,
  Input,
  useForm,
  Select,
  Space,
  SaveButton,
  useSelect,
} from "@pankod/refine-antd";
import { definitions } from "../../types/supabase";

const ContactEdit: React.FC = () => {
  const { formProps, saveButtonProps, onFinish, redirect } = useForm<
    definitions["contacts"]
  >({
    redirect: false,
  });

  const { selectProps } = useSelect<definitions["companies"]>({
    resource: "companies",
    optionLabel: "name",
    optionValue: "id",
  });

  return (
    <Create
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
        <Form.Item label="姓名" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="电话" name="phone">
          <Input />
        </Form.Item>
        <Form.Item label="所在公司" name="company_id">
          <Select {...selectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};

export default ContactEdit;
