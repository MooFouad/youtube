import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromApi } from "../assets/fetchFromApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const {searchTerm} = useParams()
  
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    // {/* videos box */}
    <Box
    p={2}
    sx={{
      overflowY: "auto",
      height: "90vh",
      flex: 2,
    }}
  >
    <Typography
      variant="h4"
      mb={2}
      fontWeight="bold"
      sx={{ color: "white" }}
    >
      Search Results For :
      <span style={{ color: "#fc1503" }}>{searchTerm}</span> Videos
    </Typography>
    <Videos videos={videos} />
  </Box>
  )
}

export default SearchFeed
