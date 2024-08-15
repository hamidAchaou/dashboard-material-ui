import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import suiviData from '../../utils/data';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'representant', headerName: 'Representant', width: 130, align: "center", headerAlign: "center" },
  { field: 'nom', headerName: 'Nom', width: 130, align: "center", headerAlign: "center" },
  { field: 'mode_retour', headerName: 'Mode Retour', flex: 1, align: "center", headerAlign: "center" },
  { field: 'activite', headerName: 'Activite', flex: 1, align: "center", headerAlign: "center" },
  { field: 'contact', headerName: 'Contact', flex: 1, align: "center", headerAlign: "center" },
  { field: 'type_bien', headerName: 'Type de Bien', flex: 1, align: "center", headerAlign: "center" },
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
          color= "secondary"
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

const Team = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedRows = suiviData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handleEdit = (id) => {
    console.log(`Edit row with id ${id}`);
    // Add your logic for edit action
  };

  const handleDelete = (id) => {
    console.log(`Delete row with id ${id}`);
    // Add your logic for delete action
  };

  return (
    <div style={{ height: 600, width: '100%', display: 'flex', flexDirection: 'column' }}>
      <DataGrid
        rows={paginatedRows}
        columns={columns}
        getRowId={(row) => row.representant}
        pageSize={rowsPerPage}
        components={{
          Toolbar: () => null, // hide the toolbar
        }}
      />
      <Pagination
        count={Math.ceil(suiviData.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
        color="secondary"
        style={{ marginTop: 16, alignSelf: 'center' }}
      />
    </div>
  );
}

export default Team;