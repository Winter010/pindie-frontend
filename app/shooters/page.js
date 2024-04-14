"use client";

import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

import { useGetDataByCategory } from "@/app/api/api-hooks";
import { endpoints } from "@/app/api/config";

export default function New() {
	const shooterGames = useGetDataByCategory(endpoints.games, "shooter");

	return (
		<main className={"main-inner"}>
			{shooterGames ? (
				<CardsListSection id="shooter" title="Шутеры" data={shooterGames} />
			) : (
				<Preloader />
			)}
		</main>
	);
}
