import { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren) => {
  return (
    <button className="my-2 rounded-md  bg-blue-500 px-4 py-2 font-bold text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      {children}
    </button>
  );
};

export default Button;
