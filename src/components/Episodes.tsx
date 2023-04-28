import { useState } from "react";
import episodeData from "../data/episodeData";
import Wallpaper_1 from "../assets/wallpaper_1.jpg";
import Wallpaper_2 from "../assets/wallpaper_2.jpg";
import Wallpaper_3 from "../assets/wallpaper_3.jpg";
import Wallpaper_4 from "../assets/wallpaper_4.jpg";

const Episodes = () => {
	const [selectedImg, setSelectedImg] = useState(1);
	const handleImgClick = (index: number) => {
		setSelectedImg(index);
	};

	const [currentEpisode, setCurrentEpisode] = useState(1);

	function handleClick(currentEpisode: number) {
		setCurrentEpisode(currentEpisode);
	}
	return (
		<>
			<section className="body-font text-gray-600">
				<div className="container mx-auto px-5 py-24">
					<div className="mb-5 flex w-full flex-wrap">
						<div className="mb-6 w-full lg:mb-0 lg:w-1/2">
							<h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
								Story
							</h1>
							<div className="h-1 w-20 rounded bg-indigo-500"></div>
						</div>
					</div>

					<section className="container mx-auto pt-4">
						<div className="grid grid-cols-2 gap-10">
							<div className="flex flex-col justify-between rounded border-2 p-10">
								<div className="flex w-full flex-row justify-between text-lg">
									{episodeData.map((episode) => (
										<button
											key={episode.id}
											className={`${
												currentEpisode === episode.id
													? "text-blue-500"
													: "text-gray-500"
											}`}
											onClick={() => handleClick(episode.id)}
										>
											{episode.id}
										</button>
									))}
								</div>
								<div className="text-2xl font-bold">
									{episodeData.find((e) => e.id === currentEpisode)?.title}
								</div>

								<div className="text-justify">
									{
										episodeData.find((e) => e.id === currentEpisode)
											?.description
									}
								</div>

								<div className="grid grid-cols-2 gap-4">
									<ul>
										<li className="font-semibold">Screenplay</li>
										<li>
											{
												episodeData.find((e) => e.id === currentEpisode)
													?.screenplay
											}
										</li>
									</ul>

									<ul>
										<li className="font-semibold">Storyboard</li>
										<li>
											{
												episodeData.find((e) => e.id === currentEpisode)
													?.storyboard
											}
										</li>
									</ul>

									<ul>
										<li className="font-semibold">Staging</li>
										<li>
											{
												episodeData.find((e) => e.id === currentEpisode)
													?.staging
											}
										</li>
									</ul>

									<ul>
										<li className="font-semibold">Animation Director</li>
										<li>
											{
												episodeData.find((e) => e.id === currentEpisode)
													?.animationDirector
											}
										</li>
									</ul>
								</div>
							</div>
							<div className="aspect-video">
								<iframe
									className="h-full w-full rounded border-2"
									src={
										episodeData.find((e) => e.id === currentEpisode)?.youtubeId
									}
								></iframe>
							</div>
						</div>
					</section>
				</div>
			</section>

			<div className="mx-auto max-w-3xl">
				<div className="relative">
					<img
						src={`https://picsum.photos/id/${selectedImg}/800/400`}
						alt={`image-${selectedImg}`}
						className="h-auto w-full object-cover"
					/>
					<div className="absolute bottom-0 left-0 right-0 mt-2 flex justify-center space-x-2">
						{[1, 2, 3].map((index) => (
							<img
								key={index}
								src={`https://picsum.photos/id/${index}/100`}
								alt={`image-${index}`}
								className={`h-auto w-16 cursor-pointer rounded-full border-4 border-white ${
									selectedImg === index && "border-blue-500"
								}`}
								onClick={() => handleImgClick(index)}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Episodes;
