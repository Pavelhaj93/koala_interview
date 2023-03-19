import { mockItem } from './mockItem';
import { Data, Item, NemesisData, SecreteData } from './types';
import { getHeaders, getOddColor } from './utils';

describe('getHeaders utils', () => {
  const result = Object.keys(mockItem.data);
  const result2 = Object.keys(mockItem);
  const result3 = Object.keys(mockItem.children?.has_nemesis?.records[0].data ?? {});
  const result4 = Object.keys(mockItem.children?.has_nemesis?.records[0].children.has_secrete.records[0].data ?? {});

  test('getHeaders', () => {
    expect(getHeaders<Data>(mockItem.data)).toEqual(result);
    expect(getHeaders<Item>(mockItem)).toEqual(result2);
    expect(getHeaders<NemesisData>(mockItem.children?.has_nemesis?.records[0].data)).toEqual(result3);
    expect(
      getHeaders<SecreteData>(mockItem.children?.has_nemesis?.records[0].children.has_secrete.records[0].data)
    ).toEqual(result4);
  });
});

describe('getOddColor', () => {
  test('getOddColor', () => {
    expect(getOddColor(0)).toEqual('secondary.main');
    expect(getOddColor(1)).toEqual('secondary.dark');
  });
});
