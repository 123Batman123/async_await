import GameSavingLoader from '../promise';
import read from '../funRead';

jest.mock('../funRead');

test('test GameSavingLoader add error through mock', async () => {
  read.mockRejectedValue('Error');
  const res = await GameSavingLoader.load();
  expect(res).toEqual('Error');
});
