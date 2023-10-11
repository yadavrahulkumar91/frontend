import React from 'react';

const PublishedTime = ({ publishedAt }) => {
    // Function to calculate time difference and format it
    const getTimeAgo = (publishedAt) => {
        const publishedDate = new Date(publishedAt);
        const currentDate = new Date();
        const timeDifference = Math.floor((currentDate - publishedDate) / 1000); // Convert to seconds

        if (timeDifference < 60) {
            return `${timeDifference} seconds ago`;
        } else if (timeDifference < 3600) {
            const minutes = Math.floor(timeDifference / 60);
            return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        } else if (timeDifference < 86400) {
            const hours = Math.floor(timeDifference / 3600);
            return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        } else {
            const days = Math.floor(timeDifference / 86400);
            return `${days} day${days !== 1 ? 's' : ''} ago`;
        }
    };

    return <p> {getTimeAgo(publishedAt)}</p>;
};

export default PublishedTime;
