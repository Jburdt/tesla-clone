import HomeVideo from "../components/homeVideo/HomeVideo";
import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelS from "../assets/modelS.jpg";

const HomePage = () => {
  return (
    <>
      <HomeVideo />
      <ImageBackgroundSection
        header="Model S"
        description="View inventory"
        backgroundImage={modelS}
      />
    </>
  );
};

export default HomePage;
