import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";

const Result = () => {
  return (
    <div>
      <Navbar />
      <Card title="Hasil" className="w-[500px] max-w-full">
        <div className="flex flex-col gap-5 my-5 text-[15px]">
          <p>Nama : </p>
          <p>Email : </p>
          <p>Nomor HP : </p>
          <p>Semester Saa Ini : </p>
          <p>IPK Terakhir : </p>
          <p>Pilihan Beasiswa : </p>
          <p>Berkas Syarat : </p>
          <p>Status Ajuan : </p>
        </div>
      </Card>
    </div>
  );
};

export default Result;
