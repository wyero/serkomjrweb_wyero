import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";

const Result = (props) => {
  return (
    <div>
      <Navbar />
      <Card title="Hasil" className="w-[500px] max-w-full">
        <div>
          {props.data.map((data, index) => (
            <div
              className="flex flex-col gap-5 my-5 text-[15px]"
              key={index + 1}
            >
              <p>Nama : {data.name}</p>
              <p>Email : {data.email}</p>
              <p>Nomor HP : {data.phone}</p>
              <p>Semester Saat Ini : {data.semester}</p>
              <p>IPK Terakhir : {data.ipk}</p>
              <p>Pilihan Beasiswa : {data.scholarship}</p>
              <p>Berkas Syarat : {data.file}</p>
              <p>Status Ajuan : Belum Diverifikasi</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Result;
