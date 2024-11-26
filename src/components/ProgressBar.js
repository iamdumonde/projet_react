import React from 'react';
import { Flex, Progress } from 'antd';
const App = () => (
  <Flex gap="small" vertical>
    <Progress
      percent={100}
      percentPosition={{
        align: 'center',
        type: 'inner',
      }}
      size={[400, 20]}
    />
  </Flex>
);
export default App;