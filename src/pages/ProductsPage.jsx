import {motion} from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import {AlertTriangle, DollarSign, ClipboardCheck, TrendingUp} from "lucide-react";
import ProjectsTrendChart from "../components/products/ProjectsTrendChart";
import ProjectsTable from "../components/products/ProjectsTable";
import ProjectCategoryDistributionChart from "../components/overview/ProjectCategoryDistributionChart.jsx";

const ProjectsOverviewPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Projects Overview"/>

            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                {/* STATS */}
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                >
                    <StatCard
                        name="Total Projects"
                        icon={ClipboardCheck}
                        value={45} // Example: Number of active projects
                        color="#6366F1"
                    />
                    <StatCard
                        name="Top Funded Project"
                        icon={TrendingUp}
                        value="$12,345"
                        color="#10B981"
                    />
                    <StatCard
                        name="Pending Approvals"
                        icon={AlertTriangle}
                        value={5} // Example: Projects awaiting admin approval
                        color="#F59E0B"
                    />
                    <StatCard
                        name="Total Donations"
                        icon={DollarSign}
                        value={"$1,234,567"} // Example: Total donation revenue
                        color="#EF4444"
                    />
                </motion.div>

                {/* PROJECTS TABLE */}
                <ProjectsTable/>

                {/* CHARTS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ProjectsTrendChart/>
                    <ProjectCategoryDistributionChart/>
                </div>
            </main>
        </div>
    );
};

export default ProjectsOverviewPage;
