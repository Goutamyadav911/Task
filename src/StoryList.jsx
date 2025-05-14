import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import axios from "axios";

import TopSection from "./Components/TopSection";
import StoryGrid from "./Components/StoryGrid";
import PaginationControls from "./Components/PaginationControls";
import SignOutButton from "./Components/SignOutButton";

const StoryList = () => {
  const [stories, setStories] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get("https://mxpertztestapi.onrender.com/api/sciencefiction");
        setStories(response.data);
        setFiltered(response.data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };
    fetchStories();
  }, []);

  const handleFilter = (status) => {
    setActiveFilter(status);
    const filteredList = stories.filter(
      (story) => story.status.toLowerCase() === status.toLowerCase()
    );
    setFiltered(filteredList);
    setCurrentPage(1);
  };

  const clearAll = () => {
    setFiltered(stories);
    setActiveFilter("");
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filtered.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentStories = filtered.slice(startIndex, startIndex + cardsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const handleSignOut = () => {
    alert("Signed out!");
    // Add actual sign-out logic here
  };

  return (
    <Box mt={4} position="relative">
      <SignOutButton onSignOut={handleSignOut} />
      <TopSection
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        clearAll={clearAll}
      />
      <Box mt={4}>
        <Grid container spacing={4}>
          <StoryGrid stories={currentStories} />
        </Grid>
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </Box>
    </Box>
  );
};

export default StoryList;
