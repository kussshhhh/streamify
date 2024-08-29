import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Song A', streams: 500000 },
  { name: 'Song B', streams: 450000 },
  { name: 'Song C', streams: 400000 },
  { name: 'Song D', streams: 350000 },
  { name: 'Song E', streams: 300000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ 
        backgroundColor: 'rgba(35, 35, 35, 0.8)',
        border: '1px solid #444',
        padding: '10px',
        borderRadius: '5px'
      }}>
        <p style={{ color: '#fff' }}>{`${label} : ${new Intl.NumberFormat('en-US').format(payload[0].value)} streams`}</p>
      </div>
    );
  }
  return null;
};

const EnhancedTopStreamedSongsChart = () => {
  return (
    <div className='chart-container top-streamed-songs-chart'>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis
            dataKey="name"
            stroke="#888888"
            tick={{ fill: '#888888', fontSize: 12 }}
          />
          <YAxis
            stroke="#888888"
            tick={{ fill: '#888888', fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <defs>
            <linearGradient id="colorStreams" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              {/* <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/> */}
            </linearGradient>
          </defs>
          <Bar
            dataKey="streams"
            fill="url(#colorStreams)"
            barSize={60}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnhancedTopStreamedSongsChart;