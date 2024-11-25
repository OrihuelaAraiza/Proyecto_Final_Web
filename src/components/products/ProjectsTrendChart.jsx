import {motion} from "framer-motion";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from "recharts";

// Example data: Monthly donations received
const donationData = [
    {month: "Jan", donations: 12000},
    {month: "Feb", donations: 15000},
    {month: "Mar", donations: 17000},
    {month: "Apr", donations: 13000},
    {month: "May", donations: 20000},
    {month: "Jun", donations: 18000},
];

const ProjectsTrendChart = () => {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3}}
        >
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Monthly Donations Trend</h2>
            <div style={{width: "100%", height: 300}}>
                <ResponsiveContainer>
                    <LineChart data={donationData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
                        <XAxis dataKey="month" stroke="#9CA3AF"/>
                        <YAxis stroke="#9CA3AF"/>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{color: "#E5E7EB"}}
                        />
                        <Legend/>
                        <Line
                            type="monotone"
                            dataKey="donations"
                            stroke="#10B981"
                            strokeWidth={2}
                            dot={{fill: "#10B981", strokeWidth: 2, r: 6}}
                            activeDot={{r: 8, strokeWidth: 2}}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default ProjectsTrendChart;
