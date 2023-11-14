import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelx from "../assets/model-x.jpg";

const featureItems = [
  { title: "3.8 s", desc: "0-60 mph" },
  { title: "149 mph", desc: "Top Speed" },
  { title: "348 mi", desc: "Range (EPA est." },
];

const Modelx = () => {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Model X"
          description="View inventory"
          backgroundImage={modelx}
          featureItems={featureItems}
        />
      </section>
    </div>
  );
};

export default Modelx;
