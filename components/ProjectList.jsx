import Project from "./Project";

const ProjectList = ({ projects }) => {
	return (
		<div className="mx-auto md:w-5/6 md:grid md:grid-cols-3 md:gap-8 px-6 md:px-0">
			{projects.map((project) => (
				<Project project={project}></Project>
			))}
		</div>
	);
};

export default ProjectList;
