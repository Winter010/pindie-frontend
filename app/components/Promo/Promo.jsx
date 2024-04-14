"use client";
import { useState, useEffect } from "react";
import Styles from "./Promo.module.css";

export const Promo = () => {
	const [codeVisible, setCodeVisible] = useState(false);

	const handleButtonClick = () => {
		setCodeVisible(!codeVisible);
	};

	useEffect(() => {
		let timeout;
		if (codeVisible) {
			timeout = setTimeout(() => {
				setCodeVisible(false);
			}, 5000);
		}
		return () => {
			clearTimeout(timeout);
		};
	}, [codeVisible]);

	return (
		<section className={Styles["promo"]}>
			<div className={Styles["promo__description-block"]}>
				<h2 className={Styles["promo__title"]}>Твой промо-код</h2>
				<p className={Styles["promo__description"]}>
					Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!
				</p>
				<button
					className={`button ${Styles["promo__button"]}`}
					onClick={handleButtonClick}
				>
					{codeVisible ? (
						<span className={Styles["promo-code"]}>WEBTEENS10</span>
					) : (
						"Получить код"
					)}
				</button>
			</div>
			<img
				src="./images/promo-illustration.svg"
				alt="Собака"
				className={Styles["promo__image"]}
			/>
		</section>
	);
};
