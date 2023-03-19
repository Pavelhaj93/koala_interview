import { CssBaseline, ThemeProvider } from '@mui/material';

import MainDataGrid from './components/MainDataGrid';
import { DataProvider } from './context/DataContext';
import { theme } from './theme/MuiTheme';

const App = () => {
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
