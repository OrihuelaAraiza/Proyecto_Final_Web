import {motion} from "framer-motion";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";

const dailyProjectActivityData = [
    {date: "07/01", updates: 12},
    {date: "07/02", updates: 15},
    {date: "07/03", updates: 10},
    {date: "07/04", updates: 18},
    {date: "07/05", updates: 16},
    {date: "07/06", updates: 20},
    {date: "07/07", updates: 25},
];

const DailyProjectActivity = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
        >
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>Daily Project Activity</h2>

            <div style={{width: "100%", height: 300}}>
                <ResponsiveContainer>
                    <LineChart data={dailyProjectActivityData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#374151'/>
                        <XAxis dataKey='date' stroke='#9CA3AF'/>
                        <YAxis stroke='#9CA3AF'/>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{color: "#E5E7EB"}}
                        />
                        <Legend/>
                        <Line type='monotone' dataKey='updates' stroke='#10B981' strokeWidth={2}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default DailyProjectActivity;
