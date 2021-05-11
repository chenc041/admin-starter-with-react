import { Container } from 'inversify';
import { UserService } from './services/user.service';
import { USER_SERVICE } from './inject-types/inject.types';
import { User } from './inject-types/user.service';

const container = new Container({
  defaultScope: 'Singleton',
});
container.bind<User>(USER_SERVICE).to(UserService);

export { container };
