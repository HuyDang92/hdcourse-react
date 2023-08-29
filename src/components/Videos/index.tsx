import LoadingLocal from 'components/LoadingLocal';
import 'vidstack/styles/defaults.css';
import 'vidstack/styles/community-skin/video.css';
import { MediaCommunitySkin, MediaOutlet, MediaPlayer, MediaPoster } from '@vidstack/react';

interface IChildProps {
  data: any;
  setVideoEnded?: any;
}

const VideosComponent: React.FC<IChildProps> = ({ data, setVideoEnded }) => {
  const handleVideoEnded = () => {
    setVideoEnded(data?.idLecture);
  };
  return data.source ? (
    <div className="relative">
      <MediaPlayer
        title="Sprite Fight"
        src={data.source}
        poster={data.thumb}
        thumbnails="https://media-files.vidstack.io/sprite-fight/thumbnails.vtt"
        aspectRatio={16 / 7}
        onEnded={handleVideoEnded}
      >
        <MediaOutlet>
          <MediaPoster alt="" />
        </MediaOutlet>
        <MediaCommunitySkin />
      </MediaPlayer>
    </div>
  ) : (
    <div className="h-[40vh] xl:h-[75vh]  w-full bg-black">
      <LoadingLocal />
    </div>
  );
};
export default VideosComponent;
