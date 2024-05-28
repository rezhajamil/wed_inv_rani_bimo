import GalleryGrid from "@/components/GalleryGrid";

const Gallery = () => {
	return (
		<>
			<section className="relative w-full min-h-screen px-6 bg-white">
				<div className="w-full my-8">
					<GalleryGrid />
				</div>
			</section>
		</>
	);
};
export default Gallery;
