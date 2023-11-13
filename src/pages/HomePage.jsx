import HomeVideo from "../components/homeVideo/HomeVideo";
import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelS from "../assets/modelS.jpg";
import roadster from "../assets/roadster.jpg";
import modelx from "../assets/model-x.jpg";

const HomePage = () => {
  return (
    <div className="container">
      <section className="section">
        <HomeVideo />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Model S"
          description="View inventory"
          backgroundImage={modelS}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Model X"
          description="View inventory"
          backgroundImage={modelx}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Roadster"
          description="View inventory"
          backgroundImage={roadster}
        />
      </section>
    </div>
  );
};

export default HomePage;
