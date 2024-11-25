import {motion} from "framer-motion";
import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend} from "recharts";

// Sample data for donations by category
const donationCategoryData = [
    {name: "Education", value: 4500},
    {name: "Health", value: 3200},
    {name: "Environment", value: 2800},
    {name: "Community Development", value: 2100},
    {name: "Arts & Culture", value: 1900},
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const DonationCategoryDistributionChart = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3}}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Donations by Cause</h2>
            <div className='h-80'>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <PieChart>
                        <Pie
                            data={donationCategoryData}
                            cx={"50%"}
                            cy={"50%"}
                            labelLine={false}
                            outerRadius={80}
                            fill='#8884d8'
                            dataKey='value'
                            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                            {donationCategoryData.map((entry, index) => (
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
export default DonationCategoryDistributionChart;
