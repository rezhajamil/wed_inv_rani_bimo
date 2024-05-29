import { useState } from "react";
import { useDispatch } from "react-redux";

const Cover = () => {
	const dispatch = useDispatch();
	const [isFadeOut, setisFadeOut] = useState(false);

	const toggleCover = () => {
		setisFadeOut(true);
		setTimeout(() => {
			dispatch({ type: "TOGGLE_COVER" });
		}, 800);
	};

	const queryParams = new URLSearchParams(window.location.search);

	const toValue = queryParams.get("to");
	return (
		<>
			<div className={`h-screen bg-primary ${isFadeOut && "fade-out"}`}>
				<div className="h-full px-8 py-12">
					<div className="flex flex-col items-center justify-center h-full">
						<img
							src={`${import.meta.env.VITE_BASE_URL}/images/r&b.png`}
							alt="Rani & Bimo"
							className="object-contain h-72"
						/>
						<p className="mt-8 text-xl text-center text-white font-ogilvy">
							Kepada Yth Bapak/Ibu/Saudara/i
						</p>
						<p className="mt-2 text-5xl font-bold text-center text-white">
							{toValue ?? "Tamu"}
						</p>
						<button
							onClick={toggleCover}
							className="w-2/3 px-4 py-4 mt-8 font-bold text-center bg-white cursor-pointer text-primary font-ogilvy"
						>
							BUKA UNDANGAN
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default Cover;
