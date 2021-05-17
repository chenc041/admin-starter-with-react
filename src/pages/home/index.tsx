import React, { useState } from 'react';
import { container } from '../../inversify.config';
import { UserService } from '../../services/user.service';
import { USER_SERVICE } from '../../inject-types/index.types';

const HomePage = () => {
  const userService = container.get<UserService>(USER_SERVICE);
  const [emojis, setEmojis] = useState({});

  userService.getEmojis.subscribe((val) => {
    setEmojis(val);
  });
  return (
    <div>
      <p>this is emojis list</p>
      {Object.keys(emojis).map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};
export default HomePage;
