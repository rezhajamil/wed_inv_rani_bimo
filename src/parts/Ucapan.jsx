import useForm from "@/helpers/hooks/useForm";
import axios from "axios";
import UcapanCard from "@/components/UcapanCard";
import { useEffect, useState } from "react";

const Ucapan = () => {
	const api_url = import.meta.env.VITE_API_URL;

	const [ucapanList, setUcapanList] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const [{ nama, pesan, hadir }, setState, newState, resetState] = useForm({
		nama: "",
		pesan: "",
		hadir: "",
	});

	const submit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		axios
			.post(`${api_url}/ucapan`, { nama, pesan, hadir })
			.then((res) => {
				if (res.data.status == "success") {
					setUcapanList(res.data.data);
					setIsLoading(false);
				}
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
		resetState();
	};

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`${api_url}/ucapan`)
			.then((res) => {
				if (res.data.status == "success") {
					setUcapanList(res.data.data);
				}

				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
	}, []);
	return (
		<>
			<div className="p-8 bg-white">
				<p className="text-2xl font-bold text-center text-primary">
					Ucapan & Doa
				</p>
				<form
					onSubmit={submit}
					className="flex flex-col items-center mt-6 gap-y-4"
				>
					<input
						type="text"
						className="w-full p-3 bg-[#E6E7E8]"
						placeholder="Nama"
						name="nama"
						id="nama"
						onChange={setState}
						value={nama}
						required
					/>
					<textarea
						name="pesan"
						id="pesan"
						cols="30"
						rows="3"
						className="w-full p-3 bg-[#E6E7E8]"
						placeholder="Ucapan"
						onChange={setState}
						value={pesan}
						required
					/>
					<select
						type="text"
						name="hadir"
						id="hadir"
						className="w-full p-3 bg-[#E6E7E8] "
						placeholder="Ucapan"
						onChange={setState}
						value={hadir}
						required
					>
						<option value="" defaultChecked disabled>
							Konfirmasi Kehadiran
						</option>
						<option value="true">Hadir</option>
						<option value="false">Tidak Hadir</option>
					</select>
					<button className="w-full px-3 py-3 font-bold text-center text-white cursor-pointer bg-primary font-ogilvy">
						Kirim Ucapan
					</button>
				</form>
			</div>
			<div
				className={`flex flex-col gap-6 bg-primary overflow-y-auto max-h-[400px] ${
					ucapanList?.length <= 0 ? "h-0 " : "my-8 p-8"
				}`}
			>
				{ucapanList?.map((data, idx) => {
					return (
						<UcapanCard
							key={idx}
							nama={data.nama}
							pesan={data.pesan}
							hadir={data.hadir}
							created_at={data.createdAt}
						/>
					);
				})}
			</div>
		</>
	);
};
export default Ucapan;
