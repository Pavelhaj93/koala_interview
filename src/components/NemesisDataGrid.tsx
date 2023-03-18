import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import StyledTable from '../styled/StyledTable';
import { Nemesis, NemesisData } from '../types';
import { getHeaders } from '../utils';
import NemesisTableRow from './NemesisTableRow';

interface NemesisDataGridProps {
  items: Nemesis[];
}

const NemesisDataGrid: FC<NemesisDataGridProps> = ({ items }) => {
  const headers = getHeaders<NemesisData>(items[0].data);

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
          <NemesisTableRow item={item.data} key={index} dataChildren={item.children.has_secrete.records} />
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default NemesisDataGrid;
