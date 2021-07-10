import React from 'react';
import { Form, Input, Button } from 'antd';

const LoginPage = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name='用户登录'
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinishFailed={onFinishFailed}>
      <Form.Item label='用户名' name='username' rules={[{ required: true, message: '请输入用户名!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label='密码' name='password' rules={[{ required: true, message: '请输入密码!' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginPage;
