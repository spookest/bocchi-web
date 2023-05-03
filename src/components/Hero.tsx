import React from "react";
import Wallpaper from "../assets/wallpaper_5.jpg";

const Hero = () => {
	return (
		<>
			<section className="text-gray-600">
				<div className="container mx-auto flex flex-row items-center px-5 py-24 md:flex-row">
					<div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
						<h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
							Bocchi The Rock
						</h1>
						<p className="mb-8 max-w-xl text-justify leading-relaxed">
							A slice-of-life anime depicting the story of young rocker Hitori
							Goto, her artistic and musical journey, and most importantly, her
							difficulty in dealing with deep social anxiety
						</p>
						<div className="flex justify-center">
							<button className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
								Take a Tour
							</button>
						</div>
					</div>
					<div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
						<img
							className="rounded border-2 border-pink-500 object-cover object-center"
							alt="hero"
							src={Wallpaper}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
