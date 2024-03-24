"use client";
import { sendEmail } from "@/action";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const Form = () => {
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  });
  useEffect(() => {
    if (sendEmailState.success) {
      alert("Email sent!");
    }
    if (sendEmailState.error) {
      alert("Error sending email!");
    }
  }, [sendEmailState]);

  return (
    <section className="mx-4 flex flex-col items-center px-6 sm:w-auto">
      <h1 className="mb-3 font-serif text-4xl text-[#DF6951]">Contact us</h1>
      <form className="flex flex-col  p-4 text-black" action={sendEmailAction}>
        <label htmlFor="name" className="mb-2 text-lg font-semibold">
          Name
        </label>
        <input
          className="block w-[300px] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          type="text"
          id="name"
          name="name"
        />
        <label htmlFor="email" className="mb-2 mt-4 text-lg font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="block w-[300px] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
        <label htmlFor="phone" className="mb-2 mt-4 text-lg font-semibold">
          Phone number
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="block w-[300px] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
        <label htmlFor="message" className="mb-2 mt-4 text-lg font-semibold">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="block w-[300px] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          cols={30}
          rows={10}
        ></textarea>
        <button
          type="submit"
          className="mt-4 rounded-md  bg-[#DF6951] px-4 py-2 font-semibold text-white hover:bg-[#f6674a]"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Form;
