import Link from "next/link";

const Project = ({ project }) => {
	return (
		<div className="w-full rounded-lg cursor-pointer relative my-2">
			<img src={project.image} alt="" className="rounded-lg" />
			<div className="absolute h-full w-full top-0 right-0 overlay rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
				<h3 className="text-white text-xl text-center w-5/6">{project.description}</h3>
				<Link href={project.link}>
					<a className="my-2 inline-block border-2 px-4 border-blue-600 rounded-full p-1 text-xl text-white hover:bg-blue-600 transition duration-300">
						View Project <i className="bi bi-caret-right font-bold"></i>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Project;
