import ContactForm from "../components/ContactForm";
import ContentSection1 from "../components/ContentSection1";
// import ContentSection2 from "../components/ContentSection2";
// import ContentSection3 from "../components/ContentSection3";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <ContentSection1 />
      {/* <ContentSection2 /> */}
      {/* <ContentSection3 /> */}
      <ContactForm />
    </div>
  );
}
