import { Button, TableCell, TableRow, TableRowProps } from '@mui/material';
import { FC, useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { SecreteData, TableLayer } from '../types';
import { DataContext } from '../context/DataContext';

interface SecreteTableRowProps {
  item: SecreteData;
  sx: TableRowProps['sx'];
}

const SecreteTableRow: FC<SecreteTableRowProps> = ({ item, sx }) => {
  const { deleteItem } = useContext(DataContext);

  return (
    <>
      <TableRow sx={{ ...sx }}>
        <TableCell></TableCell>
        {Object.values(item).map((row, index) => (
          <TableCell key={index}>{row}</TableCell>
        ))}
        <TableCell>
          <Button>
            <CloseIcon color="error" onClick={() => deleteItem(item.ID, TableLayer.SECRETE)} />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default SecreteTableRow;
