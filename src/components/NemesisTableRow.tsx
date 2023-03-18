import { Button, Collapse, Icon, TableCell, TableRow } from '@mui/material';
import { FC, useState } from 'react';
import { NemesisData, Secrete } from '../types';
import { getCollapseIcon } from '../utils';
import SecreteDataGrid from './SecreteDataGrid';

interface NemesisTableRowProps {
  item: NemesisData;
  dataChildren?: Secrete[];
}

const NemesisTableRow: FC<NemesisTableRowProps> = ({ item, dataChildren }) => {
  const [openCollapse, setOpenCollapse] = useState<boolean>(false);

  return (
    <>
      <TableRow>
        <TableCell>
          {dataChildren && (
            <Button onClick={() => setOpenCollapse(!openCollapse)} sx={{ cursor: 'pointer' }}>
              <Icon color="primary" component={getCollapseIcon(openCollapse ? 1 : 0)} />
            </Button>
          )}
        </TableCell>
        {Object.values(item).map((row, index) => (
          <TableCell key={index}>{row}</TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={openCollapse} timeout="auto" unmountOnExit>
            {dataChildren && <SecreteDataGrid items={dataChildren} />}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default NemesisTableRow;
