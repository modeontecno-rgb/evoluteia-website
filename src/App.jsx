import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import HowWeWork from "./sections/HowWeWork";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-papel">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
