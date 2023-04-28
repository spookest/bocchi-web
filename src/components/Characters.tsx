import React from "react";
import Hitori from "../assets/characters/hitori.jpg";
import Nijika from "../assets/characters/nijika.jpg";
import Ryo from "../assets/characters/ryo.jpg";
import Kita from "../assets/characters/kita.jpg";

const Characters = () => {
	return (
		<>
			<section className="body-font text-gray-600">
				<div className="container mx-auto px-5 py-24">
					<div className="mb-20 flex w-full flex-wrap">
						<div className="mb-6 w-full lg:mb-0 lg:w-1/2">
							<h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
								Characters
							</h1>
							<div className="h-1 w-20 rounded bg-indigo-500"></div>
						</div>
					</div>
					<div className="-m-4 flex flex-wrap">
						<div className="p-4 md:w-1/2 xl:w-1/4">
							<div className="rounded-lg border-2 bg-gray-100 p-6 duration-300 hover:border-pink-500">
								<img
									className="mb-6 h-40 w-full rounded object-cover object-center"
									src={Hitori}
									alt="content"
								/>
								<h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
									Yoshino Aoyama
								</h3>
								<div className="title-font mb-4 flex items-center justify-between text-lg font-medium text-gray-900">
									<h2 className="">Hitori Gotoh</h2>
									<p>Guitar</p>
								</div>
								<p className="text-justify text-base leading-relaxed">
									Lonely and socially anxious high school freshman,
									self-described as a gloomy, indoor-dwelling outcast, longs to
									join a band, starts playing guitar to pursue popularity.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/2 xl:w-1/4">
							<div className="rounded-lg border-2 bg-gray-100 p-6 duration-300 hover:border-yellow-500">
								<img
									className="mb-6 h-40 w-full rounded object-cover object-center"
									src={Nijika}
									alt="content"
								/>
								<h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
									Sayumi Suzushiro
								</h3>
								<div className="title-font mb-4 flex items-center justify-between text-lg font-medium text-gray-900">
									<h2 className="">Nijika Ijichi</h2>
									<p>Drums</p>
								</div>
								<p className="text-justify text-base leading-relaxed">
									Energetic and cheerful high school sophomore, drummer in
									Kessoku Band, takes care of Hitori, has older sister Seika who
									manages "STARRY" live house and holds special affection for
									it.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/2 xl:w-1/4">
							<div className="rounded-lg border-2 bg-gray-100 p-6 duration-300 hover:border-blue-500">
								<img
									className="mb-6 h-40 w-full rounded object-cover object-center"
									src={Ryo}
									alt="content"
								/>
								<h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
									Saku Mizuno
								</h3>
								<div className="title-font mb-4 flex items-center justify-between text-lg font-medium text-gray-900">
									<h2 className="">Ryo Yamada</h2>
									<p>Bass</p>
								</div>
								<p className="text-justify text-base leading-relaxed">
									Cool and solitary high schooler, plays bass in Kessoku Band,
									best friends with Nijika, eccentric hobbies, struggles with
									money and occasionally eats weeds when hungry.
								</p>
							</div>
						</div>
						<div className="p-4 md:w-1/2 xl:w-1/4">
							<div className="rounded-lg border-2 bg-gray-100 p-6 duration-300 hover:border-red-500">
								<img
									className="mb-6 h-40 w-full rounded object-cover object-center"
									src={Kita}
									alt="content"
								/>
								<h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
									Ikumi Hasegawa
								</h3>
								<div className="title-font mb-4 flex items-center justify-between text-lg font-medium text-gray-900">
									<h2 className="">Ikuyo Kita</h2>
									<p>Guitar & Vocal</p>
								</div>
								<p className="text-justify text-base leading-relaxed">
									Bright and popular high school freshman, in charge of guitar
									and vocals in Kessoku Band, cheerful and outgoing, has
									feelings for Ryo, enjoys photography and sharing on Isosta.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Characters;
