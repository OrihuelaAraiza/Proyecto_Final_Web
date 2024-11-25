import {motion} from "framer-motion";
import {Edit, Search, Trash2} from "lucide-react";
import {useState} from "react";

// Sample data for projects
const PROJECT_DATA = [
    {id: 1, name: "School Supplies Drive", category: "Education", budget: 4500, progress: "Completed"},
    {id: 2, name: "Tree Plantation Drive", category: "Environment", budget: 3200, progress: "In Progress"},
    {id: 3, name: "Health Checkup Camp", category: "Health", budget: 2800, progress: "Completed"},
    {id: 4, name: "Community Kitchen", category: "Community Development", budget: 2100, progress: "In Progress"},
    {id: 5, name: "Local Art Workshop", category: "Arts & Culture", budget: 1900, progress: "Planned"},
];

const ProjectsTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProjects, setFilteredProjects] = useState(PROJECT_DATA);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = PROJECT_DATA.filter(
            (project) =>
                project.name.toLowerCase().includes(term) ||
                project.category.toLowerCase().includes(term) ||
                project.progress.toLowerCase().includes(term)
        );
        setFilteredProjects(filtered);
    };

    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-100">Project List</h2>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleSearch}
                        value={searchTerm}
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18}/>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Budget
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Progress
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-700">
                    {filteredProjects.map((project) => (
                        <motion.tr
                            key={project.id}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.3}}
                        >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                {project.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{project.category}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                ${project.budget.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{project.progress}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                                    <Edit size={18}/>
                                </button>
                                <button className="text-red-400 hover:text-red-300">
                                    <Trash2 size={18}/>
                                </button>
                            </td>
                        </motion.tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default ProjectsTable;
