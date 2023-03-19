import { createContext, FC, PropsWithChildren, SetStateAction, useEffect, useMemo, useState } from 'react';
import { Item, TableLayer } from '../types';

interface DataContextProps {
  data: Item[] | null;
  loading: boolean;
  error: string;
  setData: (value: SetStateAction<Item[] | null>) => void;
  deleteItem: (id: string, layer: TableLayer) => void;
}

export const DataContext = createContext<DataContextProps>({
  data: null,
  loading: true,
  error: '',
  setData: () => [],
  deleteItem: () => [],
});

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<DataContextProps['data']>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const deleteItem = (id: string, layer: TableLayer) => {
    if (!data) return;
    switch (layer) {
      case 'main':
        if (data) {
          return setData(data?.filter((item) => item.data.ID !== id));
        }
        return data;
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
      default:
        return data;
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('./data/example-data.json');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const value = useMemo<DataContextProps>(() => ({ data, loading, error, setData, deleteItem }), [data]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
