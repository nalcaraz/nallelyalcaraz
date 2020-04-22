import Head1 from "../components/Head";
import Layout from "../containers/Layout";
import About from "../containers/About";
import Experience from "../containers/Experience";
import Education from "../containers/Education";
import Skills from "../containers/Skills";
import Projects from "../containers/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/site.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head1></Head1>
        <main>
          <About></About>
          <Experience></Experience>
          <Education></Education>
          <Skills></Skills>
          {/* <Projects></Projects> */}
        </main>
        <Footer></Footer>
      </div>
    </Layout>
  );
}
