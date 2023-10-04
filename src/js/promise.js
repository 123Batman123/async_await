import json from './funJson';
import read from './funRead';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const res = await read();
      const obj = await json(res);
      return new GameSaving(JSON.parse(obj));
    } catch (error) {
      return error;
    }
  }
}
