import { AuthPage } from "@refinedev/antd";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: { email: "admin@email.com", password: "admin1234" },
      }}
    />
  );
};
