// src/components/EventDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();

  // Fetch event details based on the id from your backend

  return (
    <div className="event-details">
      <h2>Event Details</h2>
      <p>Event ID: {id}</p>
      {/* Display more event details */}
    </div>
  );
};

export default EventDetails;
