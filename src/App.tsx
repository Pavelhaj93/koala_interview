import { createTheme, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import MainDataGrid from './components/MainDataGrid';
import { theme } from './theme/MuiTheme';
import { Data, Item } from './types';
import { getHeaders } from './utils';

const App = () => {
  const [data, setData] = useState<Item[] | null>(null);

  const getData = async () => {
    const response = await fetch('/data/example-data.json');
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MainDataGrid items={data} />
    </ThemeProvider>
  );
};

export default App;
