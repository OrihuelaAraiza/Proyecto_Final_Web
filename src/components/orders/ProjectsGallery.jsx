import React from "react";
import Card from "./Card";

const projectData = [{
    id: 1,
    name: "Clean Water Initiative",
    description: "Providing clean and safe water to communities.",
    image: "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
}, {
    id: 2,
    name: "Education for All",
    description: "Empowering children with quality education.",
    image: "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
}, {
    id: 3,
    name: "Health Outreach Program",
    description: "Providing medical services to underserved communities.",
    image: "https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
}, {
    id: 4,
    name: "Environmental Awareness",
    description: "Raising awareness for environmental conservation.",
    image: "https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=",
},];

const ProjectGallery = () => {
    return (<div className="card-container">
            {projectData.map((project) => (<Card
                    key={project.id}
                    image={project.image}
                    title={project.name}
                    description={project.description}
                />))}
        </div>);
};

export default ProjectGallery;
