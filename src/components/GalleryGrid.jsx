import GalleryItem from "./GalleryItem";

const GalleryGrid = () => {
	return (
		<div className="grid grid-cols-2 gap-x-2">
			<div className="flex flex-col gap-2">
				<GalleryItem image="selected/gallery-1.jpeg" fade="left" />
				<GalleryItem image="selected/gallery-6.jpeg" fade="down" />
				<GalleryItem image="selected/gallery-3.jpeg" fade="left" />
				<GalleryItem image="selected/gallery-8.jpeg" fade="up" />
			</div>
			<div className="flex flex-col gap-3">
				<GalleryItem image="selected/gallery-5.jpeg" fade="down" />
				<GalleryItem image="selected/gallery-2.jpeg" fade="right" />
				<GalleryItem image="selected/gallery-7.jpeg" fade="up" />
				<GalleryItem image="selected/gallery-4.jpeg" fade="right" />
			</div>
		</div>
	);
};
export default GalleryGrid;
