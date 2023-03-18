import { TableCell, TableRow } from '@mui/material';
import { FC } from 'react';
import { SecreteData } from '../types';

interface SecreteTableRowProps {
  item: SecreteData;
}

const SecreteTableRow: FC<SecreteTableRowProps> = ({ item }) => {
  return (
    <>
      <TableRow>
        <TableCell></TableCell>
        {Object.values(item).map((row, index) => (
          <TableCell key={index}>{row}</TableCell>
        ))}
      </TableRow>
    </>
  );
};

export default SecreteTableRow;
