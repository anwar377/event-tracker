import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav style={styles.navbar}>
            <Link to="/" style={styles.brand}>
                Mini Event Tracker
            </Link>
            <div style={styles.menu}>
                {user ? (
                    <>
                        <Link to="/create" style={styles.link}>
                            + Event
                        </Link>
                        <button onClick={logout} style={styles.button}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" style={styles.link}>
                            Login
                        </Link>
                        <Link to="/signup" style={styles.link}>
                            Signup
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#007bff",
        padding: "12px 20px",
        color: "white",
    },
    brand: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textDecoration: "none",
    },
    menu: {
        display: "flex",
        alignItems: "center",
        gap: 15,
    },
    link: {
        color: "white",
        textDecoration: "none",
        fontSize: 14,
        fontWeight: "bold",
        cursor: "pointer",
    },
    button: {
        backgroundColor: "transparent",
        border: "1px solid white",
        borderRadius: 6,
        padding: "6px 12px",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
        fontSize: 14,
    },
};
