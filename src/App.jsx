import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import ProtectedRoute from "./components/ProtectedRoute";
import Dash from "./components/Dash";
import HomePage from "./components/HomePage";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Messages from "./Pages/Messages";
import Analytics from "./Pages/Analytics";
import FileManager from "./Pages/FileManager";
import Orders from "./Pages/Order";
import Saved from "./Pages/Saved";
import Settings from "./Pages/Setting";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />

          <Route
            path="/dash"
            element={
              <ProtectedRoute>
                <Dash />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="messages" element={<Messages />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="file-manager" element={<FileManager />} />
            <Route path="order" element={<Orders />} />
            <Route path="saved" element={<Saved />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<>Not Found</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
