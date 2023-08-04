import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import IonIcon from '@reacticons/ionicons';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[65%] text-[11px]">{`${Math.round(
        props.value
      )}%`}</div>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#ff6600' : '#308fe8'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

export default function CircularWithValueLabel({ data }: any) {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    if (data) {
      const process = Math.floor((data.learned * 100) / data.totalLecture);
      setProgress(process);
    }
  }, [data.learned]);

  return progress === 100 ? (
    <IonIcon name="ribbon" className="rounded-full border-2 border-org p-2 text-xl text-org" />
  ) : (
    <CircularProgressWithLabel value={progress} />
  );
}
