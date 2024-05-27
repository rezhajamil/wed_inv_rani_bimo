const Banner = () => {
	return (
		<>
			<div className="h-screen bg-primary p-4">
				<div className="bg-white w-full h-full">
					<div className="relative">
						<img
							src={`${import.meta.env.VITE_BASE_URL}/images/bg-banner.png`}
							className="object-contain w-full h-full pt-16"
						/>
						<div className="absolute inset-0 flex flex-col items-center py-8">
							<img
								src={`${import.meta.env.VITE_BASE_URL}/images/r&b-gray.png`}
								alt="Rani & Bimo"
								className="h-28 object-contain mx-auto mb-8"
							/>
							<p className="text-center font-ogilvy text-sm">
								UNDANGAN PERNIKAHAN
							</p>
							<p className="font-bold text-primary text-center text-4xl mb-2">
								Walimatul 'Urs
							</p>
							<p className="font-bold text-primary text-center text-7xl">
								Rani &<br />
								Bimo
							</p>
							<div className="mt-10 flex gap-x-6 items-center">
								<div className="border-[0.5px] border-primary w-12 h-fit"></div>
								<span className="font-ogilvy">02.07.2024</span>
								<div className="border-[0.5px] border-primary w-12 h-fit"></div>
							</div>
							<button className="bg-primary px-4 py-4 text-center text-white font-bold w-2/3 font-ogilvy mt-14 cursor-pointer">
								SAVE THE DATE
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Banner;
