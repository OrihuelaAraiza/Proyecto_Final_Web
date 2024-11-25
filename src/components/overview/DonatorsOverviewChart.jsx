import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import {motion} from "framer-motion";

const donationsData = [
    {name: "Jul", donations: 4200},
    {name: "Aug", donations: 3800},
    {name: "Sep", donations: 5100},
    {name: "Oct", donations: 4600},
    {name: "Nov", donations: 5400},
    {name: "Dec", donations: 7200},
    {name: "Jan", donations: 6100},
    {name: "Feb", donations: 5900},
    {name: "Mar", donations: 6800},
    {name: "Apr", donations: 6300},
    {name: "May", donations: 7100},
    {name: "Jun", donations: 7500},
];

const DonationsOverviewChart = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Donations Overview</h2>

            <div className='h-80'>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={donationsData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#4B5563'/>
                        <XAxis dataKey={"name"} stroke='#9ca3af'/>
                        <YAxis stroke='#9ca3af'/>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{color: "#E5E7EB"}}
                        />
                        <Line
                            type='monotone'
                            dataKey='donations'
                            stroke='#6366F1'
                            strokeWidth={3}
                            dot={{fill: "#6366F1", strokeWidth: 2, r: 6}}
                            activeDot={{r: 8, strokeWidth: 2}}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};
export default DonationsOverviewChart;
