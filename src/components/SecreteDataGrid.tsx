import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import StyledTable from '../styled/StyledTable';
import { Secrete } from '../types';

import SecreteTableRow from './SecreteTableRow';

interface SecreteDataGridProps {
  items: Secrete[];
  headers?: string[];
}

const SecreteDataGrid: FC<SecreteDataGridProps> = ({ items, headers }) => {
  return (
    <StyledTable sx={{ paddingLeft: '50px' }}>
      <TableHead sx={{ backgroundColor: '#46d7b3' }}>
        <TableRow>
          <TableCell></TableCell>
          {headers?.map((item, index) => {
            return <TableCell key={index}>{item}</TableCell>;
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item, index) => (
          <SecreteTableRow
            item={item.data}
            key={item.data.ID}
            sx={{ backgroundColor: index % 2 == 0 ? 'secondary.main' : 'secondary.dark' }}
          />
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default SecreteDataGrid;
