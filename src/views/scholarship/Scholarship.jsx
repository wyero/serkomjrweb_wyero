import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";

const Scholarship = () => {
  return (
    <div>
      <Navbar />
      <Card title="jenis pilihan beasiswa">
        <ol className="mr-20">
          <li className="font-700 text-[17px]">
            Beasiswa Akademik
            <div className="font-normal text-[15px] ml-5">
              <p>Syarat Penerimaan Beasiswa</p>
              <ul className="list-disc ml-10 flex flex-col gap-1 mt-1 mb-5">
                <li>
                  Calon penerima beasiswa adalah mahasiswa aktif Universitas
                  pada tiap tahun angkatan di setiap program studi yang memiliki
                  prestasi akademik berupa Indeks Prestasi Semester (IPS)
                  tertinggi
                </li>
                <li>
                  Bagi Mahasiswa Universitas penerima Beasiswa Mahasiswa Baru
                  Prestasi Akademik yang telah menjalani studi di Universitas
                  dengan syarat IPK > 3,00
                </li>
              </ul>
            </div>
          </li>
          <li className="font-700 text-[17px]">
            Beasiswa Non Akademik{" "}
            <div className="font-normal text-[15px] ml-5">
              <p>Syarat Penerimaan Beasiswa</p>
              <ul className="list-disc ml-10 flex flex-col gap-1 mt-1 mb-5">
                <li>
                  Juara minimal tingkat provinsi/regional mewakili Universitas
                </li>
                <li>Rekomendasi dari pelatih UKM sebagai bahan pertimbangan</li>
                <li>
                  Bersedia mengikuti seleksi teknis yang diselenggarakan oleh
                  kemahasiswaan
                </li>
                <li>
                  Bersedia menandatangani kontrak beasiswa dengan pihak
                  Kemahasiswaaan didampingi orang tua/wali.
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </Card>
    </div>
  );
};

export default Scholarship;
