import React from 'react';
import { Button } from 'antd';

const HomePage = () => {
  const file = (e: any) => {
    console.log(e.target.value, 'eeee');
  };
  return (
    <div>
      <p>this is emojis list</p>
      <div>
        <Button type='primary'>12</Button>
        <input type='file' onChange={(e) => file(e)} />
      </div>
    </div>
  );
};
export default HomePage;
