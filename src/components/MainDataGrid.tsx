import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import StyledTable from '../styled/StyledTable';
import { theme } from '../theme/MuiTheme';
import { Data, Item } from '../types';
import { getHeaders } from '../utils';
import MainTableRow from './MainTableRow';

interface MainDataGridProps {
  items: Item[] | null;
}

const MainDataGrid: FC<MainDataGridProps> = ({ items }) => {
  const headers = getHeaders<Data>(items?.[0].data);

  return (
    <StyledTable>
      <TableHead sx={{ backgroundColor: theme.palette.primary.main }}>
        <TableRow>
          <TableCell></TableCell>
          {headers.map((item, index) => {
            return <TableCell key={index}>{item}</TableCell>;
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {items?.map((item, index) => (
          <MainTableRow
            item={item.data}
            dataChildren={item.children?.has_nemesis?.records}
            key={index}
            sx={{ backgroundColor: index % 2 == 0 ? 'secondary.main' : 'secondary.dark' }}
          />
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default MainDataGrid;
