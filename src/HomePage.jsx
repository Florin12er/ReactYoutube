import PropTypes from "prop-types";

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
const Home = () => {
  const videos = [
    {
      views: "300k",
      title:
        "How to create The YouTube Home Page With Tailiwind, React and Typescript",
      channelName: "Web dev Simplified",
      time: "7 months ago",
      videoId: "ymGB1lqP1CM",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      views: "206k",
      title: "Learn Typescript Generics in 13 Minutes",
      channelName: "Web dev simpliefied",
      time: "5 months ago",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s160-c-k-c0x00ffffff-no-rj",
      videoId: "EcCTIExsqmI",
    },
    {
      views: "300k",
      title:
        "How to create The YouTube Home Page With Tailiwind, React and Typescript",
      channelName: "Web dev Simplified",
      time: "7 months ago",
      videoId: "ymGB1lqP1CM",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      views: "300k",
      title:
        "How to create The YouTube Home Page With Tailiwind, React and Typescript",
      channelName: "Web dev Simplified",
      time: "7 months ago",
      videoId: "ymGB1lqP1CM",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      views: "300k",
      title:
        "How to create The YouTube Home Page With Tailiwind, React and Typescript",
      channelName: "Web dev Simplified",
      time: "7 months ago",
      videoId: "ymGB1lqP1CM",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      views: "650k",
      title: "They Made Doom Into a Roguelike & it's MASSIVE!",
      channelName: "Mutant Mods",
      time: "6 months ago",
      videoId: "9CU-ZtzqZiI",
      logo: "https://yt3.googleusercontent.com/RZNPScbyg1VqLcwDYuY_VVasp8gFdvlvIiwCN_VBhK7h2xwBbutuqsQkIjuZui231d18GGe6OA=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      views: "300k",
      title:
        "How to create The YouTube Home Page With Tailwind, React and Typescript",
      channelName: "Web dev Simplified",
      time: "7 months ago",
      videoId: "ymGB1lqP1CM",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s160-c-k-c0x00ffffff-no-rj",
    },
  ];
  function ChangeGrid() {
    const grid = document.querySelectorAll("#part");
  }
  return (
    <>
      <div className="grid home-grid-columns">
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

export default Home;
