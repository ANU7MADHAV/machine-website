const Footer = () => {
  return (
    <div className="bg-gray-800  px-2 text-gray-300">
      <div className="py-3">
        <h2 className="my-1 text-xl text-white">About Sepack</h2>
        <p className="text-left">
          Commitment to Innovation, transparency, customer satisfaction,
          continual improvement, commitment to society and environment are our
          core values. We always believe in customer retention.
        </p>
        <button className="my-2 rounded-md bg-blue-500 px-2 py-1 font-bold text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Read more
        </button>
      </div>

      <div>
        <h2 className="my-1 text-xl text-white">Useful links</h2>
        <h3>Support</h3>
        <h3>Contact us</h3>
        <h3></h3>
      </div>
      <div>
        <h2 className="my-1 text-xl text-white">Get in Touch</h2>
        <h3>email</h3>
        <h3>phone</h3>
        <h3>location</h3>
      </div>
    </div>
  );
};

export default Footer;
