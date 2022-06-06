import {
  Edit,
  Form,
  Input,
  useForm,
  Select,
  Space,
  SaveButton,
} from "@pankod/refine-antd";

const CompanyCreate: React.FC = () => {
  const { formProps, saveButtonProps, onFinish, redirect } = useForm<IPost>({
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
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="Status" name="status">
          <Select
            options={[
              {
                label: "Published",
                value: "published",
              },
              {
                label: "Draft",
                value: "draft",
              },
              {
                label: "Rejected",
                value: "rejected",
              },
            ]}
          />
        </Form.Item>
      </Form>
    </Edit>
  );
};

export default CompanyCreate;

interface IPost {
  id: string;
  title: string;
  status: "published" | "draft" | "rejected";
}
