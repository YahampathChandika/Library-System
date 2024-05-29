import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import Home from "./components/common/Home";
import Search from "./pages/Search";
// import Users from "./pages/Users";
// import Admitted from "./pages/Admitted";
// import Patients from "./pages/Patients";
// import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Overview />} />
        <Route path="overview" element={<Overview />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
