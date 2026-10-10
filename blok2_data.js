/* --- 1) IDENTITAS MATERI & PROFIL --- */
const CONFIG = {
  judul:    "Bentuk Molekul",
  subJudul: "Teori VSEPR dan Kepolaran Molekul",
  fase:     "Fase F • Kelas XI",
  mapel:    "Kimia",
  unit:     "Ikatan Kimia",
  subUnit:  "Bentuk Molekul",
  tp:       "Murid mampu menganalisis bentuk molekul berdasarkan teori tolakan pasangan elektron (VSEPR) dan hubungannya dengan kepolaran molekul secara tepat dan kritis.",
  logo:     "./asset/img/logo.png",
  bgJudul:  "./asset/img/bg_judul.jpg",
  profil: {
    nama:     "Sukarni",
    instansi: "SMAN 1 Tarumajaya",
    surel:    "sukarni94@guru.sma.belajar.id",
    tahun:    "2026",
    jenis:    "Media Pembelajaran Interaktif (MPI)",
    foto:     "./asset/img/profil.png"
  },
  referensi: {
    materi: [
      "Badan Standar, Kurikulum, dan Asesmen Pendidikan. (2025). Keputusan Kepala BSKAP Nomor 046/H/KR/2025 tentang Capaian Pembelajaran pada Pendidikan Anak Usia Dini, Jenjang Pendidikan Dasar, dan Jenjang Pendidikan Menengah. Kementerian Pendidikan Dasar dan Menengah.",
      "Chang, R., & Goldsby, K. A. (2016). Chemistry (12th ed.). McGraw-Hill Education.",
      "Petrucci, R. H., Herring, F. G., Madura, J. D., & Bissonnette, C. (2017). General Chemistry: Principles and Modern Applications (11th ed.). Pearson."
    ],
    aset: [
      "OpenAI. (2026). ChatGPT (Versi GPT-4o). Seluruh ilustrasi, elemen visual, dan desain dalam media pembelajaran ini dihasilkan melalui prompting pada layanan OpenAI. Ketentuan Penggunaan OpenAI (Terms of Use). https://openai.com/policies/row-terms-of-use/",
      "MyInstants. (2026). Efek suara (sound effect) yang digunakan pada media pembelajaran. Lisensi sesuai ketentuan penggunaan MyInstants. https://www.myinstants.com/"
    ],
    ai: [
      "Ilustrasi dan gambar pada halaman muka dan halaman materi, bermain, dan berlatih dibuat menggunakan ChatGPT.",
      "Seluruh materi, soal, dan pembahasan disusun oleh pengembang."
    ]
  }
};

// Mengambil elemen dari index.html
const btnMulai = document.getElementById('btnMulai'); // Sesuaikan ID tombol
const bgMusic = document.getElementById('bgMusic');

