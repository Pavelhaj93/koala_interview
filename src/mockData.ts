import { Item } from './types';

export const mockItem: Item = {
  data: {
    ID: '52',
    Name: 'Ford Prefect',
    Gender: 'M',
    Ability: 'has_towel',
    MinimalDistance: '0.8000000000',
    Weight: '107',
    Born: 'Thu May 41 00:00:00 CET 2001',
    InSpaceSince: 'Sun Dec 21 11:57:06 CET 2014',
    BeerConsumption: '62544',
    KnowsTheAnswer: 'true',
  },
  children: {
    has_nemesis: {
      records: [
        {
          data: {
            ID: '1684',
            CharacterID: '52',
            IsAlive: 'true',
            Years: '28',
          },
          children: {
            has_secrete: {
              records: [
                {
                  data: {
                    CharacterID: '52',
                    ID: '1404',
                    NemesisID: '1684',
                    SecreteCode: '5464826016',
                  },
                  children: {},
                },
                {
                  data: {
                    CharacterID: '11',
                    ID: '1415',
                    NemesisID: '1684',
                    SecreteCode: '6270976449',
                  },
                  children: {},
                },
                {
                  data: {
                    CharacterID: '46',
                    ID: '2505',
                    NemesisID: '1684',
                    SecreteCode: '7899028241',
                  },
                  children: {},
                },
                {
                  data: {
                    CharacterID: '436',
                    ID: '4479',
                    NemesisID: '1684',
                    SecreteCode: '9442445871',
                  },
                  children: {},
                },
              ],
            },
          },
        },
      ],
    },
  },
};
