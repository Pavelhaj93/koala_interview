import { Box, Table, TableContainer, TableContainerProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

interface StyledTableProps extends PropsWithChildren {
  sx?: TableContainerProps['sx'];
}

const StyledTable: FC<StyledTableProps> = ({ children, sx }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TableContainer sx={{ maxHeight: '100%', height: '100%', ...sx }}>
        <Table>{children}</Table>
      </TableContainer>
    </Box>
  );
};

export default StyledTable;
