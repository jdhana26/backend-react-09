import React from 'react';

const UserStatus = ({ user }) => {
    if (!user) {
        return <div className="user-status loading">Loading user...</div>;
    }

    return (
        <div className="user-status active" style={{ padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '8px', margin: '10px 0' }}>
            <h3>User Status</h3>
            <p><strong>Name:</strong> {user.name ?? "Guest User"}</p>
            <p><strong>Email:</strong> {user.email ?? "No email provided"}</p>
            {user.isActive && (
                <p style={{ color: 'green', fontWeight: 'bold' }}>Active User</p>
            )}
        </div>
    );
};

export default UserStatus;
