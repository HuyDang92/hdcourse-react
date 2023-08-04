import LoadingLocal from 'components/LoadingLocal';
import './Video.module.css';
import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayButton,
  MediaPlayer,
  MediaPoster,
  MediaTime,
} from '@vidstack/react';

interface IChildProps {
  data: any;
  setVideoEnded?: any;
}

const VideosComponent: React.FC<IChildProps> = ({ data, setVideoEnded }) => {
  const handleVideoEnded = () => {
    setVideoEnded(true);
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
          src="https://media-files.vidstack.io/sprite-fight/subs/english.vtt"
          label="English"
          srcLang="en-US"
          kind="subtitles"
          default
        />
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
