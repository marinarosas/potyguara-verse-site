import { Aboutus } from "@/components/AboutUs";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Homepage } from "@/components/HomePage";
import OurPartnership from "@/components/OurPartnership";

export default function Home() {
  return (
    <main className="text-foreground">
      <Header />
      <Homepage/>
      <Aboutus />
      <OurPartnership/>
      <Contact/>
    </main>
  );
}
