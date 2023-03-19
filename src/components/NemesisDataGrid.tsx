import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import StyledTable from '../styled/StyledTable';
import { Nemesis } from '../types';

import NemesisTableRow from './NemesisTableRow';

interface NemesisDataGridProps {
  items: Nemesis[];
  headers?: string[];
}

const NemesisDataGrid: FC<NemesisDataGridProps> = ({ items, headers }) => {
  return (
    <StyledTable sx={{ paddingLeft: '50px', overflow: 'hidden', width: '50vw' }}>
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
          <NemesisTableRow
            item={item.data}
            key={item.data.ID}
            dataChildren={item.children.has_secrete.records}
            sx={{ backgroundColor: index % 2 == 0 ? 'secondary.main' : 'secondary.dark' }}
          />
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default NemesisDataGrid;
