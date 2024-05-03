import FlexAndResponsive from "./components/FlexAndResponsive.jsx";
import HoverAndFocus from "./components/HoverAndFocus.jsx";
import Navbar from "./components/Navbar.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import SpacingAndSizing from "./components/SpacingAndSizing.jsx";
import Typografy from "./components/Typografy.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hello Tailwind</h1>
      {/* <Typografy /> */}
      {/* <SpacingAndSizing /> */}
      {/* <HoverAndFocus /> */}
      {/* <FlexAndResponsive /> */}
      <ProfileCard />
    </div>
  );
}

export default App;