// Memutar audio saat tombol MULAI diklik
btnMulai.addEventListener('click', function() {
  bgMusic.play();
});
/* --- 2) BELAJAR — gambar kiri, penjelasan kanan (1 frame) --- */
const MATERI = [
  { judul:"1. Mengapa Bentuk Molekul Penting?", img:"./asset/img/materi_1.png",
    intro:"Anak-anak, pernahkah kalian bertanya mengapa molekul air tampak 'bengkok', sedangkan molekul karbon dioksida lurus?",
    isi:"<p>Setiap molekul memiliki <b>bentuk tiga dimensi</b> yang ditentukan oleh susunan atom-atom di sekitar <b>atom pusat</b>.</p><ul><li>Bentuk molekul memengaruhi <b>kepolaran</b>, titik didih, dan kelarutan suatu zat.</li><li>Bentuk molekul tidak dapat dilihat langsung, tetapi dapat diprediksi dengan <b>teori VSEPR</b>.</li><li>VSEPR berasal dari <i>Valence Shell Electron Pair Repulsion</i>, yaitu tolakan pasangan elektron kulit valensi.</li></ul>",
    kuis:{ tanya:"Bentuk molekul dapat diprediksi menggunakan teori ...", o:["Rutherford","VSEPR"], j:1 } },

  { judul:"2. Teori VSEPR: Pasangan Elektron Saling Menolak", img:"./asset/img/materi_2.png",
    intro:"Bayangkan beberapa balon diikat pada satu titik. Balon-balon itu akan saling menjauh, bukan? Begitu juga pasangan elektron.",
    isi:"<p>Pasangan elektron di sekitar atom pusat bermuatan negatif, sehingga <b>saling tolak-menolak</b> dan mengambil posisi sejauh mungkin.</p><ul><li><b>PEI</b> (pasangan elektron ikatan): dipakai bersama oleh dua atom.</li><li><b>PEB</b> (pasangan elektron bebas): hanya milik atom pusat, sehingga menempati ruang lebih besar.</li><li>Urutan kekuatan tolakan: <b>PEB–PEB &gt; PEB–PEI &gt; PEI–PEI</b>.</li></ul>",
    kuis:{ tanya:"Tolakan yang paling kuat terjadi antara ...", o:["PEI dan PEI","PEB dan PEB"], j:1 } },

  { judul:"3. Domain Elektron dan Notasi AXE", img:"./asset/img/materi_3.png",
    intro:"Supaya lebih mudah, Bapak kenalkan 'kode' untuk memetakan atom pusat, namanya notasi AXE.",
    isi:"<p>Satu <b>domain elektron</b> adalah satu daerah tempat elektron berada di sekitar atom pusat, yaitu satu ikatan (tunggal, rangkap, atau rangkap tiga) atau satu PEB.</p><p style='font-size:25px;text-align:center;'><b>AX<sub>n</sub>E<sub>m</sub></b></p><ul><li><b>A</b> = atom pusat, <b>X</b> = atom terikat (n buah), <b>E</b> = PEB (m buah).</li><li>Ikatan rangkap dihitung sebagai <b>satu domain</b>.</li><li>Contoh: CH₄ → AX₄, NH₃ → AX₃E, H₂O → AX₂E₂.</li></ul>",
    kuis:{ tanya:"Notasi AXE untuk molekul NH₃ adalah ...", o:["AX₃E","AX₂E₂"], j:0 } },

  { judul:"4. Dua dan Tiga Domain Elektron", img:"./asset/img/materi_4.png",
    intro:"Kita mulai dari yang paling sederhana ya. Perhatikan bagaimana satu PEB saja sudah mengubah bentuk molekul.",
    isi:"<ul><li><b>AX₂</b> (2 domain): <b>linear</b>, sudut 180°. Contoh: BeCl₂ dan CO₂.</li><li><b>AX₃</b> (3 domain): <b>segitiga planar</b>, sudut 120°. Contoh: BF₃.</li><li><b>AX₂E</b> (3 domain, 1 PEB): <b>bentuk V</b>, sudut &lt; 120°. Contoh: SO₂.</li></ul><p>PEB menekan pasangan ikatan, sehingga sudut ikatan menjadi sedikit lebih kecil.</p>",
    kuis:{ tanya:"Molekul BF₃ (AX₃) berbentuk ...", o:["segitiga planar","linear"], j:0 } },

  { judul:"5. Empat Domain Elektron", img:"./asset/img/materi_5.png",
    intro:"Ini bagian yang Bapak suka, karena pengaruh PEB terlihat jelas pada tiga molekul yang sangat kita kenal.",
    isi:"<p>Ketiga molekul ini punya susunan domain yang sama, yaitu <b>tetrahedral</b>, tetapi bentuk molekulnya berbeda karena jumlah PEB.</p><ul><li><b>AX₄</b>: <b>tetrahedral</b>, 109,5°. Contoh: CH₄.</li><li><b>AX₃E</b>: <b>piramida trigonal</b>, ±107°. Contoh: NH₃.</li><li><b>AX₂E₂</b>: <b>bentuk V</b>, ±104,5°. Contoh: H₂O.</li></ul><p>Semakin banyak PEB, semakin kecil sudut ikatannya.</p>",
    kuis:{ tanya:"Molekul H₂O (AX₂E₂) berbentuk ...", o:["linear","bentuk V"], j:1 } },

  { judul:"6. Lima dan Enam Domain Elektron", img:"./asset/img/materi_6.png",
    intro:"Beberapa atom pusat mampu menampung lebih dari empat domain. Mari kita lihat bentuk-bentuk yang lebih 'ramai'.",
    isi:"<ul><li><b>5 domain</b>: AX₅ = <b>bipiramida trigonal</b> (PCl₅); AX₄E = <b>jungkat-jungkit</b> (SF₄); AX₃E₂ = <b>bentuk T</b> (ClF₃); AX₂E₃ = <b>linear</b> (XeF₂).</li><li><b>6 domain</b>: AX₆ = <b>oktahedral</b> (SF₆); AX₅E = <b>piramida segiempat</b> (BrF₅); AX₄E₂ = <b>segiempat planar</b> (XeF₄).</li></ul><p>Pada 5 domain, PEB menempati posisi <b>ekuator</b> agar tolakannya lebih kecil.</p>",
    kuis:{ tanya:"Molekul SF₆ (AX₆) berbentuk ...", o:["oktahedral","tetrahedral"], j:0 } },

  { judul:"7. Kepolaran Ikatan dan Momen Dipol", img:"./asset/img/materi_7.png",
    intro:"Sekarang kita beralih ke kepolaran. Bayangkan tarik tambang antara dua atom yang kekuatannya tidak sama.",
    isi:"<p>Perbedaan <b>keelektronegatifan</b> membuat elektron ikatan lebih dekat ke atom yang lebih elektronegatif.</p><ul><li>Atom yang lebih elektronegatif bermuatan parsial negatif (δ⁻), pasangannya δ⁺.</li><li>Ikatan <b>polar</b> terbentuk dari atom yang keelektronegatifannya berbeda, misalnya H–Cl.</li><li>Ikatan <b>nonpolar</b> terbentuk dari atom yang sama, misalnya H–H dan Cl–Cl.</li><li>Kepolaran ikatan dinyatakan dengan <b>momen dipol (μ)</b>, besaran vektor yang digambar sebagai panah menuju atom yang lebih elektronegatif.</li></ul>",
    kuis:{ tanya:"Pada ikatan H–Cl (EN H = 2,1; Cl = 3,0), muatan δ⁻ berada pada atom ...", o:["H","Cl"], j:1 } },

  { judul:"8. Bentuk Molekul dan Kepolaran Molekul", img:"./asset/img/materi_8.png",
    intro:"Ini kunci pelajaran kita hari ini, anak-anak: ikatan polar belum tentu membuat molekul polar. Bentuk molekullah yang ikut menentukan!",
    isi:"<p>Kepolaran molekul ditentukan dari <b>jumlah vektor momen dipol</b> semua ikatannya.</p><ul><li>Susunan <b>simetris</b>: vektor saling meniadakan, molekul <b>nonpolar</b> (CO₂, BF₃, CH₄, CCl₄).</li><li>Susunan <b>tidak simetris</b>: vektor tidak habis, molekul <b>polar</b> (H₂O, NH₃, SO₂, CHCl₃).</li><li>Kepolaran memengaruhi kelarutan: zat polar larut dalam pelarut polar, zat nonpolar larut dalam pelarut nonpolar.</li></ul>",
    kuis:{ tanya:"CO₂ berikatan polar, tetapi molekulnya nonpolar karena ...", o:["momen dipolnya saling meniadakan","ikatannya nonpolar"], j:0 } },

  { judul:"9. Kesimpulan", img:"./asset/img/materi_9.png",
    intro:"Hebat, anak-anak! Sekarang rangkumlah Bentuk Molekul sebagai satu alur yang utuh.",
    isi:"<ul><li>Pasangan elektron pada atom pusat <b>saling tolak-menolak</b> dan menempati posisi sejauh mungkin (teori VSEPR).</li><li>Tolakan <b>PEB–PEB &gt; PEB–PEI &gt; PEI–PEI</b>, sehingga PEB memperkecil sudut ikatan.</li><li>Bentuk molekul ditentukan dari <b>notasi AXE</b>: jumlah domain elektron dan jumlah PEB.</li><li>Ikatan polar ditandai oleh momen dipol, yaitu besaran <b>vektor</b>.</li><li>Molekul <b>simetris</b> bersifat nonpolar, sedangkan molekul <b>tidak simetris</b> bersifat polar.</li></ul><p><b>Pesan Ibu:</b> jangan menghafal bentuk molekul satu per satu. Hitunglah dahulu PEI dan PEB, lalu bayangkan pasangan elektron saling menjauh, dan kalian akan menemukan bentuknya sendiri.</p>"
  }
];

