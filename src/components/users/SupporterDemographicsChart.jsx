import {motion} from "framer-motion";
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend} from "recharts";

const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EF4444", "#3B82F6"];

const supporterDemographicsData = [
    {name: "18-24", value: 35},
    {name: "25-34", value: 40},
    {name: "35-44", value: 15},
    {name: "45-54", value: 7},
    {name: "55+", value: 3},
];

const SupporterDemographicsChart = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.5}}
        >
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>Supporter Demographics by Age Group</h2>
            <p className='text-sm text-gray-400 mb-4'>
                Understand the age distribution of your supporters to tailor campaigns effectively.
            </p>
            <div style={{width: "100%", height: 300}}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={supporterDemographicsData}
                            cx='50%'
                            cy='50%'
                            outerRadius={100}
                            fill='#6366F1'
                            dataKey='value'
                            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                            {supporterDemographicsData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value, name) => [`${value}%`, `${name}`]}
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{color: "#E5E7EB"}}
                        />
                        <Legend
                            verticalAlign="bottom"
                            iconType="circle"
                            iconSize={10}
                            formatter={(value) => <span style={{color: "#E5E7EB"}}>{value}</span>}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default SupporterDemographicsChart;
