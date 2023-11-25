import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";

const Result = (props) => {
  return (
    <div>
      <Navbar />
      <Card title="Hasil" className="w-[500px] max-w-full">
        <div className="flex flex-col gap-5 my-5 text-[15px]">
          {props.data.map((data) => (
            <>
              <p>Nama : {data.name}</p>
              <p>Email : {data.email}</p>
              <p>Nomor HP : {data.phone}</p>
              <p>Semester Saat Ini : {data.smtrOption}</p>
              <p>IPK Terakhir : {data.IPK}</p>
              <p>Pilihan Beasiswa : {data.schOption}</p>
              <p>Berkas Syarat : {data.file.name}</p>
              <p>Status Ajuan :</p>
            </>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Result;
