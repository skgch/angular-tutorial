import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      {id: 11, name: 'Ichiro Tanaka'},
      {id: 12, name: 'Jotaro Kujo'},
      {id: 13, name: 'Taro Yamada'},
      {id: 14, name: 'Jon Snow'},
      {id: 15, name: 'Yamamoto Daisuke'},
      {id: 16, name: 'Sasuke Uchiha'},
      {id: 17, name: 'Naruto Uzumaki'},
      {id: 18, name: 'Heiji Hattori'},
      {id: 19, name: 'Nobunaga Oda'},
      {id: 20, name: 'Jonathan Joestar'},
    ];
    return { members };
  }
}
