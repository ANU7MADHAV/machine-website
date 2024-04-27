import React from "react";

const FourthSection = () => {
  return (
    <div className="flex h-screen flex-col ">
      <div className=" my-[10px] flex w-full justify-center gap-y-10 lg:my-[130px]">
        <h2 className="text-center text-base font-bold lg:text-xl">
          Why Choose Phoenix Packaging Solutions?
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="grid w-3/4  grid-cols-1 gap-4 lg:grid-cols-2">
          <section>
            <h4 className="my-3 font-semibold">Extensive Selection</h4>
            <p>
              We offer a wide variety of packaging machines to cater to diverse
              product types and packaging needs.
            </p>
          </section>
          <section>
            <h4 className="my-3 font-semibold">Enhanced Efficiency</h4>
            <p>
              Our equipment streamlines your packaging process, saving you time
              and labor costs.
            </p>
          </section>

          <section>
            <h4 className="my-3 font-semibold">Expert Support</h4>
            <p>
              Our knowledgeable team is here to assist you in selecting the
              right equipment and answer any questions you may have
            </p>
          </section>
          <section>
            <h4 className="my-3 font-semibold">Superior Protection</h4>
            <p>
              Our machines ensure your products arrive at their destination safe
              and sound.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
