import {motion} from "framer-motion";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell} from "recharts";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const DONATION_CHANNEL_DATA = [
    {name: "Website", value: 15600},
    {name: "Mobile App", value: 9200},
    {name: "Social Media", value: 17800},
    {name: "Community Events", value: 20700},
];

const DonationChannelChart = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4}}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Donations by Channel</h2>

            <div className='h-80'>
                <ResponsiveContainer>
                    <BarChart data={DONATION_CHANNEL_DATA}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#4B5563'/>
                        <XAxis dataKey='name' stroke='#9CA3AF'/>
                        <YAxis stroke='#9CA3AF'/>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{color: "#E5E7EB"}}
                        />
                        <Legend
                            verticalAlign="top"
                            iconType="circle"
                            iconSize={10}
                            wrapperStyle={{color: "#E5E7EB"}}
                        />
                        <Bar dataKey={"value"} fill='#8884d8'>
                            {DONATION_CHANNEL_DATA.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default DonationChannelChart;
