import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
// import Project from "./components/Projects/project";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      {/* <Project /> */}
    </div>
  );
}

export default App;
