import Link from "next/link";
import Button from "../Button";

const AboutTwo = () => {
  return (
    <div className="my-5 px-4">
      <h3 className="lg:text-xl">Phoenix Packaging Solutions</h3>
      <h2 className="py-2 text-3xl font-semibold lg:text-5xl">Who We Are</h2>
      <p className="text-justify font-light lg:text-lg">
        Phoenix Packaging Solutions emerges as the epitome of innovation in the
        realm of packaging machinery. With a steadfast commitment to excellence,
        we are dedicated to delivering cutting-edge products, unparalleled
        channel partner support, and exceptional after-sales service both in
        India and abroad. What sets us apart is our team—a collective of
        packaging machine experts boasting over two decades of industry
        experience. United under the banner of Phoenix Packaging Solutions, we
        are wholly devoted to exceeding expectations and providing a
        transformative experience for all stakeholders.
      </p>
      <Link href="/contact-us">
        <Button>Contact us</Button>
      </Link>
    </div>
  );
};

export default AboutTwo;
