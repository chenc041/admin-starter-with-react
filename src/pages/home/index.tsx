import React, { useEffect, useState } from 'react';
import { container } from '../../inversify.config';
import { UserService } from '../../services/user.service';
import { USER_SERVICE } from '../../injectTypes/index.types';

const HomePage = () => {
  const userService = container.get<UserService>(USER_SERVICE);
  const [emojis, setEmojis] = useState({});
  useEffect(() => {
    const sub = userService.getEmojis.subscribe((val) => {
      setEmojis(val);
    });
    return () => sub.unsubscribe();
  });

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
