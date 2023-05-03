import React, { useState } from "react";
import Hitori from "../assets/characters/hitori.jpg";
import Nijika from "../assets/characters/nijika.jpg";
import Ryo from "../assets/characters/ryo.jpg";
import Kita from "../assets/characters/kita.jpg";
import { TbBrandTwitter, TbBrandInstagram } from "react-icons/tb";
import characterData from "../data/characterData";

const Characters = () => {
	const [currentCharacter, setCurrentCharacter] = useState("");

	function handleClick(currentCharacter: string) {
		setCurrentCharacter(currentCharacter);
	}
	return (
		<>
			<section className="text-gray-600">
				<div className="container mx-auto px-5 pt-24">
					<div className="mb-8 flex w-full flex-wrap">
						<div className="mb-6 w-full lg:mb-0 lg:w-1/2">
							<h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
								Characters
							</h1>
							<div className="h-1 w-20 rounded bg-indigo-500"></div>
						</div>
					</div>
				</div>
				<div className="container mx-auto px-5">
					<div className="grid grid-cols-4 gap-5">
						{characterData.map((cast) => (
							<div key={cast.id} className="p-5 text-gray-600">
								<img
									src={cast.imageUrl}
									alt=""
									className="mb-4 h-72 w-full rounded object-cover"
								/>
								<h1 className="text-sm font-medium tracking-widest text-indigo-500">
									{cast.voice}
								</h1>
								<div className="flex flex-row justify-between">
									<p className="title-font mb-4 text-lg font-medium text-gray-900">
										{cast.character}
									</p>
									<p className="title-font texst-lg mb-4 font-medium text-gray-900">
										{cast.role}
									</p>
								</div>
								{cast.list?.map((item) => (
									<ul
										key={cast.id}
										className="prose-base list-outside list-disc tracking-wide"
									>
										<li>{item[1]}</li>
										<li>{item[2]}</li>
										<li>{item[3]}</li>
										<li>{item[4]}</li>
									</ul>
								))}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Characters;
