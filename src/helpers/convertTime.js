export default (waktu) => {
	waktu = new Date(waktu);
	const waktuSekarang = new Date();
	const selisihDetik = Math.floor((waktuSekarang - waktu) / 1000);

	const detikDalamMenit = 60;
	const detikDalamJam = detikDalamMenit * 60;
	const detikDalamHari = detikDalamJam * 24;
	const detikDalamMinggu = detikDalamHari * 7;
	const detikDalamBulan = detikDalamHari * 30;
	const detikDalamTahun = detikDalamHari * 365;

	if (selisihDetik < detikDalamMenit) {
		return "baru saja";
	} else if (selisihDetik < detikDalamJam) {
		const menitYangLalu = Math.floor(selisihDetik / detikDalamMenit);
		return `${menitYangLalu} menit yang lalu`;
	} else if (selisihDetik < detikDalamHari) {
		const jamYangLalu = Math.floor(selisihDetik / detikDalamJam);
		return `${jamYangLalu} jam yang lalu`;
	} else if (selisihDetik < detikDalamMinggu) {
		const hariYangLalu = Math.floor(selisihDetik / detikDalamHari);
		return `${hariYangLalu} hari yang lalu`;
	} else if (selisihDetik < detikDalamBulan) {
		const mingguYangLalu = Math.floor(selisihDetik / detikDalamMinggu);
		return `${mingguYangLalu} minggu yang lalu`;
	} else if (selisihDetik < detikDalamTahun) {
		const bulanYangLalu = Math.floor(selisihDetik / detikDalamBulan);
		return `${bulanYangLalu} bulan yang lalu`;
	} else {
		const tahunYangLalu = Math.floor(selisihDetik / detikDalamTahun);
		return `${tahunYangLalu} tahun yang lalu`;
	}
};
