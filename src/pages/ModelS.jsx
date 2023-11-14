import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelS from "../assets/modelS.jpg";

const ModelS = () => {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Model S"
          description="View inventory"
          backgroundImage={modelS}
        />
      </section>
    </div>
  );
};

export default ModelS;
