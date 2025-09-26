import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function CreateEvent() {
    const [title, setTitle] = useState("");
    const [datetime, setDatetime] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [makePublic, setMakePublic] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("/events", {
                title,
                datetime,
                location,
                description,
                makePublic,
            });
            navigate("/");
        } catch (err) {
            console.error("Error creating event", err);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Create Event</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        style={styles.input}
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <input
                        style={styles.input}
                        type="datetime-local"
                        value={datetime}
                        onChange={(e) => setDatetime(e.target.value)}
                        required
                    />

                    <input
                        style={styles.input}
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />

                    <textarea
                        style={{ ...styles.input, height: 80 }}
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <label style={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={makePublic}
                            onChange={(e) => setMakePublic(e.target.checked)}
                        />
                        <span style={{ marginLeft: 8 }}>Make Public</span>
                    </label>

                    <button type="submit" style={styles.button}>
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
        padding: "20px",
    },
    card: {
        backgroundColor: "#fff",
        padding: 24,
        borderRadius: 10,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: 450,
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
    },
    input: {
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: 6,
        fontSize: 14,
        width: "100%",
    },
    button: {
        padding: "12px",
        backgroundColor: "#007bff",
        color: "white",
        fontWeight: "bold",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
    },
    checkboxLabel: {
        display: "flex",
        alignItems: "center",
        fontSize: 14,
        color: "#555",
    },
};
