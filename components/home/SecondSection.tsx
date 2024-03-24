import Button from "../Button";

const SecondSection = () => {
  return (
    <div className="py-8">
      <h2 className="text-center text-2xl font-bold">
        Welcome to Phoenix Packaging Solutions
      </h2>
      <div className="mx-2 my-2 h-1 bg-slate-200"></div>
      <p className="px-4 py-3 text-justify tracking-wide">
        <strong className="tracking-normal">Phoenix Packaging Solutions</strong>{" "}
        is firmly entrenched in the packaging and coding business since 1988.
        Growing from strength to strength, it has created an extensive and
        diverse portfolio of packaging machine and coding machine solutions
        composed of end-of-the-line packaging machinery, coding, marking
        equipment, and packaging materials
      </p>
      <Button>Learn more</Button>
    </div>
  );
};

export default SecondSection;
