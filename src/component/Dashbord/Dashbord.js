import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis } from 'recharts';
import './Dashborad.css'


const Dashbord = () => {
    
       const [data, setData] = useState([]);
       useEffect(() => {
           fetch('data.json')
           .then(res => res.json())
           .then(data => setData(data))

       }, [])
  
    return (
        <div className='chart-component'>
            <div>
                <h3>month wish sell</h3>
                <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8"></Line>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" ></CartesianGrid>
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip></Tooltip>
                </LineChart>

                <div className='chart'>
                <h4>Investment vs Revenue</h4>
                <AreaChart  width={500} height={400} data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}>
                      <CartesianGrid  strokeDasharray="3 3"></CartesianGrid> 
                      <XAxis dataKey="month" ></XAxis> 
                      <Tooltip></Tooltip>
                      <Area  type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" ></Area>
                      <Area  type="monotone" dataKey="revenue" stroke="#3ec65d" fill="#3ec65d" ></Area>
                </AreaChart >

                </div>
                <div className='charts'>
                    <h3>Investment vs Revenue</h3>
                    <BarChart width={500} height={300} data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                        <CartesianGrid strokeDasharray="3 3" ></CartesianGrid>
                        <XAxis></XAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Bar  dataKey="investment" fill="#8884d8" ></Bar>
                        <Bar dataKey="revenue" fill="#82ca9d" ></Bar>
                    </BarChart>

                </div>
                <div className='charts'>
                <h4>Investment vs Revenue</h4>
                <PieChart width={400} height={400}>
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
            </div>
            </div>
            
            
        </div>
    );
};

export default Dashbord;