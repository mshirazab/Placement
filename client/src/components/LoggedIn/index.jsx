import React from 'react';
import { Button } from 'antd';

const LoggedOut = () => {
  document.title = 'PesPlaced';
  return (
    <a href="/api/logout">
      <Button type="danger" icon="login">
        Log Out
      </Button>
    </a>
  );
};
export default LoggedOut;
