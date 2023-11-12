import "./HomeVideo.css";
import teslaVid from '../../assets/tesla-vid.mp4'

const HomeVideo = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={teslaVid} />
      </video>
      <div className="overlay">
        <div className="top-section">
          <h1>Top Section</h1>
        </div>
        <div className="bottom-section">
          <h1>Bottom Section</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
