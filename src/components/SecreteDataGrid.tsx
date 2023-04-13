import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { FC, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import StyledTable from '../styled/StyledTable';
import { Secrete, TableLayer } from '../types';
import { getOddColor } from '../utils';
import GenericTableRow from './GenericTableRow';

interface SecreteDataGridProps {
  items: Secrete[];
  headers?: string[];
}

const SecreteDataGrid: FC<SecreteDataGridProps> = ({ items, headers }) => {
  const { deleteItem } = useContext(DataContext);
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
          <GenericTableRow
            item={item.data}
            key={item.data.ID}
            sx={{ backgroundColor: getOddColor(index) }}
            handleDelete={() => deleteItem(item.data.ID, TableLayer.SECRETE)}
          />
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default SecreteDataGrid;
