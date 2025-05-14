import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";

const SignOutButton = ({ onSignOut }) => (
  <Box sx={{ position: "absolute", top: 16, right: 16, zIndex: 10 }}>
    <Button variant="contained" color="error" onClick={onSignOut}>
      Sign Out
    </Button>
  </Box>
);

SignOutButton.propTypes = {
  onSignOut: PropTypes.func.isRequired,
};

export default SignOutButton;
