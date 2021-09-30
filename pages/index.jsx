import Head from "next/head";
import Link from "next/link";

export default function Home() {
	return (
		<div className="container mx-auto text-center py-20">
			<h2 className="text-4xl">Hi, I'm Brady. I do web and application development.</h2>
			<h4 className="text-lg font-light my-4">I'm passionate about building cool things, and building them right.</h4>
			<Link href="/portfolio">
				<a className="my-4 inline-block border-2 px-6 border-blue-600 rounded-full p-3 text-xl bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
					Take a look at my work
				</a>
			</Link>
		</div>
	);
}
