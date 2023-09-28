import GameSavingLoader from '../promise';

test('test GameSavingLoader', async () => {
  const obj = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  const result = await GameSavingLoader.load();
  expect(result).toEqual(obj);
});
