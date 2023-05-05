import React from "react";

const Navbar = () => {
	return (
		<>
			<header className="text-gray-600">
				<div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
					<a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0"></a>
					<nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
						<a className="mr-5 hover:text-gray-900">First Link</a>
						<a className="mr-5 hover:text-gray-900">Second Link</a>
						<a className="mr-5 hover:text-gray-900">Third Link</a>
						<a className="mr-5 hover:text-gray-900">Fourth Link</a>
					</nav>
					<button className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
						Button
					</button>
				</div>
			</header>
		</>
	);
};

export default Navbar;
