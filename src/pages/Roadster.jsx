import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import roadster from "../assets/roadster.jpg";

const featureItems = [
  { title: "2.3s 0-60", desc: "Very Fast" },
  { title: "2.3s 0-60", desc: "Very Fast" },
  { title: "2.3s 0-60", desc: "Very Fast" },
  { title: "2.3s 0-60", desc: "Very Fast" },
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
    </div>
  );
};

export default Cybertruck;