/* --- 3) BERMAIN — 10 permainan, 5 ragam interaktivitas --- */
const dataBermain = [
  { t:'jodoh', sub:'Jodohkan Rumus dengan Bentuk', ins:'Anak-anak, jodohkan rumus molekul berikut dengan bentuk molekul yang tepat!',
    pairs:[{n:1,teks:'CO₂ (AX₂)'},{n:2,teks:'H₂O (AX₂E₂)'},{n:3,teks:'CH₄ (AX₄)'}],
    imgs:[{n:1,i:'./asset/img/game_linear.png',name:'Linear'},{n:2,i:'./asset/img/game_bentuk_v.png',name:'Bentuk V'},{n:3,i:'./asset/img/game_tetrahedral.png',name:'Tetrahedral'}] },

  { t:'klik', sub:'Pilih Bentuk Molekul NH₃', ins:'Atom pusat N pada NH₃ memiliki 3 PEI dan 1 PEB. Pilih bentuk molekul NH₃ yang tepat!',
    opsi:[
      {imgPath:'./asset/img/game_piramida.png', t:'Piramida trigonal', b:true, msg:'Benar. Satu PEB menekan tiga PEI sehingga NH₃ berbentuk piramida trigonal.'},
      {imgPath:'./asset/img/game_tetrahedral.png', t:'Tetrahedral', b:false, msg:'Tetrahedral adalah susunan domainnya. Karena ada 1 PEB, bentuk molekulnya piramida trigonal.'},
      {imgPath:'./asset/img/game_segitiga_planar.png', t:'Segitiga planar', b:false, msg:'Segitiga planar untuk 3 domain tanpa PEB, sedangkan NH₃ memiliki 4 domain.'},
      {imgPath:'./asset/img/game_linear.png', t:'Linear', b:false, msg:'Linear untuk 2 domain tanpa PEB atau 5 domain dengan 3 PEB, bukan NH₃.'}
    ] },

  { t:'urut', sub:'Urutkan Langkah Menentukan Bentuk', ins:'Susun langkah menentukan bentuk molekul berikut dengan urutan yang benar!',
    urut:['Tulis struktur Lewis dan tentukan atom pusat','Hitung jumlah PEI dan PEB pada atom pusat','Tentukan notasi AXE dan jumlah domain elektron','Tentukan susunan domain, lalu bentuk molekulnya'] },

  { t:'kumpul', sub:'Kumpulkan Molekul Bentuk V', ins:'Ketuk hanya gambar molekul H₂O yang berbentuk V. Hindari gambar molekul lain!',
    benar:'./asset/img/game_h2o.png',
    salah:['./asset/img/game_co2.png','./asset/img/game_ch4.png'] },

  { t:'sambung', sub:'Sambung Konsep VSEPR', ins:'Pilih lanjutan pernyataan yang paling tepat!',
    hasil:'Pasangan elektron pada atom pusat saling tolak-menolak dan mengatur diri agar tolakannya sekecil mungkin, dengan tolakan terkuat berasal dari PEB.',
    steps:[
      { prev:'Pasangan elektron pada atom pusat saling ...', benar:'tolak-menolak', salah:['tarik-menarik','bergabung menjadi satu'] },
      { prev:'Pasangan elektron mengatur posisi agar tolakan antarpasangan ...', benar:'sekecil mungkin', salah:['sebesar mungkin','tidak ada sama sekali'] },
      { prev:'Tolakan paling kuat berasal dari pasangan elektron ...', benar:'bebas (PEB)', salah:['ikatan (PEI)','ikatan rangkap tiga'] }
    ] },

  { t:'jodoh', sub:'Jodohkan Molekul dengan Sudut Ikatan', ins:'Jodohkan molekul berikut dengan sudut ikatannya!',
    pairs:[{n:1,teks:'CO₂ (linear)'},{n:2,teks:'BF₃ (segitiga planar)'},{n:3,teks:'CH₄ (tetrahedral)'}],
    imgs:[{n:1,i:'./asset/img/game_sudut_180.png',name:'180°'},{n:2,i:'./asset/img/game_sudut_120.png',name:'120°'},{n:3,i:'./asset/img/game_sudut_1095.png',name:'109,5°'}] },

  { t:'klik', sub:'Pilih Molekul Polar', ins:'Pilih SEMUA molekul yang bersifat polar! (jawaban benar lebih dari satu)',
    opsi:[
      {imgPath:'./asset/img/game_h2o.png', t:'H₂O', b:true, msg:'Benar. Bentuk V tidak simetris, sehingga momen dipol ikatan O–H tidak saling meniadakan.'},
      {imgPath:'./asset/img/game_nh3.png', t:'NH₃', b:true, msg:'Benar. Bentuk piramida trigonal dengan 1 PEB membuat NH₃ bersifat polar.'},
      {imgPath:'./asset/img/game_co2.png', t:'CO₂', b:false, msg:'CO₂ linear dan simetris, sehingga momen dipolnya saling meniadakan (nonpolar).'},
      {imgPath:'./asset/img/game_ch4.png', t:'CH₄', b:false, msg:'CH₄ tetrahedral dan simetris, sehingga bersifat nonpolar.'}
    ] },

  { t:'urut', sub:'Urutkan Langkah Menentukan Kepolaran', ins:'Susun langkah menentukan kepolaran molekul berikut dengan urutan yang benar!',
    urut:['Gambar struktur Lewis dan tentukan bentuk molekulnya','Tentukan kepolaran tiap ikatan dari selisih keelektronegatifan','Gambarkan arah momen dipol tiap ikatan sebagai vektor','Jumlahkan vektornya: habis berarti nonpolar, tersisa berarti polar'] },

  { t:'kumpul', sub:'Kumpulkan Molekul Nonpolar CCl₄', ins:'Ketuk hanya gambar molekul CCl₄ yang nonpolar karena simetris. Hindari molekul yang polar!',
    benar:'./asset/img/game_ccl4.png',
    salah:['./asset/img/game_chcl3.png','./asset/img/game_nh3.png'] },

  { t:'sambung', sub:'Sambung Bentuk dan Kepolaran', ins:'Lengkapi hubungan bentuk molekul dengan kepolarannya!',
    hasil:'Molekul dengan ikatan polar yang tersusun simetris bersifat nonpolar, sedangkan susunan yang tidak simetris membuat molekul bersifat polar.',
    steps:[
      { prev:'Pada CO₂, dua ikatan C=O bersifat polar dan tersusun linear sehingga momen dipolnya ...', benar:'saling meniadakan', salah:['saling menjumlahkan','tidak ada karena ikatannya nonpolar'] },
      { prev:'Karena momen dipolnya saling meniadakan, molekul CO₂ bersifat ...', benar:'nonpolar', salah:['polar','ionik'] },
      { prev:'Pada H₂O yang berbentuk V, momen dipol dua ikatan O–H tidak saling meniadakan sehingga H₂O bersifat ...', benar:'polar', salah:['nonpolar','tidak memiliki momen dipol'] }
    ] }
];

