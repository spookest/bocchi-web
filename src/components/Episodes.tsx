import { useState } from "react";
import episodeData from "../data/episodeData";

const Episodes = () => {
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
													? "font-bold text-blue-500"
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
		</>
	);
};

export default Episodes;
