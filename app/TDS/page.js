"use client";

import { CardsListSection } from "@/app/components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

import { useGetDataByCategory } from "@/app/api/api-hooks";
import { endpoints } from "@/app/api/config";

export default function New() {
	const TDS = useGetDataByCategory(endpoints.games, "TDS");

	return (
		<main className={"main-inner"}>
			{TDS ? (
				<CardsListSection id="TDS" title="TDS" data={TDS} />
			) : (
				<Preloader />
			)}
		</main>
	);
}
