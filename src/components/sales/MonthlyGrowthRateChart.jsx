import {motion} from "framer-motion";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from "recharts";

const monthlyGrowthRateData = [
    {name: "Jan", growthRate: 4.2},
    {name: "Feb", growthRate: 3.8},
    {name: "Mar", growthRate: 5.1},
    {name: "Apr", growthRate: 4.6},
    {name: "May", growthRate: 5.4},
    {name: "Jun", growthRate: 7.2},
    {name: "Jul", growthRate: 6.1},
    {name: "Aug", growthRate: 5.9},
    {name: "Sep", growthRate: 6.8},
    {name: "Oct", growthRate: 6.3},
    {name: "Nov", growthRate: 7.1},
    {name: "Dec", growthRate: 7.5},
];

const MonthlyGrowthRateChart = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4}}
        >
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>Monthly Growth Rate</h2>

            <div style={{width: "100%", height: 300}}>
                <ResponsiveContainer>
                    <BarChart data={monthlyGrowthRateData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#374151'/>
                        <XAxis dataKey='name' stroke='#9CA3AF'/>
                        <YAxis
                            stroke='#9CA3AF'
                            label={{
                                value: "Growth Rate (%)",
                                angle: -90,
                                position: "insideLeft",
                                fill: "#9CA3AF",
                                dx: -10,
                            }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{color: "#E5E7EB"}}
                        />
                        <Legend
                            verticalAlign='top'
                            wrapperStyle={{color: "#E5E7EB"}}
                        />
                        <Bar dataKey='growthRate' fill='#8B5CF6' barSize={20}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default MonthlyGrowthRateChart;
