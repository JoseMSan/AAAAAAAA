import {
  Button,
  Card,
  Container,
  Typography,
} from "@mui/material";

export default function AnimalCrossingCard({
  cromo,
  handleEditCard,
  deleteCard,
}) {

  const handleEdit = () => {
    handleEditCard(cromo._id);
  };

  const handleDelete = () => {
    deleteCard(cromo._id);
  };

  return (
      <Card className="card" style={{ backgroundColor: cromo.color }}>
        <Typography variant="h5">Nombre:</Typography>
        <Typography variant="body2">{cromo.nombre}</Typography>
        <Typography variant="h5">Personalidad:</Typography>
        <Typography variant="body2">{cromo.personalidad}</Typography>
        <Typography variant="h5">Especie:</Typography>
        <Typography variant="body2">{cromo.especie}</Typography>
        <Typography variant="h5">Cumpleaños:</Typography>
        <Typography variant="body2">{cromo.cumple}</Typography>
        <Typography variant="h5">Lema:</Typography>
        <Typography variant="body2">{cromo.lema}</Typography>
        <Typography variant="h5">Hobbie:</Typography>
        <Typography variant="body2">{cromo.hobbie}</Typography>
        <Container>
            <Button onClick={handleEdit}>
              Editar
            </Button>
            <Button onClick={handleDelete}>
              Eliminar
            </Button>
        </Container>
      </Card>
  );
}