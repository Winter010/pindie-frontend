"use client";

import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

import { useGetDataByCategory } from "@/app/api/api-hooks";
import { endpoints } from "@/app/api/config";

export default function New() {
	const newGames = useGetDataByCategory(endpoints.games, "new");
	return (
		<main className="main-inner">
			{newGames ? (
				<CardsListSection id="new" title="Новые" data={newGames} />
			) : (
				<Preloader />
			)}
		</main>
	);
}
