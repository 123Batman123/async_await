import json from './funJson';
import read from './funRead';

export default class GameSavingLoader {
  static async load() {
    try {
      const res = await read();
      const obj = await json(res);
      return JSON.parse(obj);
    } catch (error) {
      return error.massage;
    }
  }
}
