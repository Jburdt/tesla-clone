import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelS from "../assets/modelS.jpg";

const featureItems = [
  { title: "3.1 s", desc: "0-60 mph" },
  { title: "149 mph", desc: "Top Speed" },
  { title: "405 mi", desc: "Range (EPA est.)" },
];

const ModelS = () => {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Model S"
          description="View inventory"
          backgroundImage={modelS}
          featureItems={featureItems}
        />
      </section>
    </div>
  );
};

export default ModelS;
