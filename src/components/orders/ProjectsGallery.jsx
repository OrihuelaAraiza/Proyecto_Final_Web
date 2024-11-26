import React from "react";
import Card from "./Card";

const projectData = [{
    id: 1,
    name: "Clean Water Initiative",
    description: "Providing clean and safe water to communities.",
    image: "/projects/img.png",
}, {
    id: 2,
    name: "Education for All",
    description: "Empowering children with quality education.",
    image: "/projects/img_1.png",
}, {
    id: 3,
    name: "Health Outreach Program",
    description: "Providing medical services to underserved communities.",
    image: "/projects/img_2.png",
}, {
    id: 4,
    name: "Environmental Awareness",
    description: "Raising awareness for environmental conservation.",
    image: "/projects/img_3.png",
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
