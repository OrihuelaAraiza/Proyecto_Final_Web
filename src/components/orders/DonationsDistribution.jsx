import {motion} from "framer-motion";
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend} from "recharts";

const donationData = [
    {name: "Education", value: 50},
    {name: "Health", value: 70},
    {name: "Environment", value: 40},
    {name: "Community Development", value: 80},
    {name: "Arts & Culture", value: 30},
];
const COLORS = ["#4ECDC4", "#FF6B6B", "#FED766", "#45B7D1", "#2AB7CA"];

const DonationsDistribution = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3}}
        >
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>Donations Distribution</h2>
            <div style={{width: "100%", height: 300}}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={donationData}
                            cx='50%'
                            cy='50%'
                            outerRadius={80}
                            fill='#8884d8'
                            dataKey='value'
                            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                            {donationData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Tooltip
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
                            wrapperStyle={{color: "#E5E7EB"}}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};
export default DonationsDistribution;
