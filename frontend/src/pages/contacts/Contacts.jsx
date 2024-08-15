import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Button, Typography, Stack, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { rows as suiviData } from './data';

const columns = [
  { field: 'registerId', headerName: 'Register ID', width: 33, flex: 1, align: "center", headerAlign: "center" },
  { field: 'name', headerName: 'Name', width: 130, align: "center", headerAlign: "center" },
  { field: 'phoneNumber', headerName: 'Phone Number', flex: 1, align: "center", headerAlign: "center" },
  { field: 'email', headerName: 'Email', flex: 1, align: "center", headerAlign: "center" },
  { field: 'age', headerName: 'Age', width: 33, align: "center", headerAlign: "center" },
  { field: 'address', headerName: 'Address', flex: 1, align: "center", headerAlign: "center" },
  { field: 'city', headerName: 'City', flex: 1, align: "center", headerAlign: "center" },
  { field: 'zipCode', headerName: 'Zip Code', flex: 1, align: "center", headerAlign: "center" },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 320,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Box>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => handleEdit(params.row.id)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          style={{ marginLeft: 8 }}
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 8 }}
          component={Link}
          to={`/suivi/details/${params.row.id}`}
        >
          More Details
        </Button>
      </Box>
    )
  }
];

const Contacts = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 7;
  const theme = useTheme();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedRows = suiviData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handleEdit = (id) => {
    console.log(`Edit row with id ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete row with id ${id}`);
  };

  return (
    <Stack spacing={2} style={{ height: 600, width: '100%' }}>
      <Typography
        variant="h4"
        component="h2"
        style={{ marginBottom: 16, color: theme.palette.secondary.main }}
      >
        Data Contact
      </Typography>
      <DataGrid
        rows={paginatedRows}
        columns={columns}
        getRowId={(row) => row.id}
        pageSize={rowsPerPage}
        slots={{ toolbar: GridToolbar }}
      />
      <Pagination
        count={Math.ceil(suiviData.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
        color="secondary"
        style={{ marginTop: 16, alignSelf: 'center' }}
      />
    </Stack>
  );
};

export default Contacts;
