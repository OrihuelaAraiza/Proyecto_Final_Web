import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {motion} from "framer-motion";

const supporterActivityData = [
    {name: "Mon", "0-4": 15, "4-8": 25, "8-12": 40, "12-16": 70, "16-20": 90, "20-24": 20},
    {name: "Tue", "0-4": 10, "4-8": 30, "8-12": 50, "12-16": 80, "16-20": 100, "20-24": 30},
    {name: "Wed", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 90, "16-20": 110, "20-24": 40},
    {name: "Thu", "0-4": 25, "4-8": 50, "8-12": 70, "12-16": 100, "16-20": 130, "20-24": 50},
    {name: "Fri", "0-4": 30, "4-8": 60, "8-12": 90, "12-16": 120, "16-20": 150, "20-24": 60},
    {name: "Sat", "0-4": 35, "4-8": 70, "8-12": 100, "12-16": 140, "16-20": 170, "20-24": 70},
    {name: "Sun", "0-4": 40, "4-8": 80, "8-12": 120, "12-16": 160, "16-20": 190, "20-24": 80},
];

const SupporterActivityChart = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4}}
        >
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>Supporter Activity by Time</h2>
            <p className='text-sm text-gray-400 mb-4'>
                Analyze when supporters are most engaged with projects throughout the week.
            </p>
            <div style={{width: "100%", height: 300}}>
                <ResponsiveContainer>
                    <BarChart data={supporterActivityData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#374151'/>
                        <XAxis dataKey='name' stroke='#9CA3AF'/>
                        <YAxis stroke='#9CA3AF'/>
                        <Tooltip
                            formatter={(value, name) => [`${value} engagements`, `Time: ${name}`]}
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{color: "#E5E7EB"}}
                        />
                        <Legend
                            formatter={(value) => <span style={{color: "#E5E7EB"}}>{value} hrs</span>}
                        />
                        <Bar dataKey='0-4' stackId='a' fill='#6366F1' name='Midnight-4AM'/>
                        <Bar dataKey='4-8' stackId='a' fill='#8B5CF6' name='4AM-8AM'/>
                        <Bar dataKey='8-12' stackId='a' fill='#EC4899' name='8AM-12PM'/>
                        <Bar dataKey='12-16' stackId='a' fill='#10B981' name='12PM-4PM'/>
                        <Bar dataKey='16-20' stackId='a' fill='#F59E0B' name='4PM-8PM'/>
                        <Bar dataKey='20-24' stackId='a' fill='#3B82F6' name='8PM-Midnight'/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default SupporterActivityChart;
