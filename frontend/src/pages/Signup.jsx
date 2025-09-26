import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // ✅ loading state
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const data = await API.post("/auth/signup", { email, password });
            login(data.user, data.token);
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.error || "Signup failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Signup</h2>
                {error && <p style={styles.error}>{error}</p>}
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        style={styles.input}
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                    />

                    <input
                        style={styles.input}
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading}
                    />

                    <button
                        type="submit"
                        style={{
                            ...styles.button,
                            backgroundColor: loading ? "#6c757d" : styles.button.backgroundColor,
                            cursor: loading ? "not-allowed" : "pointer",
                        }}
                        disabled={loading}
                    >
                        {loading ? "Signing up..." : "Signup"}
                    </button>
                </form>
                <p style={styles.footer}>
                    Already have an account?{" "}
                    <span style={styles.link} onClick={() => !loading && navigate("/login")}>
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f0f4f8",
        fontFamily: "Arial, sans-serif",
    },
    card: {
        backgroundColor: "#fff",
        padding: 30,
        borderRadius: 10,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    error: {
        color: "red",
        textAlign: "center",
        marginBottom: 10,
        fontSize: 14,
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderStyle: "solid",
        borderRadius: 6,
        fontSize: 14,
    },
    button: {
        padding: 12,
        backgroundColor: "#007bff",
        color: "white",
        fontWeight: "bold",
        border: "none",
        borderRadius: 6,
        textAlign: "center",
        fontSize: 16,
    },
    footer: {
        textAlign: "center",
        marginTop: 15,
        fontSize: 14,
        color: "#555",
    },
    link: {
        color: "#007bff",
        cursor: "pointer",
        fontWeight: "bold",
    },
};
