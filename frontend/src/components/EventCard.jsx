import { formatDate } from "../utils/date";

export default function EventCard({ event }) {
    return (
        <div style={styles.card}>
            <h3 style={styles.title}>{event.title}</h3>
            <p style={styles.datetime}>{formatDate(event.datetime)}</p>
            <p style={styles.location}>{event.location}</p>
            {event.description && <p style={styles.description}>{event.description}</p>}
            {event.shareId && (
                <p style={styles.linkText}>
                    Public link:{" "}
                    <a
                        href={`http://localhost:5000/events/public/${event.shareId}`}
                        target="_blank"
                        rel="noreferrer"
                        style={styles.link}
                    >
                        Share
                    </a>
                </p>
            )}
        </div>
    );
}

const styles = {
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 6,
        color: "#333",
    },
    datetime: {
        fontSize: 14,
        color: "#555",
        marginBottom: 4,
    },
    location: {
        fontSize: 14,
        color: "#555",
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: "#666",
        marginBottom: 4,
    },
    linkText: {
        fontSize: 14,
        marginTop: 6,
    },
    link: {
        color: "#007bff",
        textDecoration: "none",
        fontWeight: "bold",
        cursor: "pointer",
    },
};
