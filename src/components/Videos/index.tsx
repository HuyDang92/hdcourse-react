import LoadingLocal from 'components/LoadingLocal';
import './Video.module.css';
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
        <track
          src="https://media-files.vidstack.io/sprite-fight/chapters.vtt"
          srcLang="en-US"
          kind="chapters"
          default
        />
      </MediaOutlet>
      <MediaCommunitySkin />
    </MediaPlayer>
  ) : (
    <div className="h-[75vh]  w-full bg-black">
      <LoadingLocal />
    </div>
  );
};
export default VideosComponent;
