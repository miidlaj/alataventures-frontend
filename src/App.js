import "./App.css";
import Admin from "./routes/Admin";
import User from "./routes/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/*" element={<User />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
