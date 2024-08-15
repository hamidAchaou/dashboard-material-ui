import React from 'react';
import { Container, Typography, Grid, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DetailItem = ({ item }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth="md">
      <IconButton aria-label="back" sx={{ mr: 2 }} onClick={handleBack}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h4" align="center" gutterBottom>
        Details for {item.nom}
      </Typography>
      <Grid container spacing={3} style={{ marginTop: '16px' }}>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Representant:</strong></Typography>
            <Typography>{item.representant}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Mode Retour:</strong></Typography>
            <Typography>{item.mode_retour}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Activite:</strong></Typography>
            <Typography>{item.activite}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Contact:</strong></Typography>
            <Typography>{item.contact}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Type de Bien:</strong></Typography>
            <Typography>{item.type_bien}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Action:</strong></Typography>
            <Typography>{item.action}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Budget:</strong></Typography>
            <Typography>{item.budget}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Superficie:</strong></Typography>
            <Typography>{item.superficie}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Zone:</strong></Typography>
            <Typography>{item.zone}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Type d'Accompagnement:</strong></Typography>
            <Typography>{item.type_accompagnement}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Prix Alloué:</strong></Typography>
            <Typography>{item.prix_alloue}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Services Clôturés:</strong></Typography>
            <Typography>{item.services_clotures}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Services à Clôturer:</strong></Typography>
            <Typography>{item.services_a_cloturer}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>OK/NOK:</strong></Typography>
            <Typography>{item.ok_nok}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Annexes:</strong></Typography>
            <Typography>{item.annexes}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>CA Prévisionnel:</strong></Typography>
            <Typography>{item.ca_previsionnel}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>CA Réalisé:</strong></Typography>
            <Typography>{item.ca_realise}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Total CA:</strong></Typography>
            <Typography>{item.total_ca}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Status:</strong></Typography>
            <Typography>{item.status}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Date de Création:</strong></Typography>
            <Typography>{item.created_date}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="subtitle1"><strong>Date de Mise à Jour:</strong></Typography>
            <Typography>{item.update_date}</Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailItem;