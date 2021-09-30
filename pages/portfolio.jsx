import React from "react";
import ProjectList from "../components/ProjectList";

const portfolio = ({ projects }) => {
	return (
		<div className="container mx-auto my-4">
			<h2 className="text-center text-4xl text-black mt-10 mb-2 w-5/6 mx-auto">My Recent Work</h2>
			<p className="font-extralight text-lg text-center text-black mb-4 w-5/6 mx-auto">
				Here's a few applications and projects I've done recently. Want to see more?{" "}
				<a href="mailto:bradyagranoff@gmail.com" className="text-blue-600 cursor-pointer font-normal">
					Email Me.
				</a>
			</p>
			<ProjectList projects={projects}></ProjectList>
		</div>
	);
};

export async function getStaticProps() {
	return {
		props: {
			projects: [
				{
					title: "Hoopswagg Fundraising",
					description: "Customizable products bringing a fun and personal flare to fundraising",
					image: "images/hoopswaggFundraisingHomepage.jpg",
					link: "/portfolio",
				},
				{
					title: "Hoopswagg Clients",
					description: "Providing clients with a simplistic platform for personalized gifts",
					image: "images/hoopswaggClientsHomepage.jpg",
					link: "/portfolio",
				},
			],
		},
	};
}
export default portfolio;
