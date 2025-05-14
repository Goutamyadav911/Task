import { Stack, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";

const PaginationControls = ({ currentPage, totalPages, handlePrev, handleNext }) => {
  if (totalPages <= 1) return null;

  return (
    <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
      <Button variant="contained" onClick={handlePrev} disabled={currentPage === 1}>
        Previous
      </Button>
      <Typography color="white" pt={1}>
        Page {currentPage} of {totalPages}
      </Typography>
      <Button variant="contained" onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </Button>
    </Stack>
  );
};

PaginationControls.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default PaginationControls;
