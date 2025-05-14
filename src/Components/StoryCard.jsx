import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";
import PropTypes from "prop-types";

const getStatusColor = (status) => {
  switch ((status || "").toLowerCase()) {
    case "new": return "info";
    case "in progress": return "warning";
    case "completed": return "success";
    default: return "default";
  }
};

const StoryCard = ({ story }) => {
  return (
    <Card sx={{ bgcolor: "#1e1e3f", color: "white", height: "100%" }}>
      <CardMedia
        component="img"
        height="180"
        image={story.image || "https://placehold.co/180x120?text=No+Image"}
        alt={story.title || "Story Image"}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>{story.title || "No Title"}</Typography>
        <Chip
          label={story.status || "No Status"}
          color={getStatusColor(story.status)}
          sx={{
            backgroundColor: "white",
            color: "#333",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        />
      </CardContent>
    </Card>
  );
};

StoryCard.propTypes = {
  story: PropTypes.shape({
    title: PropTypes.string,
    status: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default StoryCard;
