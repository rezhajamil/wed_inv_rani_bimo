import Cover from "@/parts/Cover";
import Banner from "@/parts/Banner";
import Event from "@/parts/Event";
import { useState } from "react";
import { useSelector } from "react-redux";

const Content = () => {
	document.querySelectorAll("a").forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
	});
	const isCoverHidden = useSelector((state) => state.isCoverHidden);
	return (
		<>
			{!isCoverHidden ? (
				<>
					<Banner />
					<Event />
				</>
			) : (
				<Cover />
			)}
		</>
	);
};
export default Content;
