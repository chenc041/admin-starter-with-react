import { injectable } from 'inversify';
import { User } from '../inject-types/user.service';
import Axios from 'axios';

@injectable()
export class UserService implements User {
  emojis = {} as { [key: string]: any };

  async fetchEmojis(): Promise<void> {
    const { status, data } = await Axios.get('https://api.github.com/emojis');
    if (status === 200) {
      this.emojis = data;
    }
  }
}
