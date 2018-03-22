import React from 'react';
import { Button } from 'antd';

const LoggedOut = () => {
  document.title = 'PesPlaced - Login';
  return (
    <a href="/auth/google">
      <Button type="danger" icon="login">
        Login
      </Button>
    </a>
  );
};
export default LoggedOut;
