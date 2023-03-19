import { ThemeProvider } from '@mui/material';

import MainDataGrid from './components/MainDataGrid';
import { DataProvider } from './context/DataContext';
import { theme } from './theme/MuiTheme';

const App = () => {
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <MainDataGrid />
      </ThemeProvider>
    </DataProvider>
  );
};

export default App;
