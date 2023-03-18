import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { Nemesis, NemesisData } from '../types';
import { getHeaders } from '../utils';
import NemesisTableRow from './NemesisTableRow';

interface NemesisDataGridProps {
  items: Nemesis[];
}

const NemesisDataGrid: FC<NemesisDataGridProps> = ({ items }) => {
  const headers = getHeaders<NemesisData>(items[0].data);
  //   console.log('items', items);
  //   console.log('dataChildren', dataChildren);

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
              <NemesisTableRow item={item.data} key={index} dataChildren={item.children.has_secrete.records} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default NemesisDataGrid;
