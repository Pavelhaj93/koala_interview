import { Button, Collapse, Icon, TableCell, TableRow, TableRowProps } from '@mui/material';
import { FC, useContext, useState } from 'react';
import { NemesisData, Secrete, SecreteData } from '../types';
import { getCollapseIcon, getHeaders } from '../utils';
import SecreteDataGrid from './SecreteDataGrid';
import CloseIcon from '@mui/icons-material/Close';
import { DataContext } from '../context/DataContext';

interface NemesisTableRowProps {
  item: NemesisData;
  dataChildren?: Secrete[];
  sx?: TableRowProps['sx'];
}

const NemesisTableRow: FC<NemesisTableRowProps> = ({ item, dataChildren, sx }) => {
  const [openCollapse, setOpenCollapse] = useState<boolean>(false);
  const { deleteItem } = useContext(DataContext);
  const headers = dataChildren?.[0]?.data && getHeaders<SecreteData>(dataChildren?.[0]?.data);

  return (
    <>
      <TableRow sx={{ ...sx }}>
        <TableCell>
          {dataChildren && headers && (
            <Button onClick={() => setOpenCollapse(!openCollapse)} sx={{ cursor: 'pointer' }}>
              <Icon color="primary" component={getCollapseIcon(openCollapse ? 1 : 0)} />
            </Button>
          )}
        </TableCell>
        {Object.values(item).map((row, index) => (
          <TableCell key={index}>{row}</TableCell>
        ))}
        <TableCell>
          <Button>
            <CloseIcon color="error" onClick={() => deleteItem(item.ID, 'nemesis')} />
          </Button>
        </TableCell>
      </TableRow>
      <TableRow sx={{ ...sx }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          {dataChildren && headers && (
            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
              <SecreteDataGrid items={dataChildren} headers={headers} />
            </Collapse>
          )}
        </TableCell>
      </TableRow>
    </>
  );
};

export default NemesisTableRow;
