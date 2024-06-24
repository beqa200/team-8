import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserInfoValidation from "../src/components/userInfoPage/UserInfoValidation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/userInfoPage"
            element={<UserInfoValidation />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
