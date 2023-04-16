import { CssBaseline, ThemeProvider } from '@mui/material';
import { FC } from 'react';

import MainDataGrid from './components/MainDataGrid';
import { DataProvider } from './context/DataContext';
import { theme } from './theme/MuiTheme';

const App: FC = () => {
  return (
    <CssBaseline>
      <DataProvider>
        <ThemeProvider theme={theme}>
          <MainDataGrid />
        </ThemeProvider>
      </DataProvider>
    </CssBaseline>
  );
};

export default App;
