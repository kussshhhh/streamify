import React from 'react';

const DataTable = () => {
  const streamsData = [
    { songName: 'Cruel Summer', artist: 'Taylor Swift', dateStreamed: '2024-08-28', streamCount: 1250000, userId: 'user123456' },
    { songName: 'Paint The Town Red', artist: 'Doja Cat', dateStreamed: '2024-08-28', streamCount: 980000, userId: 'user789012' },
    { songName: 'Seven', artist: 'Jung Kook & Latto', dateStreamed: '2024-08-28', streamCount: 875000, userId: 'user345678' },
    { songName: 'vampire', artist: 'Olivia Rodrigo', dateStreamed: '2024-08-27', streamCount: 920000, userId: 'user901234' },
    { songName: 'Fast Car', artist: 'Luke Combs', dateStreamed: '2024-08-27', streamCount: 750000, userId: 'user567890' },
  ];

  return (
    <div className="data-table-container">
      <h2>Recent Streams</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Song Name</th>
            <th>Artist</th>
            <th>Date Streamed</th>
            <th>Stream Count</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {streamsData.map((stream, index) => (
            <tr key={index}>
              <td>{stream.songName}</td>
              <td>{stream.artist}</td>
              <td>{stream.dateStreamed}</td>
              <td>{stream.streamCount.toLocaleString()}</td>
              <td>{stream.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;