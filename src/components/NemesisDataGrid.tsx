import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { FC, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import StyledTable from '../styled/StyledTable';
import { Nemesis, SecreteData, TableLayer } from '../types';
import { getHeaders, getOddColor } from '../utils';
import GenericTableRow from './GenericTableRow';

import SecreteDataGrid from './SecreteDataGrid';

interface NemesisDataGridProps {
  items: Nemesis[];
  headers?: string[];
}

const NemesisDataGrid: FC<NemesisDataGridProps> = ({ items, headers }) => {
  const { deleteItem } = useContext(DataContext);

  return items.length ? (
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
          <GenericTableRow
            key={item.data.ID}
            item={item.data}
            dataChildren={item.children?.has_secrete?.records}
            sx={{ backgroundColor: getOddColor(index) }}
            handleDelete={() => deleteItem(item.data.ID, TableLayer.NEMESIS)}
          >
            <SecreteDataGrid
              items={item.children?.has_secrete?.records}
              headers={getHeaders<SecreteData>(item.children?.has_secrete?.records?.[0]?.data)}
            ></SecreteDataGrid>
          </GenericTableRow>
        ))}
      </TableBody>
    </StyledTable>
  ) : null;
};

export default NemesisDataGrid;
