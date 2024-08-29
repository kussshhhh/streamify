import React from "react";
import { LineChart, Line, XAxis, CartesianAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, YAxis } from "recharts";

const data = [
  { month: 'Jan', totalUsers: 1000000, activeUsers: 750000 },
  { month: 'Feb', totalUsers: 1100000, activeUsers: 800000 },
  { month: 'Mar', totalUsers: 1200000, activeUsers: 900000 },
  { month: 'Apr', totalUsers: 1300000, activeUsers: 1000000 },
  { month: 'May', totalUsers: 1400000, activeUsers: 1100000 },
  { month: 'Jun', totalUsers: 1500000, activeUsers: 1200000 },
  { month: 'Jul', totalUsers: 1600000, activeUsers: 1300000 },
  { month: 'Aug', totalUsers: 1700000, activeUsers: 1400000 },
  { month: 'Sep', totalUsers: 1800000, activeUsers: 1500000 },
  { month: 'Oct', totalUsers: 1900000, activeUsers: 1600000 },
  { month: 'Nov', totalUsers: 2000000, activeUsers: 1700000 },
  { month: 'Dec', totalUsers: 2100000, activeUsers: 1800000 }
];


const GrowthChart = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            < LineChart
                data={data}
                margin={{
                    top:20, right: 30, left:20, bottom: 10,
                }}
            >
                < CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
                <XAxis
                    dataKey="month"
                    stroke="#888888"
                    tick={{fill: '#888888', fontSize: 12}}
                />
                <YAxis
                    stroke="#888888"
                    tick={{fill: '#888888', fontSize: 12}}
                />
                <Tooltip
                    contentStyle={{backgroundColor: '#f8f8f8', border: 'none', borderRadius:'5px', boxShadow: '0 2px 5px rgba(0,0,0,0,1)'}}
                />
                <Legend
                    wrapperStyle={{paddingTop: '20px'}}
                />
                <defs>
                    <linearGradient id="totalUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Line   
                    type="monotone"
                    dataKey="totalUsers"
                    stroke="#8884d8"
                    strokeWidth={3}
                    dot={{r: 4, fill: '#8884d8'}}
                    activeDot={{r: 6, fill:'#8884d8'}}
                    name="Total Users"
                    fill="url(#totalUsers)"
                />
            </LineChart>

        </ResponsiveContainer>
    )
}

export default GrowthChart ;