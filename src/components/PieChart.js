import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    {name: 'Subcriptions', value: 8000000},
    {name: 'Ads', value: 300000},
    {name: 'Other', value: 1345678},
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

const RADIAN = Math.PI/180;

const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5  ;
    const x = cx + radius * Math.cos(-midAngle*RADIAN) ;
    const y = cy + radius * Math.sin(-midAngle*RADIAN) ;
    
    return (
        <text x={x} y={y} fill="white" textAnchor={x>cx?'start': 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}

const RevenueChart = () => {
   return (
        <ResponsiveContainer width="100%" height={400} >
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    )) }
                </Pie>
                <Tooltip
                    contentStyle={{backgroundColor: '#f8f8f8', border: 'none', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'           }}
                    formatter={(value) => new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(value)}
                />

                <Legend
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                    wrapperStyle={{paddingLeft:'20px'}}
                />
         
            </PieChart>
        </ResponsiveContainer>

   ) 
}


export default RevenueChart ;