import conveyor from "@/public/Conveyor-Home-Banner.jpg";
import pakaging from "@/public/packaging-3.jpg";
import material from "@/public/coding-home.jpg";
import tape from "@/public/tape-packing-boxes.png";
import Card from "./Card";

const Thirdsection = () => {
  return (
    <div>
      <Card heading="PACKAGING MACHINE" image={pakaging} />
      <Card heading="PACKAGING TOOLS" image={tape} />
      <Card heading="PACKAGING MATERIAL" image={material} />
      <Card heading="CONVEY STACKERS" image={conveyor} />
    </div>
  );
};

export default Thirdsection;