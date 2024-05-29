import AOS from "aos";
import "aos/dist/aos.css";

const GalleryItem = ({ image, fade }) => {
	AOS.init();
	return (
		<div
			className="relative w-full overflow-hidden cursor-pointer group"
			data-aos={`fade-${fade}`}
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			data-aos-once="false"
		>
			<div className="absolute inset-0 w-full h-full transition-all duration-500 ease-in-out bg-gray-700/0 group-hover:bg-gray-700/50"></div>
			<img
				src={`${import.meta.env.VITE_BASE_URL}/images/${image}`}
				className="object-cover w-full"
			/>
		</div>
	);
};

export default GalleryItem;
