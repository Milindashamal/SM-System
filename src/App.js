import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import SubmitStudent from "./pages/SubmitStudent";
import GetStudent from "./pages/GetStudent";
import UpdateStudent from "./pages/UpdateStudent";
import DeleteStudent from "./pages/DeleteStudent";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page as main entry */}
        <Route path="/" element={<Login />} />

        {/* Dashboard section (with nested routes) */}
        <Route path="/dashboard" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="submit" element={<SubmitStudent />} />
          <Route path="get" element={<GetStudent />} />
          <Route path="update" element={<UpdateStudent />} />
          <Route path="delete" element={<DeleteStudent />} />
        </Route>

        {/* 404 fallback (optional) */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
