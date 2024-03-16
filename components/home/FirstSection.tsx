const FirstSection = () => {
  return (
    <div className="flex h-screen items-center bg-opacity-50 bg-[url('/home.jpg')] bg-cover bg-fixed bg-center bg-no-repeat text-center">
      <div className="h-full w-full rounded-lg bg-black bg-opacity-50 p-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Complete Packaging and Coding Solution Provider.
        </h1>
        <h3 className="mb-6 text-xl font-bold text-white">
          Carton Sealing Machine | Packing Machine| Bar Coding Machine|
          Strapping Machine
        </h3>
        <div className="space-x-4">
          <button className="rounded-md bg-blue-500 px-4 py-2 font-bold text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            About us
          </button>
          <button className="rounded-md bg-blue-500 px-4 py-2 font-bold text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
