import conveyor from "@/public/Conveyor-Home-Banner.jpg";
import pakaging from "@/public/packaging-3.jpg";
import material from "@/public/coding-home.jpg";
import tape from "@/public/tape-packing-boxes.png";
import Card from "./Card";

const Thirdsection = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-x-4 lg:flex  lg:justify-center">
      <Card heading="PACKAGING MACHINE" image={pakaging} />
      <Card heading="PACKAGING TOOLS" image={tape} />
      <Card heading="PACKAGING MATERIAL" image={material} />
    </div>
  );
};

export default Thirdsection;
