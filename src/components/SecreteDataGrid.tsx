import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { Secrete, SecreteData } from '../types';
import { getHeaders } from '../utils';
import SecreteTableRow from './SecreteTableRow';

interface SecreteDataGridProps {
  items: Secrete[];
}

const SecreteDataGrid: FC<SecreteDataGridProps> = ({ items }) => {
  const headers = getHeaders<SecreteData>(items?.[0]?.data);
  console.log('newHeaders', headers);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TableContainer sx={{ maxHeight: '100%', height: '100%', paddingLeft: '50px' }}>
        <Table>
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
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SecreteDataGrid;
