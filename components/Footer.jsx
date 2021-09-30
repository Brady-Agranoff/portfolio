const Footer = () => {
	return (
		<div className="bg-blue-600 p-8 text-white font-extralight w-full mt-auto flex items-center justify-center">
			<div className="flex justify-between items-center">
				<a
					href="https://github.com/brady-agranoff"
					target="_blank"
					className="block mx-1 border-white border p-1 px-2 hover:bg-white hover:text-blue-600 cursor-pointer transition duration-300"
					style={{ borderRadius: "50%" }}
					width="50px"
					height="50px"
				>
					<i className="bi bi-github"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/brady-agranoff-75a21314a/"
					target="_blank"
					className="block mx-1 border-white border p-1 px-2 hover:bg-white hover:text-blue-600 cursor-pointer transition duration-300"
					style={{ borderRadius: "50%" }}
					width="50px"
					height="50px"
				>
					<i className="bi bi-linkedin"></i>
				</a>
				<a
					href="mailto:bradyagranoff@gmail.com"
					target="_blank"
					className="block mx-1 border-white border p-1 px-2 hover:bg-white hover:text-blue-600 cursor-pointer transition duration-300"
					style={{ borderRadius: "50%" }}
					width="50px"
					height="50px"
				>
					<i className="bi bi-envelope"></i>
				</a>
			</div>
		</div>
	);
};

export default Footer;
