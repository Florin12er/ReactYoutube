import PropTypes from "prop-types";
import Videos from "./Parts/videos";

const VideoComponent = ({ title, channelName, logo, views, time, videoId }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return (
    <div className="grid mt-5 ml-5">
      <iframe
        className="rounded-2xl"
        title={title}
        src={thumbnailUrl}
        width="480"
        height="360"
        allowFullScreen
      ></iframe>
      <div>
        <div className="flex">
          <img
            className="w-14 h-14 rounded-2xl mr-4"
            src={logo}
            alt="Channel Logo"
          />
          <div>
            <h2 className="text-2xl w-96">{title}</h2>

            <p>{channelName}</p>
            <p>
              {views} Views - {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

VideoComponent.propTypes = {
  title: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  logo: PropTypes.string,
};
const Home = ({grid}) => {
  const videos = Videos 

    return (
    <>
      <div className={grid}>
        {videos.map((video, index) => (
          <VideoComponent
            key={index}
            views={video.views}
            title={video.title}
            channelName={video.channelName}
            time={video.time}
            videoId={video.videoId}
            logo={video.logo}
          />
        ))}
      </div>
    </>
  );
};
Home.propTypes = {
    grid: PropTypes.string.isRequired
}
export default Home;
