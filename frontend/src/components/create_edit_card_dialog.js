import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import * as React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MuiColorInput } from "mui-color-input";

export default function CreateEditCardDialog({
  onClose,
  open,
  crearCromo,
  editarCromo,
  cromo,
}) {

  const [nombre, setNombre] = React.useState("");
  const [personalidad, setPersonalidad] = React.useState("");
  const [especie, setEspecie] = React.useState("");
  const [cumple, setCumple] = React.useState("");
  const [lema, setLema] = React.useState("");
  const [hobbie, setHobbie] = React.useState("");

  const [color, setColor] = React.useState("#ffffff");
  const handleColorChange = (event) => {
    setColor(event);
  };

  const reset = () => {
    setNombre("");
    setPersonalidad("");
    setEspecie("");
    setCumple("");
    setLema("");
    setHobbie("");
    setColor("ffffff");
  };

  const guardar = () => {
    if (!nombre || !personalidad || !especie || !cumple || !lema || !hobbie) {
      alert("Alguno de los datos esta vacio o no es aceptado");
    } else {
      if (cromo !== false) {
        editarCromo({
          id: cromo[0]._id,
          nombre,
          personalidad,
          especie,
          cumple,
          lema,
          hobbie,
          color,
        });
      } else {
        crearCromo({
          id: Date.now(),
          nombre,
          personalidad,
          especie,
          cumple,
          lema,
          hobbie,
          color,
        });
      }
      reset();
      handleClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  React.useEffect(() => {
    if (cromo !== false) {
      setNombre(cromo[0].nombre);
      setPersonalidad(cromo[0].personalidad);
      setEspecie(cromo[0].especie);
      setCumple(cromo[0].cumple);
      setLema(cromo[0].lema);
      setHobbie(cromo[0].hobbie);
      setColor(cromo[0].color);
    } else {
      reset();
    }
  }, [cromo]);

  return (
    <Dialog open={open}>
      <DialogTitle>Introduce los datos del cromo</DialogTitle>
      <DialogContent>
        <TextField
          value={nombre}
          margin="dense"
          label="Nombre:"
          fullWidth
          required
          onChange={(e) => setNombre(e.target.value)}
        />
        <TextField
          value={personalidad}
          margin="dense"
          label="Personalidad:"
          fullWidth
          required
          onChange={(e) => setPersonalidad(e.target.value)}
        />
        <TextField
          value={especie}
          margin="dense"
          label="Especie:"
          fullWidth
          required
          onChange={(e) => setEspecie(e.target.value)}
        />
        <DatePicker
          format="DD/MM/YYYY"
          margin="dense"
          label="Cumpleaños:"
          fullWidth
          required
          onChange={(e) => setCumple(new Date(e).toLocaleDateString("es-ES"))}
        />
        <TextField
          value={lema}
          margin="dense"
          label="Lema:"
          fullWidth
          required
          onChange={(e) => setLema(e.target.value)}
        />
        <TextField
          value={hobbie}
          margin="dense"
          label="Hobbie:"
          fullWidth
          required
          onChange={(e) => setHobbie(e.target.value)}
        />
        <MuiColorInput
          value={color}
          margin="dense"
          label="Color de fondo:"
          fullWidth
          required
          onChange={handleColorChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={guardar}>Guardar</Button>
        <Button onClick={handleClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
}
