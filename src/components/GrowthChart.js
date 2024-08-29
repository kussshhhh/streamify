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
        <div className="chart-container user-growth-chart">
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" name="Total Users" />
                  <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" name="Active Users" />
                </LineChart>
    
            </ResponsiveContainer>

        </div>
    )
}

export default GrowthChart ;