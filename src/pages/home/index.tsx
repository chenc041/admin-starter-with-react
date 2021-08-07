import React from 'react';

const HomePage = () => {
  const file = (e: any) => {
    console.log(e.target.value, 'eeee');
  };
  return (
    <div>
      <p>this is emojis list</p>
      <div>
        <input type='file' onChange={(e) => file(e)} />
      </div>
    </div>
  );
};
export default HomePage;
