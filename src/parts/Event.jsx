import { useState } from "react";
import Gallery from "./Gallery";

const Event = () => {
	const countdownDate = new Date("2024-07-02T08:00:00").getTime();
	const [days, setDays] = useState("00");
	const [hours, setHours] = useState("00");
	const [minutes, setMinutes] = useState("00");

	// Update the countdown every second
	const countdownTimer = setInterval(() => {
		// Get the current date and time
		const now = new Date().getTime();

		// Calculate the remaining time
		const distance = countdownDate - now;

		// Calculate days, hours, minutes, and seconds
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

		setDays(days);
		setHours(hours);
		setMinutes(minutes);

		// If the countdown is finished, clear the interval
		if (distance < 0) {
			clearInterval(countdownTimer);
		}
	}, 1000);
	return (
		<>
			<div className="bg-[#F1F2F2] p-10">
				<p className="text-xs leading-loose text-center font-ogilvy">
					"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
					pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
					dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
					kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
					tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
				</p>
				<p className="mt-4 text-xs font-bold text-center font-ogilvy text-primary">
					Ar-Ruum (30): 21
				</p>
			</div>
			<div className="w-full h-full bg-white">
				<div className="relative">
					<img
						src={`${import.meta.env.VITE_BASE_URL}/images/bg-event.png`}
						className="object-contain w-full h-full pt-32"
					/>
					<div className="absolute inset-0 flex flex-col items-center px-6 py-16">
						<img
							src={`${import.meta.env.VITE_BASE_URL}/images/bismillah.png`}
							alt="Rani & Bimo"
							className="object-contain h-8 mx-auto mb-8"
						/>
						<p className="text-[10px] leading-loose text-center font-ogilvy">
							Dengan mengharap ridho Allah Subhanahu Wa'Taala, izinkan kami
							mengundang Bapak/Ibu/Saudara/i sekalian pada acara pernikahan
							putri dan putra kami
						</p>
						<p className="mt-6 mb-1 text-xs text-center text-primary">
							<span className="text-gray-400">Putri dari</span> Bapak Sarman dan
							<br /> Ibu Tasminy (Section SGA-TO)
						</p>
						<p className="text-4xl font-bold text-center text-primary">
							Rani Damayanti <br />
						</p>
						<span className="font-bold text-center text-primary">A.Md.Hms</span>
						<div className="relative flex items-center justify-center my-10 gap-x-6">
							<div className="w-16 border-[0.5px] border-primary h-fit"></div>
							<span className="absolute z-50 inline-block text-4xl font-bold text-primary">
								&
							</span>
						</div>
						<p className="mt-6 mb-1 text-xs text-center text-primary">
							<span className="text-gray-400">Putra dari</span> Bapak Azwar
							Fitrianto (Section SWH)
							<br />
							dan Ibu Evi Susanti
						</p>
						<p className="text-4xl font-bold text-center text-primary">
							Bimo Finca Azvy <br />
						</p>
						<span className="font-bold text-center text-primary">S.E.</span>
					</div>
				</div>
			</div>
			<Gallery />
			<div className="w-full bg-[#F1F2F2] p-10">
				<div className="w-full h-full px-8 py-8 bg-white">
					<p className="text-[10px] leading-loose text-center font-ogilvy">
						yang atas izin Allah akan dilaksanakan pada
					</p>
					<p className="text-2xl font-bold text-center text-primary">
						Selasa, 2 Juli 2024
					</p>
					<div className="flex justify-center w-1/2 mx-auto mt-4 gap-x-4">
						<div className="bg-[#E6E7E8] py-3 px-4">
							<p className="text-2xl font-bold text-center text-primary">
								{days}
							</p>
							<p className="text-xs font-bold text-center text-primary">Hari</p>
						</div>
						<div className="bg-[#E6E7E8] py-3 px-4">
							<p className="text-2xl font-bold text-center text-primary">
								{hours}
							</p>
							<p className="text-xs font-bold text-center text-primary">Jam</p>
						</div>
						<div className="bg-[#E6E7E8] py-3 px-4">
							<p className="text-2xl font-bold text-center text-primary">
								{minutes}
							</p>
							<p className="text-xs font-bold text-center text-primary">
								Menit
							</p>
						</div>
					</div>
					<p className="my-6 text-xs text-center font-ogilvy">
						<p className="text-primary">Akad Nikah</p>
						<p className="">Pukul 08.00 - 10.00 WIB</p>
						<p className="">Masjid Nurul Huda, Tanjung Gading</p>
					</p>
					<div className="flex justify-center w-full">
						<a
							target="_blank"
							href="https://maps.app.goo.gl/uNpCxrDCMpQdpc7u7"
							className="inline-block w-2/3 px-6 py-2 mx-auto text-sm font-bold text-center text-white cursor-pointer bg-primary font-ogilvy "
						>
							CEK LOKASI
						</a>
					</div>
					<p className="my-6 mt-10 text-xs text-center font-ogilvy">
						<p className="text-primary">Resepsi</p>
						<p className="">Pukul 11.00 - 22.00 WIB</p>
						<p className="">Gedung MPH, Tanjung Gading</p>
					</p>
					<div className="flex justify-center w-full">
						<a
							target="_blank"
							href="https://maps.app.goo.gl/azJNTE3BXT6pWz7C8"
							className="inline-block w-2/3 px-6 py-2 mx-auto text-sm font-bold text-center text-white cursor-pointer bg-primary font-ogilvy "
						>
							CEK LOKASI
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
export default Event;
