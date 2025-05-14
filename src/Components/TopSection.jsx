import { Box, Typography, Stack, Button } from "@mui/material";
import PropTypes from "prop-types";

const TopSection = ({ activeFilter, handleFilter, clearAll }) => {
  return (
    <Box
      sx={{
        backgroundImage: "url('https://images.moneycontrol.com/static-mcnews/2024/09/20240906115648_Sheetal-Kumari-fi-23.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        borderRadius: 2,
        px: 2,
      }}
    >
      <Typography variant="h4" mb={2}>Science Fiction Stories</Typography>
      <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
        {["new", "in progress", "completed"].map((status) => (
          <Button
            key={status}
            variant="contained"
            color={status === "new" ? "info" : status === "in progress" ? "warning" : "success"}
            sx={{
              opacity: activeFilter === status || activeFilter === "" ? 1 : 0.6,
              border: activeFilter === status ? "2px solid white" : "none",
            }}
            onClick={() => handleFilter(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Button>
        ))}
        <Button variant="contained" color="secondary" onClick={clearAll}>Clear All</Button>
      </Stack>
    </Box>
  );
};

TopSection.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  clearAll: PropTypes.func.isRequired,
};

export default TopSection;
