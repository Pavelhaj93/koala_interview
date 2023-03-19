import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import StyledTable from '../styled/StyledTable';
import { Secrete } from '../types';
import { getOddColor } from '../utils';

import SecreteTableRow from './SecreteTableRow';

interface SecreteDataGridProps {
  items: Secrete[];
  headers?: string[];
}

const SecreteDataGrid: FC<SecreteDataGridProps> = ({ items, headers }) => {
  return (
    <StyledTable sx={{ paddingLeft: '120px', overflow: 'hidden', width: '35vw' }}>
      <TableHead sx={{ backgroundColor: 'primary.main' }}>
        <TableRow>
          <TableCell></TableCell>
          {headers?.map((item, index) => {
            return <TableCell key={index}>{item}</TableCell>;
          })}
          <TableCell>Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item, index) => (
          <SecreteTableRow item={item.data} key={item.data.ID} sx={{ backgroundColor: getOddColor(index) }} />
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default SecreteDataGrid;
