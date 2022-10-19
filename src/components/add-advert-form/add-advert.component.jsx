import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const theme = createTheme();

export default function AddAdvert() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccessibilityNewIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Jak możemy ci pomóc
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Tytuł ogłoszenia"
              name="title"
              autoComplete="title"
              autoFocus
            />
                  <FormControl sx={{ minWidth: 150, margin: 2 }}>

            <InputLabel id="demo-simple-select-label">Miasto</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Miasto"
          onChange={handleChange}
        >
          <MenuItem value={"Nowy Sącz"}>Nowy Sącz</MenuItem>
          <MenuItem value={"Kraków"}>Kraków</MenuItem>
          <MenuItem value={"Warszawa"}>Warszawa</MenuItem>
        </Select>
        </FormControl>
        <TextField
        margin="normal"
        id="date"
        label="Kiedy"
        type="date"
        defaultValue = {today}
        sx={{ marginLeft:4}}
        InputLabelProps={{
          shrink: true,
        }}
      />
        <TextField
        autoComplete="description"
          fullWidth
          id="outlined-multiline-flexible"
          label="Opisz swoją potrzebę"
          name="description"
          multiline
          maxRows={4}
        />
        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Wyślij ogłoszenie
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}