import React from "react";

const Footer = () => {
	return (
		<>
			<footer className="body-font text-gray-600">
				<div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
					<a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
						<span className="ml-3 text-xl">Tailblocks</span>
					</a>
					<p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
						© 2020 Tailblocks —
						<a
							href="https://twitter.com/knyttneve"
							className="ml-1 text-gray-600"
							rel="noopener noreferrer"
							target="_blank"
						>
							@knyttneve
						</a>
					</p>
					<span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
						<a className="text-gray-500"></a>
						<a className="ml-3 text-gray-500"></a>
						<a className="ml-3 text-gray-500"></a>
						<a className="ml-3 text-gray-500"></a>
					</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
