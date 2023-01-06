import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pay from "./Components/Pay";
import Success from "./Components/Success";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
