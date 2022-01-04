import { inject, injectable } from 'inversify';
import { HTTP_SERVICE } from '../injectTypes/index.types';
import { HttpService } from '../services/http.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@injectable()
export class UserService {
  constructor(@inject(HTTP_SERVICE) private readonly httpService: HttpService) {}

  private emojis: Subject<{ [key: string]: any }> = new Subject();

  get fetchEmojis(): Observable<Record<string, any>> {
    return this.httpService.get<Record<string, any>>('https://api.github.com/emojis').pipe(map(({ data }) => data));
  }

  setEmojis(val: { [key: string]: any }) {
    this.emojis.next(val);
  }

  get getEmojis() {
    return this.emojis.asObservable();
  }
}
