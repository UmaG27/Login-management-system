import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.logo} onClick={() => navigate("/")}>
        MyApp
      </div>

      <div style={styles.links}>
        {!token ? (
          <>
            <span style={styles.link} onClick={() => navigate("/login")}>
              Login
            </span>
            <span style={styles.link} onClick={() => navigate("/signup")}>
              Signup
            </span>
          </>
        ) : (
          <>
            <span style={styles.link} onClick={() => navigate("/dashboard")}>
              Dashboard
            </span>
            <span style={styles.logout} onClick={logout}>
              Logout
            </span>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    padding: "15px 25px",
    background: "#3498db",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box"
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  links: {
    display: "flex",
    gap: "20px"
  },
  link: {
    cursor: "pointer",
    fontSize: "16px"
  },
  logout: {
    cursor: "pointer",
    color: "#ffdfdf",
    fontWeight: "bold"
  }
};
