const SecondSection = () => {
  return (
    <div className="py-8">
      <h1 className="text-center text-3xl font-bold">
        Welcome to Ace Finepack Private Limited
      </h1>
      <div className="mx-2 my-2 h-1 bg-slate-200"></div>
      <p className="px-4 py-3 text-justify tracking-wide">
        <strong className="tracking-normal">
          Ace Finepack Private Limited
        </strong>{" "}
        is firmly entrenched in the packaging and Coding business since 1988.
        Growing from strength to strength, it has created an extensive and
        diverse portfolio of Packaging Machine and Coding Machine solutions
        composed of End of the line packaging machinery, coding, marking
        equipment and packaging materials.
      </p>
      <button className="mx-4 rounded-md bg-blue-500 px-4 py-2 font-bold text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Learn more
      </button>
    </div>
  );
};

export default SecondSection;
