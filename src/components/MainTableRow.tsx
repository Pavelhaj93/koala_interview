import { Button, Collapse, Icon, TableCell, TableRow, TableRowProps } from '@mui/material';
import { FC, useContext, useState } from 'react';
import { Data, Nemesis, NemesisData, TableLayer } from '../types';
import { getCollapseIcon, getHeaders } from '../utils';

import NemesisDataGrid from './NemesisDataGrid';
import CloseIcon from '@mui/icons-material/Close';
import { DataContext } from '../context/DataContext';

interface CustomTableRowProps {
  item: Data;
  dataChildren?: Nemesis[];
  sx?: TableRowProps['sx'];
}

const CustomTableRow: FC<CustomTableRowProps> = ({ item, dataChildren, sx }) => {
  const [openCollapse, setOpenCollapse] = useState<boolean>(false);
  const { deleteItem } = useContext(DataContext);
  const headers = dataChildren?.[0]?.data && getHeaders<NemesisData>(dataChildren?.[0]?.data);

  return (
    <>
      <TableRow sx={{ ...sx }}>
        <TableCell>
          {dataChildren && headers && (
            <Button onClick={() => setOpenCollapse(!openCollapse)} sx={{ cursor: 'pointer' }}>
              <Icon color="primary" component={getCollapseIcon(openCollapse ? 1 : 0)} fontSize="large" />
            </Button>
          )}
        </TableCell>
        {Object.values(item).map((row, index) => (
          <TableCell key={index}>{row}</TableCell>
        ))}
        <TableCell>
          <Button>
            <CloseIcon color="error" onClick={() => deleteItem(item.ID, TableLayer.MAIN)} />
          </Button>
        </TableCell>
      </TableRow>
      <TableRow sx={{ ...sx }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          {dataChildren && headers && (
            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
              <NemesisDataGrid items={dataChildren} headers={headers} />
            </Collapse>
          )}
        </TableCell>
      </TableRow>
    </>
  );
};

export default CustomTableRow;
