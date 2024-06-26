"use client";

import { useGetDataByCategory } from "@/app/api/api-hooks";
import { endpoints } from "@/app/api/config";
import { Preloader } from "@/app/components/Preloader/Preloader";

import { Banner } from "@/app/components/Banner/Banner";
import { Promo } from "@/app/components/Promo/Promo";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";

export default function Home() {
	const popularGames = useGetDataByCategory(endpoints.games, "popular");
	const newGames = useGetDataByCategory(endpoints.games, "new");
	return (
		<main>
			<Banner />

			{popularGames ? (
				<CardsListSection
					id="popular"
					title="Популярные"
					type="slider"
					data={popularGames}
				/>
			) : (
				<Preloader />
			)}
			{newGames ? (
				<CardsListSection
					id="new"
					title="Новые"
					type="slider"
					data={newGames}
				/>
			) : (
				<Preloader />
			)}

			<Promo />
		</main>
	);
}
