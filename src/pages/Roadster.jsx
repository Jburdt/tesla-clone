import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import roadster from "../assets/roadster.jpg";
import roadstr from "../assets/roadstr.jpg";
import teslaInt from "../assets/teslaInside.jpg";
import teslaOut from "../assets/teslaOutside.jpg";
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import ImageGrid from "../components/ImageGrid/ImageGrid";

const featureItems = [
  { title: "1.9 s", desc: "0-60 mph" },
  { title: "+250 mph", desc: "Top Speed" },
  { title: "620 mi", desc: "Range" },
];

const Cybertruck = () => {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Roadster"
          description="View inventory"
          backgroundImage={roadster}
          featureItems={featureItems}
        />
      </section>
      <section className="section">
        <ImageBackgroundNoText backgroundImage={roadstr} />
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

export default Cybertruck;
