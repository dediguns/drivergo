// Utility functions

/**
 * Get the current date and time in UTC in 'YYYY-MM-DD HH:MM:SS' format.
 * @returns {string} The formatted date and time.
 */
const getCurrentDateTimeUTC = () => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC', hour12: false };
    const dateTime = new Intl.DateTimeFormat('sv-SE', options).format(new Date());
    return dateTime.replace(' ', 'T').replace('T', ' ').replace(/[^0-9-: ]/g, ' ').trim();
};

// Export the utility functions
module.exports = { getCurrentDateTimeUTC };