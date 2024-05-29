const UcapanCard = ({ nama, pesan, hadir, created_at }) => {
	return (
		<>
			<div className="p-4 bg-white">
				<p className="font-ogilvy">{pesan}</p>
				<div className="flex items-center mt-2 text-lg font-bold font-ogilvy text-primary">
					<span>{nama?.toUpperCase()}</span>
					<span>
						{hadir && (
							<img
								src={`${import.meta.env.VITE_BASE_URL}/icons/check.svg`}
								className="h-4"
							/>
						)}
					</span>
				</div>
			</div>
		</>
	);
};
export default UcapanCard;
