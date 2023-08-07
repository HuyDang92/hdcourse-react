import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const data = [
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
];

interface MediaProps {
  loading?: boolean;
}

function Media(props: MediaProps) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 325, marginRight: 1, my: 3 }}>
          <Skeleton variant="rectangular" width={325} height={118} sx={{ borderRadius: 3 }} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

export default function SkeletonComp() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media loading />
      <Media loading />
    </Box>
  );
}
