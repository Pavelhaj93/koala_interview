import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import StyledTable from '../styled/StyledTable';
import { Nemesis } from '../types';
import { getOddColor } from '../utils';

import NemesisTableRow from './NemesisTableRow';

interface NemesisDataGridProps {
  items: Nemesis[];
  headers?: string[];
}

const NemesisDataGrid: FC<NemesisDataGridProps> = ({ items, headers }) => {
  return (
    <StyledTable sx={{ paddingLeft: '50px', overflow: 'hidden', width: '50vw' }}>
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
          <NemesisTableRow
            item={item.data}
            key={item.data.ID}
            dataChildren={item.children.has_secrete.records}
            sx={{ backgroundColor: getOddColor(index) }}
          />
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default NemesisDataGrid;
