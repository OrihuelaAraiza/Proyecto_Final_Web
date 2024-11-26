import {CheckCircle, Clock, Heart, TrendingUp} from "lucide-react";
import {motion} from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DailyProjectActivity from "../components/orders/DailyProjectActivity";
import DonationsDistribution from "../components/orders/DonationsDistribution";
import ProjectsGallery from "../components/orders/ProjectsGallery.jsx";

const projectStats = {
    totalProjects: "54",
    ongoingProjects: "12",
    completedProjects: "42",
    totalDonations: "$345,210",
};

const ProjectsPage = () => {
    return (
        <div className='flex-1 relative z-10 overflow-auto'>
            <Header title={"Projects Overview"}/>

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                >
                    <StatCard
                        name='Total Projects'
                        icon={TrendingUp}
                        value={projectStats.totalProjects}
                        color='#6366F1'
                    />
                    <StatCard
                        name='Ongoing Projects'
                        icon={Clock}
                        value={projectStats.ongoingProjects}
                        color='#F59E0B'
                    />
                    <StatCard
                        name='Completed Projects'
                        icon={CheckCircle}
                        value={projectStats.completedProjects}
                        color='#10B981'
                    />
                    <StatCard
                        name='Total Donations'
                        icon={Heart}
                        value={projectStats.totalDonations}
                        color='#EF4444'
                    />
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    <DailyProjectActivity/>
                    <DonationsDistribution/>
                </div>

                <ProjectsGallery/>
            </main>
        </div>
    );
};

export default ProjectsPage;
