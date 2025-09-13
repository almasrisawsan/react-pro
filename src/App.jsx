import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideNav from "./components/SideNav";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideNav />

      <MainContent />
    </div>
  );
};

export default App;
