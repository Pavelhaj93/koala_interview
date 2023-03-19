import { Button, Stack, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { FC, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import StyledTable from '../styled/StyledTable';
import { Data } from '../types';
import { getHeaders, getOddColor } from '../utils';
import MainTableRow from './MainTableRow';

const MainDataGrid: FC = () => {
  const { data } = useContext(DataContext);
  const headers = data?.[0]?.data && getHeaders<Data>(data?.[0].data);

  function reload() {
    window.location.reload();
  }

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
              sx={{ backgroundColor: getOddColor(index) }}
            />
          ))}
        </TableBody>
      </StyledTable>
    );
  } else {
    return (
      <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h2">No data</Typography>
        <Button color="primary" variant="contained" onClick={() => reload()}>
          Reload
        </Button>
      </Stack>
    );
  }
};

export default MainDataGrid;
