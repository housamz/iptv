
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ChannelBrowser from "./components/ChannelBrowser.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/country" replace />} />
        <Route path="/all" element={<ChannelBrowser tab="all" />} />
        <Route path="/country" element={<ChannelBrowser tab="country" />} />
        <Route path="/category" element={<ChannelBrowser tab="category" />} />
      </Routes>
    </Router>
  );
}

export default App;
