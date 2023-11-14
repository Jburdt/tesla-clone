import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelx from "../assets/model-x.jpg";

const Modelx = () => {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Model X"
          description="View inventory"
          backgroundImage={modelx}
        />
      </section>
    </div>
  );
};

export default Modelx;
