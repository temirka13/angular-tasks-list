import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Попить кофе' },
      { id: 2, name: 'Послушать подкасты' },
      { id: 3, name: 'Почитать про Redux' },
      { id: 4, name: 'Посмотреть посты на Хабре' },
      { id: 5, name: 'Выгулять собаку' },
      { id: 6, name: 'Посмотреть офф. документацию по Angular' },
      { id: 7, name: 'Посмотреть новые жизненые методы React' },
      { id: 8, name: 'Пройти курс по React Native на Udemy' },
      { id: 9, name: 'Постирать вещи' },
      { id: 10, name: 'Приготовить обед' }
    ];
    return {heroes};
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
