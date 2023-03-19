import { Box, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { FC, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import StyledTable from '../styled/StyledTable';
import { Data } from '../types';
import { getHeaders } from '../utils';
import MainTableRow from './MainTableRow';

const MainDataGrid: FC = () => {
  const { data } = useContext(DataContext);
  const headers = data?.[0]?.data && getHeaders<Data>(data?.[0].data);

  if (data && headers) {
    return (
      <StyledTable>
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
          {data?.map((item, index) => (
            <MainTableRow
              item={item.data}
              dataChildren={item.children?.has_nemesis?.records}
              key={item.data.ID}
              sx={{ backgroundColor: index % 2 == 0 ? 'secondary.main' : 'secondary.dark' }}
            />
          ))}
        </TableBody>
      </StyledTable>
    );
  } else {
    return <Box>No data</Box>;
  }
};

export default MainDataGrid;
