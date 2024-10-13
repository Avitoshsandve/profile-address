// src/components/AdminDashboard.js
import React, { useState } from 'react';
import profileService from './services/profileService';

const AdminDashboard = () => {
    const [profiles, setProfiles] = useState([]);
    const [newProfile, setNewProfile] = useState({ name: '', description: '', photo: '' });

    const handleAddProfile = () => {
        profileService.addProfile(newProfile).then((updatedProfiles) => {
            setProfiles(updatedProfiles);
        });
    };

    const handleDeleteProfile = (id) => {
        profileService.deleteProfile(id).then((updatedProfiles) => {
            setProfiles(updatedProfiles);
        });
    };

    return (
        <div className="admin-dashboard">
            <h2>Manage Profiles</h2>
            <input
                type="text"
                placeholder="Name"
                value={newProfile.name}
                onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Description"
                value={newProfile.description}
                onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
            />
            <input
                type="text"
                placeholder="Photo URL"
                value={newProfile.photo}
                onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })}
            />
            <button onClick={handleAddProfile}>Add Profile</button>

            <div className="profiles-list">
                {profiles.map((profile) => (
                    <div key={profile.id}>
                        <h3>{profile.name}</h3>
                        <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
