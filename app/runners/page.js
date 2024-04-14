"use client";

import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

import { useGetDataByCategory } from "@/app/api/api-hooks";
import { endpoints } from "@/app/api/config";

export default function New() {
	const runnerGames = useGetDataByCategory(endpoints.games, "runner");

	return (
		<main className={"main-inner"}>
			{runnerGames ? (
				<CardsListSection id="runner" title="Раннер" data={runnerGames} />
			) : (
				<Preloader />
			)}
		</main>
	);
}
