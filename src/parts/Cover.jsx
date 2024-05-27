const Cover = () => {
	return (
		<>
			<div className="h-screen bg-primary">
				<div className="px-8 py-12 h-full">
					<div className="flex flex-col justify-center items-center h-full">
						<img
							src={`${import.meta.env.VITE_BASE_URL}/images/r&b.png`}
							alt="Rani & Bimo"
							className="h-72 object-contain"
						/>
						<p className="font-ogilvy text-white text-center text-xl mt-8">
							Kepada Yth Bapak/Ibu/Saudara/i
						</p>
						<p className="text-center text-5xl font-bold text-white mt-2">
							Rezha
						</p>
						<button className="bg-white px-4 py-4 text-center text-primary font-bold w-2/3 font-ogilvy mt-14 cursor-pointer">
							BUKA UNDANGAN
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default Cover;
