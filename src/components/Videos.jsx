import { Box, Skeleton } from "@mui/material"
import { VideoCard, ChannelCard } from './'

const Videos = ({videos, loading, direction}) => {

  return (
    <Box display="grid" gridTemplateColumns={`${direction === 'column' ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))'}`} gap={2}>
      {videos.map((item, idx) => {

        if(item.id?.playlistId) return;

        return (
          <Box key={idx}>
            {loading ? (
              <>
                <Skeleton variant="rectangular" width="100%" height={200} sx={{background: 'gray'}} />
                <Box sx={{pt:0.5}}>
                  <Skeleton sx={{background: 'gray'}} width="100%" />
                  <Skeleton sx={{background: 'gray'}} width="60%" />
                </Box>
              </>
            ) : (
              <>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
              </>
            )}
          </Box>
        )

      })}
    </Box>
  )
}

export default Videos