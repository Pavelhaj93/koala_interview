import { Button, Collapse, Icon, TableCell, TableRow, TableRowProps } from '@mui/material';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { getCollapseIcon } from '../utils';
import CloseIcon from '@mui/icons-material/Close';

export const dataTestIds = {
  deleteButton: 'delete-button',
};

interface GenericTableRowProps<T extends { [s: string]: ReactNode } | ArrayLike<ReactNode>, CH>
  extends PropsWithChildren {
  item: T;
  dataChildren?: CH[];
  sx?: TableRowProps['sx'];
  handleDelete: () => void;
}

function GenericTableRow<T extends { [s: string]: ReactNode } | ArrayLike<ReactNode>, CH>({
  item,
  dataChildren,
  sx,
  handleDelete,
  children,
}: GenericTableRowProps<T, CH>): JSX.Element {
  const [openCollapse, setOpenCollapse] = useState<boolean>(false);

  return (
    <>
      <TableRow sx={{ ...sx }}>
        <TableCell>
          {dataChildren?.length ? (
            <Button
              onClick={() => setOpenCollapse(!openCollapse)}
              sx={{ cursor: 'pointer' }}
              data-testid={dataTestIds.deleteButton}
            >
              <Icon color="primary" component={getCollapseIcon(openCollapse ? 1 : 0)} fontSize="large" />
            </Button>
          ) : null}
        </TableCell>
        {Object.values(item).map((row, index) => (
          <TableCell key={index}>{row}</TableCell>
        ))}
        <TableCell>
          <Button onClick={() => handleDelete()}>
            <CloseIcon color="error" />
          </Button>
        </TableCell>
      </TableRow>
      {dataChildren && (
        <TableRow sx={{ ...sx }}>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
              {children}
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}

export default GenericTableRow;
