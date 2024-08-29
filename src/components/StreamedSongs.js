import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Song A', streams: 500000 },
  { name: 'Song B', streams: 450000 },
  { name: 'Song C', streams: 400000 },
  { name: 'Song D', streams: 350000 },
  { name: 'Song E', streams: 300000 },
];

const EnhancedTopStreamedSongsChart = () => {
  return (
        <div className='chart-container top-streamed-songs-chart' >
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={data}
                margin={{
                  top: 20, right: 30, left: 20, bottom: 10,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  stroke="#888888"
                  tick={{ fill: '#888888', fontSize: 12 }}
                />
                <YAxis 
                  stroke="#888888"
                  tick={{ fill: '#888888', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#f8f8f8', border: 'none', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
                  formatter={(value) => new Intl.NumberFormat('en-US').format(value)}
                />
                <Legend />
                <defs>
                  <linearGradient id="colorStreams" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
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