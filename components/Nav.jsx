import React, { useEffect, useState } from "react";
import Link from "next/link";

const Nav = () => {
	const [active, setActive] = useState(false);

	const toggleActive = () => {
		setActive(!active);
	};

	return (
		<nav className="sticky top-0 w-full py-4 bg-gray-50 shadow">
			<div className="w-full flex justify-between items-center">
				<Link href="/">
					<a className="block w-1/3 md:w-1/6">
						<img src="https://cdn.shopify.com/s/files/1/0440/5285/files/hs-logo1.png?v=1617341159" alt="" className="w-full p-2" />
					</a>
				</Link>
				<button className="w-6 h-6 md:hidden mr-2" onClick={toggleActive}>
					<i className="bi bi-list text-2xl"></i>
				</button>
				<ul className="hidden md:flex justify-between items-center w-1/3 font-extralight text-lg mr-6">
					<li className="transition-colors hover:text-blue-800 duration-200 cursor-pointer">
						<Link href="/portfolio" className="w-full">
							<a className="block w-full">Work</a>
						</Link>
					</li>
					<li className="transition-colors hover:text-blue-800 duration-200 cursor-pointer">
						<Link href="/about" className="w-full">
							<a className="block w-full">About</a>
						</Link>
					</li>
					<li className="transition-colors hover:text-blue-800 duration-200 cursor-pointer">
						<Link href="/resume" className="w-full">
							<a className="block w-full">Resume</a>
						</Link>
					</li>
					<li className="transition-colors hover:text-blue-800 duration-200 cursor-pointer">
						<Link href="/contact" className="w-full">
							<a className="block w-full">Contact</a>
						</Link>
					</li>
				</ul>
			</div>

			<ul className={`${active ? "" : "hidden"} w-full md:hidden`}>
				<li className="border-b border-gray-200 w-full p-2">
					<Link href="/portfolio" className="w-full">
						<a className="block w-full" onClick={toggleActive}>
							Work
						</a>
					</Link>
				</li>
				<li className="border-b border-gray-200 w-full p-2">
					<Link href="/about" className="w-full">
						<a className="block w-full" onClick={toggleActive}>
							About
						</a>
					</Link>
				</li>
				<li className="border-b border-gray-200 w-full p-2">
					<Link href="/resume" className="w-full">
						<a className="block w-full" onClick={toggleActive}>
							Resume
						</a>
					</Link>
				</li>
				<li className="border-b border-gray-200 w-full p-2">
					<Link href="/contact" className="w-full">
						<a className="block w-full" onClick={toggleActive}>
							Contact
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
