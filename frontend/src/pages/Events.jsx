import { useEffect, useState } from "react";
import API from "../api/axios";
import EventCard from "../components/EventCard";

export default function Events() {
    const [events, setEvents] = useState([]);
    const [filter, setFilter] = useState("upcoming");

    const fetchEvents = async () => {
        try {
            const { data } = await API.get(`/events?filter=${filter}`);
            setEvents(data.events);
        } catch (err) {
            console.error("Error fetching events", err);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, [filter]);

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>My Events</h2>

            <div style={styles.filterContainer}>
                <button
                    style={{
                        ...styles.filterButton,
                        ...(filter === "upcoming" ? styles.activeFilter : {}),
                    }}
                    onClick={() => setFilter("upcoming")}
                >
                    Upcoming
                </button>
                <button
                    style={{
                        ...styles.filterButton,
                        ...(filter === "past" ? styles.activeFilter : {}),
                    }}
                    onClick={() => setFilter("past")}
                >
                    Past
                </button>
            </div>

            <div style={styles.eventList}>
                {events.length === 0 ? (
                    <p style={styles.noEvents}>No events found.</p>
                ) : (
                    events.map((e) => <EventCard key={e._id} event={e} />)
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        width: "100%",
        maxWidth: 600,
        margin: "0 auto",
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",

    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
        textAlign: "center",
    },
    filterContainer: {
        display: "flex",
        gap: 12,
        marginBottom: 20,
    },
    filterButton: {
        padding: "8px 16px",
        borderRadius: 20,
        border: "1px solid #007bff",
        backgroundColor: "white",
        color: "#007bff",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: 14,
    },
    activeFilter: {
        backgroundColor: "#007bff",
        color: "white",
    },
    eventList: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 12,
    },
    noEvents: {
        textAlign: "center",
        color: "#555",
        fontSize: 14,
        marginTop: 20,
    },
};
