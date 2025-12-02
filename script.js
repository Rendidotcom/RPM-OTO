const RPM_ITEMS = [
  "01_Identitas_Pembelajaran",
  "02_Identifikasi_Murid",
  "03_Analisis_Materi",
  "04_Profil_Lulusan",
  "05_Desain_Pembelajaran",
  "06_Pengalaman_Pertemuan1",
  "07_Pengalaman_Pertemuan2",
  "08_Asesmen_dan_Rubrik",
  "09_Tes_dan_Kegiatan",
  "10_Lampiran_Portofolio"
];

const form = document.getElementById("rpmForm");

// generate 10 textarea otomatis
RPM_ITEMS.forEach((name, index) => {
  form.innerHTML += `
    <div class="item">
      <label>${name}</label>
      <textarea name="item${index}" placeholder="Isi beberapa baris untuk ${name}"></textarea>
    </div>
  `;
});

// GAS DEPLOY WEB APP URL
const GAS_URL = "MASUKKAN_URL_WEB_APP_GAS_PUNYAMU_DI_SINI";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {};
  new FormData(form).forEach((value, key) => data[key] = value);

  const payload = {
    action: "submitRPM",
    payload: data
  };

  const res = await fetch(GAS_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  alert("Data terkirim ke Google Apps Script!");
  form.reset();
});
