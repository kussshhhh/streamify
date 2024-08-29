import React from "react";

const KeyMetrics = () => {
    // Define the styles for the Card components
    const cardStyle = {
        backgroundColor: '#1c1c1c',
        borderRadius: '10px',
        padding: '20px',
        margin: '15px 0',
        color: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        textAlign: 'center',
        cursor: 'pointer',
    };

  

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        marginBottom: '1rem',
    };

    const titleStyle = {
        fontSize: '18px',
        marginBottom: '10px',
    };

    const valueStyle = {
        fontSize: '15px',
        fontWeight: 'bold',
        color: '#00ffcc',
    };

    return (
        <div style={containerStyle} className="key-metrics">
            <div style={{...cardStyle}} className="metric-card">
                <h2 style={titleStyle}>Total Users</h2>
                <p style={valueStyle}>2,100,000</p>
            </div>
            <div style={{...cardStyle}} className="metric-card">
                <h2 style={titleStyle}>Active Users</h2>
                <p style={valueStyle}>1,800,000</p>
            </div>
            <div style={{...cardStyle}} className="metric-card">
                <h2 style={titleStyle}>Total Streams</h2>
                <p style={valueStyle}>7,439,284,739</p>
            </div>
            <div style={{...cardStyle}} className="metric-card">
                <h2 style={titleStyle}>Revenue</h2>
                <p style={valueStyle}>$9,000,000</p>
            </div>
            <div style={{...cardStyle}} className="metric-card">
                <h2 style={titleStyle}>Top Artist</h2>
                <p style={valueStyle}>Taylor Swift</p>
            </div>
        </div>
    )
}

export default KeyMetrics;

