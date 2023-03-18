// test

export type Item = {
  data: Data;
  children?: Children;
};

export type Data = {
  ID: string;
  Name: string;
  Gender: string;
  Ability: string;
  MinimalDistance: string;
  Weight: string;
  Born: string;
  InSpaceSince: string;
  BeerConsumption: string;
  KnowsTheAnswer: string;
};

export type Children = {
  has_nemesis: {
    records: Nemesis[];
  };
};

export type Nemesis = {
  data: NemesisData;
  children: NemesisChildren;
};

export type NemesisData = {
  ID: string;
  CharacterID: string;
  IsAlive?: string;
  Years: string;
};

export type NemesisChildren = {
  has_secrete: {
    records: Secrete[];
  };
};

export type Secrete = {
  data: SecreteData;
  children: SecreteChildren;
};

export type SecreteData = {
  ID: string;
  CharacterID: string;
  IsAlive?: string;
  Years?: string;
  NemesisID?: string;
  SecreteCode?: string;
};

export type SecreteChildren = unknown;
