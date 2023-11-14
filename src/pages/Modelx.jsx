import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelx from "../assets/model-x.jpg";
import modelxx from "../assets/modelxx.jpg";
import teslaInt from "../assets/teslaInside.jpg";
import teslaOut from "../assets/teslaOutside.jpg";
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import ImageGrid from "../components/ImageGrid/ImageGrid";

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
      <section className="section">
        <ImageBackgroundNoText backgroundImage={modelxx} />
      </section>
      <section className="section">
        <ImageGrid
          image1={teslaInt}
          image2={teslaOut}
          text1="Stay Connected with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
          text2="Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
        />
      </section>
    </div>
  );
};

export default Modelx;
