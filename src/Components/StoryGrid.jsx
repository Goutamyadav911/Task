import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import StoryCard from "./StoryCard";

const StoryGrid = ({ stories }) => {
  if (stories.length === 0) {
    return (
      <Grid item xs={12}>
        <Typography variant="h6" color="text.secondary">No stories available.</Typography>
      </Grid>
    );
  }

  return (
    <>
      {stories.map((story, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <StoryCard story={story} />
        </Grid>
      ))}
    </>
  );
};

StoryGrid.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      status: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default StoryGrid;
