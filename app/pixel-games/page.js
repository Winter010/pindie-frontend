"use client";

import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

import { useGetDataByCategory } from "@/app/api/api-hooks";
import { endpoints } from "@/app/api/config";

export default function New() {
	const pixelGames = useGetDataByCategory(endpoints.games, "pixel");
	return (
		<main className={"main-inner"}>
			{pixelGames ? (
				<CardsListSection id="pixel" title="Пиксельные" data={pixelGames} />
			) : (
				<Preloader />
			)}
		</main>
	);
}
