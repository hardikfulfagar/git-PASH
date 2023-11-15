// src/components/UserProfile.js
import React from 'react';

const UserProfile = () => {
  // Sample user data, replace with actual data from your backend
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    dateOfBirth: '1990-01-01',
    phoneNumber: '123-456-7890',
    department: 'Computer Science',
    // Add more fields as needed
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">User Profile</h2>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="fw-bold">Name:</label>
            </div>
            <div className="col-md-8">
              <p className="form-control-static">{userData.name}</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="fw-bold">Email:</label>
            </div>
            <div className="col-md-8">
              <p className="form-control-static">{userData.email}</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="fw-bold">Date of Birth:</label>
            </div>
            <div className="col-md-8">
              <p className="form-control-static">{userData.dateOfBirth}</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="fw-bold">Phone Number:</label>
            </div>
            <div className="col-md-8">
              <p className="form-control-static">{userData.phoneNumber}</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="fw-bold">Department:</label>
            </div>
            <div className="col-md-8">
              <p className="form-control-static">{userData.department}</p>
            </div>
          </div>
          {/* Add more user profile fields as needed */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
