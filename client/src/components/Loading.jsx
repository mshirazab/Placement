import React from 'react';
import { Spin, Icon } from 'antd';

const Loading = () => {
  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
  return (
    <Spin
      indicator={antIcon}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
      }}
    />
  );
};
export default Loading;
