import { createContext, FC, PropsWithChildren, SetStateAction, useEffect, useMemo, useState } from 'react';
import { Item } from '../types';

interface DataContextProps {
  data: Item[] | null;
  setData: (value: SetStateAction<Item[] | null>) => void;
  deleteItem: (id: string, layer: string) => void;
}

export const DataContext = createContext<DataContextProps>({
  data: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setData: () => [],
  deleteItem: () => [],
});

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<DataContextProps['data']>(null);

  const getData = async () => {
    const response = await fetch('/data/example-data.json');
    const data = await response.json();
    setData(data);
  };

  const deleteItem = (id: string, layer: string) => {
    if (!data) return setData([]);
    switch (layer) {
      case 'main':
        if (data) {
          return setData(data?.filter((item) => item.data.ID !== id));
        } else {
          return setData([]);
        }
      case 'nemesis':
        return setData(
          data?.map((item) => {
            if (item.children?.has_nemesis?.records) {
              item.children.has_nemesis.records = item.children.has_nemesis.records.filter(
                (nemesis) => nemesis.data.ID !== id
              );
            }
            return item;
          })
        );
      case 'secrete':
        return setData(
          data?.map((item) => {
            if (item.children?.has_nemesis?.records) {
              item.children.has_nemesis.records = item.children.has_nemesis.records.map((nemesis) => {
                if (nemesis.children?.has_secrete?.records) {
                  nemesis.children.has_secrete.records = nemesis.children.has_secrete.records.filter(
                    (secrete) => secrete.data.ID !== id
                  );
                }
                return nemesis;
              });
            }
            return item;
          })
        );
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const value = useMemo<DataContextProps>(() => ({ data, setData, deleteItem }), [data]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
