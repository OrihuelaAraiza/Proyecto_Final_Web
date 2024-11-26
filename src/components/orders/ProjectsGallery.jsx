import React from "react";
import {motion} from "framer-motion";
import Card from "./Card"; // Assuming Card component is in the same folder

const projectData = [
    {
        id: 1,
        name: "Clean Water Initiative",
        description: "Providing clean and safe water to communities.",
        image: "/projects/img.png",
    },
    {
        id: 2,
        name: "Education for All",
        description: "Empowering children with quality education.",
        image: "/projects/img_1.png",
    },
    {
        id: 3,
        name: "Health Outreach Program",
        description: "Providing medical services to underserved communities.",
        image: "/projects/img_2.png",
    },
    {
        id: 4,
        name: "Environmental Awareness",
        description: "Raising awareness for environmental conservation.",
        image: "/projects/img_3.png",
    },
];

const ProjectGalleryContainer = () => {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
        >
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Projects Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectData.map((project) => (
                    <Card
                        key={project.id}
                        image={project.image}
                        title={project.name}
                        description={project.description}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectGalleryContainer;
