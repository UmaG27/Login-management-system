import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? <p>Welcome, {user.name}</p> : <p>Loading...</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
