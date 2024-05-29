const Banner = () => {
	return (
		<>
			<div className="h-screen p-4 bg-primary fade-in">
				<div className="w-full h-full bg-white">
					<div className="relative">
						<img
							src={`${import.meta.env.VITE_BASE_URL}/images/bg-banner.png`}
							className="object-contain w-full h-full pt-16"
						/>
						<div className="absolute inset-0 flex flex-col items-center py-8">
							<img
								src={`${import.meta.env.VITE_BASE_URL}/images/r&b-gray.png`}
								alt="Rani & Bimo"
								className="object-contain mx-auto mb-8 h-28"
							/>
							<p className="text-sm text-center font-ogilvy">
								UNDANGAN PERNIKAHAN
							</p>
							<p className="mb-2 text-4xl font-bold text-center text-primary">
								Walimatul 'Urs
							</p>
							<p className="font-bold text-center text-primary text-7xl">
								Rani &<br />
								Bimo
							</p>
							<div className="flex items-center mt-10 gap-x-6">
								<div className="border-[0.5px] border-primary w-12 h-fit"></div>
								<span className="font-ogilvy">02.07.2024</span>
								<div className="border-[0.5px] border-primary w-12 h-fit"></div>
							</div>
							<a
								target="_blank"
								href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=UNDANGAN+PERNIKAHAN+RANI+DAN+BIMO&dates=20240702T010000Z/20240702T150000Z&ctz=Asia/Jakarta"
								className="w-2/3 px-4 py-4 font-bold text-center text-white cursor-pointer bg-primary font-ogilvy mt-14"
							>
								SAVE THE DATE
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Banner;
