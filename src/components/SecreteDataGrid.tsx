import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import StyledTable from '../styled/StyledTable';
import { Secrete, SecreteData } from '../types';
import { getHeaders } from '../utils';
import SecreteTableRow from './SecreteTableRow';

interface SecreteDataGridProps {
  items: Secrete[];
}

const SecreteDataGrid: FC<SecreteDataGridProps> = ({ items }) => {
  const headers = getHeaders<SecreteData>(items?.[0]?.data);

  return (
    <StyledTable sx={{ paddingLeft: '50px' }}>
      <TableHead sx={{ backgroundColor: '#46d7b3' }}>
        <TableRow>
          <TableCell></TableCell>
          {headers.map((item, index) => {
            return <TableCell key={index}>{item}</TableCell>;
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item, index) => (
          <SecreteTableRow item={item.data} key={index} />
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default SecreteDataGrid;
