
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ChannelBrowser from "./components/ChannelBrowser.jsx";

function App() {
  const LINKS = ["/all", "/country", "/category"];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/country" replace />} />
        {LINKS.map((link) => (
          <Route
            key={link}
            path={link}
            element={<ChannelBrowser tab={link.slice(1)} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
