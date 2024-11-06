export const formatDateMonthDateYear = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short', // "Aug"
        day: 'numeric', // "16"
        year: 'numeric' // "2024"
    });
}

export const formatHourMinCountdown = (targetDate) => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;

    if (difference <= 0) {
        // If the target date is reached or passed, show "0h : 0m"
        return '0h : 0m';
    }

    // Calculate hours and minutes
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    // Format the countdown as "10h : 15m"
    return `${hours}h : ${minutes}m`;
}


// Utility function
export const truncateText = (text, maxLength = 100) => {
    // Remove HTML tags for the plain text preview
    const plainText = text.replace(/<[^>]+>/g, '');

    // Truncate if necessary and add ellipsis
    return plainText.length > maxLength ? plainText.slice(0, maxLength) + '...' : plainText;
};
