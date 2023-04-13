import { Alert, Button, Stack, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { FC, useContext } from 'react';
import { DataContext } from '../context/DataContext';

import StyledTable from '../styled/StyledTable';
import { Data, NemesisData, TableLayer } from '../types';
import { getHeaders, getOddColor, reload } from '../utils';
import GenericTableRow from './GenericTableRow';
import NemesisDataGrid from './NemesisDataGrid';

const MainDataGrid: FC = () => {
  const { data, loading, error } = useContext(DataContext);
  const { deleteItem } = useContext(DataContext);

  const headers = getHeaders<Data>(data?.[0].data);

  if (loading) {
    return <Typography variant="h2">Loading...</Typography>;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (data) {
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
            <GenericTableRow
              key={item.data.ID}
              item={item.data}
              dataChildren={item.children?.has_nemesis?.records}
              sx={{ backgroundColor: getOddColor(index) }}
              handleDelete={() => deleteItem(item.data.ID, TableLayer.MAIN)}
            >
              {item.children?.has_nemesis?.records && (
                <NemesisDataGrid
                  items={item.children.has_nemesis.records}
                  headers={getHeaders<NemesisData>(item.children?.has_nemesis?.records?.[0]?.data)}
                />
              )}
            </GenericTableRow>
          ))}
        </TableBody>
      </StyledTable>
    );
  }

  return (
    <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Typography variant="h2">No data</Typography>
      <Button color="primary" variant="contained" onClick={reload}>
        Reload
      </Button>
    </Stack>
  );
};

export default MainDataGrid;
