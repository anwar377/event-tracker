export const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleString();
};
