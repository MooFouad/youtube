import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetial from './components/VideoDetial';
import ChannelDetial from './components/ChannelDetial';
import SearchFeed from './components/SearchFeed';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ bgcolor: "#000", color:'white' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetial />} />
          <Route path="/channel/:id" element={<ChannelDetial />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
