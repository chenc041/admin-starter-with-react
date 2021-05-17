/**
 * this file is used to manage the DI service with inversify container
 */
import { Container } from 'inversify';
import { USER_SERVICE, HTTP_SERVICE } from './inject-types/index.types';
import { UserService } from './services/user.service';
import { HttpService } from './services/http.service';

const container = new Container({
  defaultScope: 'Singleton',
});

container.bind<HttpService>(HTTP_SERVICE).to(HttpService);
container.bind<UserService>(USER_SERVICE).to(UserService);

export { container };
