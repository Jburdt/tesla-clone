import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelS from "../assets/modelS.jpg";
import interior from "../assets/teslaInside.jpg";
import teslaOutside from "../assets/teslaOutside.jpg";
import modelSMatte from "../assets/modelSMatte.jpg";
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import ImageGrid from "../components/ImageGrid/ImageGrid";

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
      <section className="section">
        <ImageBackgroundNoText backgroundImage={modelSMatte} />
      </section>
      <section className="section">
        <ImageGrid
          image1={teslaOutside}
          image2={interior}
          text1="Stay Connected with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
          text2="Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
        />
      </section>
    </div>
  );
};

export default ModelS;
