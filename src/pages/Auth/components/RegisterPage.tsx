import {
  Container,
  CssBaseline,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";

function RegisterPage({
  toggleRegisterForm,
  changePassword,
  changeEmail,
  changeName,
  createUser,
  changeUsername,
}: {
  toggleRegisterForm: () => void;
  changePassword: (arg: string) => void;
  changeName: (arg: string) => void;
  changeEmail: (arg: string) => void;
  changeUsername: (arg: string) => void;
  createUser: () => void;
}) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            autoComplete="given-name"
            name="name"
            required
            fullWidth
            id="name"
            label="Name"
            autoFocus
            onChange={(e) => changeName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => changeEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => changePassword(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            name="username"
            label="Username"
            id="username"
            autoComplete="given-name"
            onChange={(e) => changeUsername(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: "#1f1811" }}
            onClick={(e) => {
              e.preventDefault();
              createUser();
            }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={toggleRegisterForm}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default RegisterPage;
