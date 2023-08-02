import './Video.module.css';
import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayButton,
  MediaPlayer,
  MediaPoster,
} from '@vidstack/react';

interface IChildProps {
  data: any;
}
const VideosComponent: React.FC<IChildProps> = ({ data }) => {
  return (
    data && (
      <MediaPlayer
        title=""
        src={data.source}
        poster={data.thumb}
        // thumbnails="https://media-files.vidstack.io/sprite-fight/thumbnails.vtt"
        aspectRatio={16 / 9}
      >
        <MediaOutlet>
          <MediaPoster alt="introduce" />
        </MediaOutlet>
        <MediaCommunitySkin />
      </MediaPlayer>
    )
  );
};
export default VideosComponent;
