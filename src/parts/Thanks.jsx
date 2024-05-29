const Thanks = () => {
	return (
		<>
			<div className="bg-white">
				<div className="relative">
					<img
						src={`${import.meta.env.VITE_BASE_URL}/images/bg-thanks.png`}
						className="object-contain w-full h-full pt-16"
					/>
					<div className="absolute inset-0 flex flex-col items-center px-8 py-6">
						<p className="text-xs text-center font-ogilvy">
							Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
							berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
							<br />
							Atas kehadirannya, kami ucapkan terima kasih.
						</p>
						<p className="mt-4 text-sm text-center font-ogilvy">
							<span className="text-xs text-primary">Kami yang berbahagia</span>
							<br />
							Keluarga Besar Sarman & Tasminy <br />
							Keluarga Besar Azwar Fitrianto & Evi Susanti
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default Thanks;
