import styled from '@emotion/styled';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Data, Item } from '../types';
import { getHeaders } from '../utils';
import CustomTableRow from './CustomTableRow';

const DataGrid: FC = () => {
  const [data, setData] = useState<Item[] | null>(null);

  const getData = async () => {
    const response = await fetch('/data/example-data.json');
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const headers = getHeaders<Data>(data?.[0].data);

  console.log(headers);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TableContainer sx={{ maxHeight: '100%', height: '100%' }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#46d7b3' }}>
            <TableRow>
              <TableCell></TableCell>
              {headers.map((item, index) => {
                return <TableCell key={index}>{item}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, index) => (
              <CustomTableRow item={item.data} dataChildren={item.children?.has_nemesis?.records} key={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataGrid;
