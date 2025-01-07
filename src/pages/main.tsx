import About from "../components/about";
import Contact from "../components/contact";
import Header from "../components/header";
import Home from "../components/home";

function MainPage() {
  return (
    <div className="min-h-screen ">
      <Header />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default MainPage;
