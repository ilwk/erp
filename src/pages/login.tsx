import React from "react";
import { useLogin, useNavigation } from "@pankod/refine-core";

import { Card, Typography, Form, Input, Button } from "@pankod/refine-antd";

const { Title } = Typography;

export interface ILoginForm {
  email: string;
}

export const Login: React.FC = () => {
  const [form] = Form.useForm<ILoginForm>();

  const { mutate: login, isLoading } = useLogin<ILoginForm>();

  const CardTitle = (
    <Title level={3} className="title">
      Sign in your account
    </Title>
  );

  return (
    <section className="grid place-items-center h-screen bg-gray-500">
      <div className="w-96">
        <div className="flex justify-center items-center p-2">
          <img src="./refine.svg" alt="Refine Logo" />
        </div>
        <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
          <Form<ILoginForm>
            layout="vertical"
            form={form}
            onFinish={(values) => {
              login(values);
            }}
            initialValues={{
              email: "",
            }}
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input size="large" placeholder="Email" />
            </Form.Item>

            <Button
              type="primary"
              size="large"
              htmlType="submit"
              block
              loading={isLoading}
            >
              发送
            </Button>
          </Form>
        </Card>
      </div>
    </section>
  );
};
