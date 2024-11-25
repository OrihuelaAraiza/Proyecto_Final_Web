import {useState, useEffect} from "react";
import {motion} from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import {Heart, BarChart2, Users, TrendingUp} from "lucide-react";
import ProjectImpactChart from "../components/sales/ProjectImpactChart";
import TopProjectsChart from "../components/sales/TopProjectsChart";
import MonthlyGrowthRate from "../components/sales/MonthlyGrowthRateChart";

// Mock Data
const PROJECTS = [
    {id: 1, name: "Clean Water Initiative"},
    {id: 2, name: "Education for All"},
    {id: 3, name: "Health Outreach Program"},
];


const PROJECT_STATS = {
    1: {
        totalProjects: 120,
        totalDonations: "$200,340",
        averageImpactScore: "88%",
        projectGrowth: "12.5%",
    },
    2: {
        totalProjects: 98,
        totalDonations: "$157,890",
        averageImpactScore: "80%",
        projectGrowth: "10.2%",
    },
    3: {
        totalProjects: 85,
        totalDonations: "$189,450",
        averageImpactScore: "85%",
        projectGrowth: "15.3%",
    },
};

const ProjectsDashboard = () => {
    // State for selected project
    const [selectedProject, setSelectedProject] = useState(PROJECTS[0].id);
    const [projectStats, setProjectStats] = useState(PROJECT_STATS[selectedProject]);

    // Effect to update stats when project changes
    useEffect(() => {
        setProjectStats(PROJECT_STATS[selectedProject]);
    }, [selectedProject]);

    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title='Projects Dashboard'/>

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* Project Selector */}
                <div className='mb-8'>
                    <label htmlFor='projectSelector' className='block text-sm font-medium text-gray-300 mb-2'>
                        Select Project
                    </label>
                    <select
                        id='projectSelector'
                        className='bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={selectedProject}
                        onChange={(e) => setSelectedProject(Number(e.target.value))}
                    >
                        {PROJECTS.map((project) => (
                            <option key={project.id} value={project.id}>
                                {project.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* PROJECT STATS */}
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                >
                    <StatCard
                        name='Total Projects'
                        icon={BarChart2}
                        value={projectStats.totalProjects.toLocaleString()}
                        color='#6366F1'
                    />
                    <StatCard
                        name='Total Donations'
                        icon={Heart}
                        value={projectStats.totalDonations}
                        color='#10B981'
                    />
                    <StatCard
                        name='Avg. Impact Score'
                        icon={TrendingUp}
                        value={projectStats.averageImpactScore}
                        color='#F59E0B'
                    />
                    <StatCard
                        name='Project Growth'
                        icon={Users}
                        value={projectStats.projectGrowth}
                        color='#EF4444'
                    />
                </motion.div>

                {/* Charts */}
                <ProjectImpactChart projectId={selectedProject}/>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    <TopProjectsChart projectId={selectedProject}/>
                    <MonthlyGrowthRate projectId={selectedProject}/>
                </div>
            </main>
        </div>
    );
};

export default ProjectsDashboard;
