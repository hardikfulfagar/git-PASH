// src/components/EventList.js
import React, { useState } from 'react';

const EventList = () => {
  // Sample data, replace with actual data from your backend
  const events = [
    {
      id: 1,
      title: 'College Party 1',
      date: '2023-11-20',
      startTime: '18:00',
      endTime: '22:00',
      location: 'Campus Auditorium',
      description: 'Join us for a night of music, dance, and fun!',
    },
    {
      id: 2,
      title: 'Local Gathering 1',
      date: '2023-11-25',
      startTime: '19:30',
      endTime: '21:30',
      location: 'Local Park',
      description: 'Bring your friends and enjoy a cozy evening in the park.',
    },
    {
      id: 3,
      title: 'Tech Meetup',
      date: '2023-12-01',
      startTime: '16:00',
      endTime: '18:00',
      location: 'Tech Hub',
      description: 'Connect with fellow tech enthusiasts and explore the latest trends.',
    },
    {
      id: 4,
      title: 'Community Cleanup',
      date: '2023-12-05',
      startTime: '09:00',
      endTime: '12:00',
      location: 'City Park',
      description: 'Join us in keeping our community clean and green!',
    },
    {
      id: 5,
      title: 'Movie Night Under the Stars',
      date: '2023-12-10',
      startTime: '20:00',
      endTime: '23:00',
      location: 'Outdoor Amphitheater',
      description: 'Watch your favorite movies under the night sky with friends and family.',
    },
    {
      id: 6,
      title: 'Food Festival',
      date: '2023-12-15',
      startTime: '12:00',
      endTime: '18:00',
      location: 'City Square',
      description: 'Explore a variety of delicious dishes from local vendors.',
    },
    {
      id: 7,
      title: 'Art Exhibition',
      date: '2023-12-20',
      startTime: '14:00',
      endTime: '17:00',
      location: 'Art Gallery',
      description: 'Discover and appreciate the creativity of local artists.',
    },
    {
      id: 8,
      title: 'Fitness Bootcamp',
      date: '2023-12-25',
      startTime: '07:00',
      endTime: '09:00',
      location: 'Fitness Center',
      description: 'Start your Christmas day with an energizing fitness session.',
    },
    {
      id: 9,
      title: 'Book Club Meeting',
      date: '2023-12-30',
      startTime: '18:30',
      endTime: '20:30',
      location: 'Local Library',
      description: 'Discuss and share your thoughts on the latest book selection.',
    },
    {
      id: 10,
      title: 'Networking Mixer',
      date: '2024-01-05',
      startTime: '17:00',
      endTime: '19:00',
      location: 'City Lounge',
      description: 'Connect with professionals from various industries over drinks and conversations.',
    },
    {
        id: 11,
        title: 'Art Exhibition 2',
        date: '2023-12-20',
        startTime: '14:00',
        endTime: '17:00',
        location: 'Art Gallery',
        description: 'Discover and appreciate the creativity of local artists.',
      }
    // Add more events
  ];

  // Location filter state
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Get unique locations from the events
  const allLocations = ['All', ...new Set(events.map(event => event.location))];

  // Filter events based on selected location
  const filteredEvents = selectedLocation === 'All'
    ? events
    : events.filter(event => event.location === selectedLocation);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      {/* Location filter dropdown */}
      <div className="mb-4 text-center">
        <label htmlFor="locationFilter" className="form-label me-2">Filter by Location:</label>
        <select
          id="locationFilter"
          className="form-select"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          {allLocations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>
      <div className="row">
        {filteredEvents.map(event => (
          <div key={event.id} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="card-text">
                  <strong>Time:</strong> {event.startTime} - {event.endTime}
                </p>
                <p className="card-text">
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="card-text">
                  <strong>Description:</strong> {event.description}
                </p>
                {/* Add more event details */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;