export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short', // "Aug"
        day: 'numeric', // "16"
        year: 'numeric' // "2024"
    });
}