/* --- 4) BERLATIH — 10 soal, 5 ragam --- */
const dtLatih = [
  { t:'pg',
    stimulus:'<b>Perhatikan:</b> Atom pusat N pada molekul NH₃ memiliki 3 pasangan elektron ikatan (PEI) dan 1 pasangan elektron bebas (PEB).',
    soal:'Susunan domain elektron dan bentuk molekul NH₃ berturut-turut adalah ...',
    opsi:['tetrahedral dan piramida trigonal','segitiga planar dan segitiga planar','tetrahedral dan tetrahedral','piramida trigonal dan tetrahedral','linear dan bentuk V'], j:0,
    msg:'NH₃ bernotasi AX₃E (4 domain), sehingga susunan domainnya tetrahedral. Karena satu domain adalah PEB, bentuk molekulnya piramida trigonal.' },

  { t:'bs', soal:'Sudut ikatan H–O–H pada H₂O lebih kecil daripada sudut H–C–H pada CH₄ karena H₂O memiliki dua PEB yang tolakannya lebih kuat.', j:true,
    msg:'Pernyataan benar. Dua PEB pada H₂O menekan ikatan O–H sehingga sudutnya ±104,5°, lebih kecil daripada 109,5° pada CH₄ yang tidak memiliki PEB.' },

  { t:'drag_word', soal:'Molekul CO₂ berbentuk <span class="blank-slot" data-id="1">___</span>, dan karena momen dipol ikatan C=O saling meniadakan, molekul CO₂ bersifat <span class="blank-slot" data-id="2">___</span>.', w:['linear','nonpolar','polar','bentuk V'], j:['linear','nonpolar'],
    msg:'CO₂ (AX₂) berbentuk linear dengan sudut 180°. Dua vektor momen dipol yang sama besar dan berlawanan arah saling meniadakan, sehingga CO₂ nonpolar.' },

  { t:'pg_kompleks',
    soal:'Pilih semua pernyataan yang benar tentang teori VSEPR.',
    opsi:['Pasangan elektron pada atom pusat saling tolak-menolak','Tolakan PEB–PEB lebih lemah daripada tolakan PEI–PEI','PEB menempati ruang lebih besar sehingga memperkecil sudut ikatan','Bentuk molekul ditentukan oleh jumlah domain elektron dan jumlah PEB pada atom pusat','Ikatan rangkap dua dihitung sebagai dua domain elektron'], j:[0,2,3],
    msg:'Tolakan PEB–PEB justru yang terkuat, dan ikatan rangkap dihitung sebagai satu domain elektron.' },

  { t:'jodoh', soal:'Jodohkan molekul dengan bentuk molekulnya!',
    pairs:[{n:1,t:'BeCl₂ (AX₂)'},{n:2,t:'SO₂ (AX₂E)'},{n:3,t:'PCl₅ (AX₅)'}],
    imgs:[{n:1,i:'./asset/img/latih_linear.png',name:'Linear'},{n:2,i:'./asset/img/latih_bentuk_v.png',name:'Bentuk V'},{n:3,i:'./asset/img/latih_bipiramida.png',name:'Bipiramida trigonal'}],
    msg:'BeCl₂ memiliki 2 domain tanpa PEB sehingga linear. SO₂ memiliki 3 domain dengan 1 PEB sehingga berbentuk V. PCl₅ memiliki 5 domain tanpa PEB sehingga bipiramida trigonal.' },

  { t:'pg',
    stimulus:'<b>Perhatikan:</b> Ikatan C–Cl bersifat polar karena Cl lebih elektronegatif daripada C.',
    soal:'Molekul berikut yang memiliki ikatan polar tetapi bersifat nonpolar adalah ...',
    opsi:['H₂O','NH₃','CCl₄','CHCl₃','HCl'], j:2,
    msg:'CCl₄ berbentuk tetrahedral simetris. Empat vektor momen dipol C–Cl saling meniadakan, sehingga molekulnya nonpolar. Pada CHCl₃, atom H membuat susunannya tidak simetris sehingga polar.' },

  { t:'bs', soal:'Molekul yang mengandung ikatan polar pasti bersifat polar.', j:false,
    msg:'Pernyataan salah. Kepolaran molekul bergantung pada bentuknya. CO₂, BF₃, dan CCl₄ memiliki ikatan polar, tetapi molekulnya nonpolar karena simetris.' },

  { t:'pg_kompleks',
    stimulus:'Perhatikan molekul-molekul berikut: BF₃, NH₃, SF₆, H₂O, dan CHCl₃.',
    soal:'Pilih semua molekul yang bersifat polar.',
    opsi:['BF₃','NH₃','SF₆','H₂O','CHCl₃'], j:[1,3,4],
    msg:'NH₃ (piramida trigonal), H₂O (bentuk V), dan CHCl₃ (tetrahedral tidak simetris) bersifat polar. BF₃ (segitiga planar) dan SF₆ (oktahedral) simetris sehingga nonpolar.' },

  { t:'drag_word', soal:'Atom pusat S pada SO₂ memiliki 2 PEI dan 1 PEB, sehingga bentuk molekulnya <span class="blank-slot" data-id="1">___</span> dan molekul bersifat <span class="blank-slot" data-id="2">___</span>.', w:['bentuk V','linear','polar','nonpolar'], j:['bentuk V','polar'],
    msg:'SO₂ bernotasi AX₂E sehingga berbentuk V dengan sudut sedikit kurang dari 120°. Susunan tidak simetris membuat momen dipol tidak saling meniadakan, sehingga SO₂ polar.' },

  { t:'jodoh', soal:'Jodohkan molekul dengan bentuk dan kepolarannya!',
    pairs:[{n:1,t:'CH₄'},{n:2,t:'NH₃'},{n:3,t:'BF₃'}],
    imgs:[{n:1,i:'./asset/img/latih_ch4.png',name:'Tetrahedral, nonpolar'},{n:2,i:'./asset/img/latih_nh3.png',name:'Piramida trigonal, polar'},{n:3,i:'./asset/img/latih_bf3.png',name:'Segitiga planar, nonpolar'}],
    msg:'CH₄ (AX₄) dan BF₃ (AX₃) simetris sehingga nonpolar. NH₃ (AX₃E) memiliki 1 PEB, bentuknya tidak simetris, sehingga polar.' }
];
