import Card from "../components/animal_crossing_card";
import CardForm from "../components/create_edit_card_dialog";
import { useParams } from "react-router-dom";
import * as React from "react";
import axios from "axios";
import { Alert, Box, Button, Container, Typography } from "@mui/material";

export default function Cards() {
  const { user } = useParams();

  //Codigo para manejar el dialogo
  const [open, setOpen] = React.useState(false);

  const [edit, setEdit] = React.useState(false);

  const handleOpen = () => {
    showDelet(false);
    showEditCheck(false);
    setOpen(true);
  };

  function handleEditar(id) {
    showDelet(false);
    showEditCheck(false);
    setEdit(cardList.filter((cromo) => cromo._id === id));
    handleOpen();
  }

  const handleClose = () => {
    setEdit(false);
    setOpen(false);
  };
  //***********************

  const [cardList, setCardList] = React.useState([]);

  const [delet, showDelet] = React.useState(false);

  const [editCheck, showEditCheck] = React.useState(false);


  React.useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5000/${user}/cards`,
    }).then((response) => {
      setCardList(response.data);
    });
  });

  return (
    <Container className="cards-box">
      <Box>
        <Typography variant="h2">Cromos de {user}</Typography>
        <Button variant="contained" onClick={handleOpen}>
          Crear cromo
        </Button>
      </Box>
      <Box>
        <CardForm
          open={open}
          onClose={handleClose}
          crearCromo={crear}
          editarCromo={editar}
          cromo={edit}
        />
      </Box>
      <Box>{delet && <Alert severity="success">Cromo eliminado correctamente</Alert>}</Box>
      <Box>{editCheck && <Alert severity="success">Cromo editado correctamente</Alert>}</Box>
      <Box className="card-list">
        {cardList.map((card) => (
          <Card
            cromo={card}
            handleEditCard={handleEditar}
            deleteCard={eliminar}
          />
        ))}
      </Box>
    </Container>
  );

  function crear(params) {
    var cromo = {
      id: params.id,
      nombre: params.nombre,
      personalidad: params.personalidad,
      especie: params.especie,
      cumple: params.cumple,
      lema: params.lema,
      hobbie: params.hobbie,
      color: params.color,
    };

    axios({
      method: "post",
      url: `http://localhost:5000/${user}/cards`,
      data: cromo,
    }).then((response) => {
      setCardList([...cardList, response.data]);
    });
  }

  function eliminar(id) {
    axios({
      method: "delete",
      url: `http://localhost:5000/${user}/cards/${id}`,
    }).then((response) => {
      showDelet(true);
    });
    showEditCheck(false);
    //setCardList(cardList.filter((cromo) => cromo.id !== id));
  }

  function editar(params) {
    var cromo = {
      id: params.id,
      nombre: params.nombre,
      personalidad: params.personalidad,
      especie: params.especie,
      cumple: params.cumple,
      lema: params.lema,
      hobbie: params.hobbie,
      color: params.color,
    };

    axios({
      method: "put",
      url: `http://localhost:5000/${user}/cards/${params.id}`,
      data: cromo
    }).then((response) => {
      showEditCheck(true);
    });

    showDelet(false);
  }
}
