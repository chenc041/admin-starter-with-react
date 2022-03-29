import React from 'react';
import styles from './index.module.scss';
import { Form, Input, Button } from 'antd';

const LoginPage = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed: ----', errorInfo);
  };

  return (
    <div className={styles.login}>
      <div className={styles.formWrap}>
        <h1 className={styles.loginTitle}>Hello Vite with React</h1>
        <Form
          name='用户登录1'
          onFinish={onFinish}
          requiredMark={false}
          className={styles.form}
          initialValues={{ remember: true }}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name='username' rules={[{ required: true, message: '请输入用户名!' }]}>
            <Input placeholder='请输入用户名' />
          </Form.Item>

          <Form.Item name='password' rules={[{ required: true, message: '请输入密码!' }]}>
            <Input.Password placeholder='请输入密码' />
          </Form.Item>
          <Form.Item>
            <Button className={styles.submitBtn} type='primary' htmlType='submit'>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default LoginPage;
