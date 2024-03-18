import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../assets/fetchFromApi";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetial = () => {
  // when I click on channel the url includes " channel, ID"
  // I'll take this url by usePrams
  const { id } = useParams();

  const [channelDetial, setChannelDetial] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

      setChannelDetial(data?.items[0]);

      const videosData = await fetchFromApi(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  return (
    <Box minHeight='95vh'>
      <Box>
      <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetial} marginTop="-110px"/>
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' }}}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetial;
