import { Button, Collapse, Icon, Stack, styled, TableCell, TableRow } from '@mui/material';
import { FC, useState } from 'react';
import { Data, Nemesis } from '../types';
import { getCollapseIcon } from '../utils';
import NemesisDataGrid from './NemesisDataGrid';

interface CustomTableRowProps {
  item: Data;
  dataChildren?: Nemesis[];
}

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#f2f2f2',
  },
}));

const CustomTableRow: FC<CustomTableRowProps> = ({ item, dataChildren }) => {
  const [openCollapse, setOpenCollapse] = useState<boolean>(false);
  console.log('item', item, 'dataChildren', dataChildren);

  return (
    <>
      <StyledTableRow>
        <TableCell>
          {dataChildren && (
            <Button onClick={() => setOpenCollapse(!openCollapse)} sx={{ cursor: 'pointer' }}>
              <Icon color="primary" component={getCollapseIcon(openCollapse ? 1 : 0)} fontSize="large" />
            </Button>
          )}
        </TableCell>
        {Object.values(item).map((row, index) => (
          <TableCell key={index}>{row}</TableCell>
        ))}
      </StyledTableRow>
      <StyledTableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={openCollapse} timeout="auto" unmountOnExit>
            {dataChildren && <NemesisDataGrid items={dataChildren} />}
          </Collapse>
        </TableCell>
      </StyledTableRow>
    </>
  );
};

export default CustomTableRow;
