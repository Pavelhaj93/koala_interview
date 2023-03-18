import { Button, Collapse, Icon, Stack, styled, TableCell, TableRow, TableRowProps, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { Data, Nemesis } from '../types';
import { getCollapseIcon } from '../utils';
import NemesisDataGrid from './NemesisDataGrid';

interface CustomTableRowProps {
  item: Data;
  dataChildren?: Nemesis[];
  sx?: TableRowProps['sx'];
}

const CustomTableRow: FC<CustomTableRowProps> = ({ item, dataChildren, sx }) => {
  const [openCollapse, setOpenCollapse] = useState<boolean>(false);
  console.log('item', item, 'dataChildren', dataChildren);

  return (
    <>
      <TableRow sx={{ ...sx }}>
        <TableCell>
          {dataChildren && (
            <Button onClick={() => setOpenCollapse(!openCollapse)} sx={{ cursor: 'pointer' }}>
              <Icon color="primary" component={getCollapseIcon(openCollapse ? 1 : 0)} fontSize="large" />
            </Button>
          )}
        </TableCell>
        {Object.values(item).map((row, index) => (
          <TableCell key={index}>
            <Typography color="primary">{row}</Typography>
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={openCollapse} timeout="auto" unmountOnExit>
            {dataChildren && <NemesisDataGrid items={dataChildren} />}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CustomTableRow;
