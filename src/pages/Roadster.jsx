import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import roadster from "../assets/roadster.jpg";
import roadstr from "../assets/roadstr.jpg";
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";

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
    </div>
  );
};

export default Cybertruck;
