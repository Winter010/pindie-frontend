"use client";

import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

import { useGetDataByCategory } from "@/app/api/api-hooks";
import { endpoints } from "@/app/api/config";

export default function New() {
	const popularGames = useGetDataByCategory(endpoints.games, "popular");
	return (
		<main className={"main-inner"}>
			{popularGames ? (
				<CardsListSection id="popular" title="Популярные" data={popularGames} />
			) : (
				<Preloader />
			)}
		</main>
	);
}
