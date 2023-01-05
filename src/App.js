import TopSection from "./components/top_section";
import LeftSection from "./components/left_section";
import RightSection from "./components/right_section";

import "./styles/app.css";

function App() {
  return (
    <div className="container">
      <TopSection />
      <div className="app_main_section">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}

export default App;
