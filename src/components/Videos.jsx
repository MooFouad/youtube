
import { Box, Stack } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import Loader from './Loader';
// eslint-disable-next-line react/prop-types
const Videos = ({videos, direction}) => {
  if (!videos?.length) return <Loader />
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((video, idx) =>(
        <Box key={idx}>
          {video.id.videoId && <VideoCard video={video}/>}
          {video.id.channelId && <ChannelCard channelDetail={video}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos