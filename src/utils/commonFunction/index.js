export const formatTimestampToDateString = (timestamp) => {
    const date = new Date(timestamp);

    // Get day, month, and year
    const day = date.getDate();
    const monthIndex = date.getMonth(); // Month index starts from 0 (0 for January, 1 for February, etc.)
    const year = date.getFullYear();

    // Convert month index to month name
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[monthIndex];

    // Construct and return the formatted date string
    return `${day} ${month} ${year}`;
}