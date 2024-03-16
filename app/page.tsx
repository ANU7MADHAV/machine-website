import Home from "@/components/home/Home";
import MobileNavbar from "@/components/navbar/MobileNavbar";

export default function page() {
  return (
    <div>
      <nav>
        <MobileNavbar />
      </nav>
      <main>
        <Home />
      </main>
    </div>
  );
}
