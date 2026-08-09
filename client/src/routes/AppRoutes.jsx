import Layout from "@/layouts/Layout";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import About from "@/pages/About";
import Camping from "@/pages/admin/Camping";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Profile from "@/pages/user/Profile";
import { BrowserRouter, Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private User */}
        <Route path="user" element={<Layout/>}>
          <Route path="profile" element={<Profile/>}/>
        </Route>

        
        {/* Private Admin */}
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="manage/:id" element={<Manage />} />
          <Route path="camping" element={<Camping />} />
        </Route>

        {/* Not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
