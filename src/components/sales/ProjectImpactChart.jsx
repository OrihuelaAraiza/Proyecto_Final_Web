import {motion} from "framer-motion";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import {useState} from "react";

const projectImpactData = [
    {month: "Jan", impact: 85},
    {month: "Feb", impact: 80},
    {month: "Mar", impact: 90},
    {month: "Apr", impact: 88},
    {month: "May", impact: 92},
    {month: "Jun", impact: 87},
    {month: "Jul", impact: 95},
];

const ProjectImpactChart = ({projectId}) => {
    const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

    // Example logic: Filter or fetch data based on selectedTimeRange and projectId
    // Replace `projectImpactData` with filtered/fetched data as needed
    const displayedData = projectImpactData;

    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
        >
            <div className='flex items-center justify-between mb-6'>
                <h2 className='text-xl font-semibold text-gray-100'>Project Impact Overview</h2>

                <select
                    className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={selectedTimeRange}
                    onChange={(e) => setSelectedTimeRange(e.target.value)}
                >
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>This Quarter</option>
                    <option>This Year</option>
                </select>
            </div>

            <div className='w-full h-80'>
                <ResponsiveContainer>
                    <AreaChart data={displayedData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#374151'/>
                        <XAxis dataKey='month' stroke='#9CA3AF'/>
                        <YAxis
                            stroke='#9CA3AF'
                            tickFormatter={(value) => `${value}%`}
                            domain={[60, 100]}
                        />
                        <Tooltip
                            contentStyle={{backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563"}}
                            itemStyle={{color: "#E5E7EB"}}
                            formatter={(value) => `${value}%`}
                        />
                        <Area
                            type='monotone'
                            dataKey='impact'
                            stroke='#8B5CF6'
                            fill='#8B5CF6'
                            fillOpacity={0.3}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default ProjectImpactChart;
