import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import Button from "../../components/button/Button";
// import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [IPK, setIPK] = useState(3.4);
  const [smtrOption, setSmtrOption] = useState("");
  const [schOption, setSchOption] = useState("");
  const [file, setFile] = useState("");
  // const navigate = useNavigate();

  const changeFileHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const semesterOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
  ];

  const scholarshipOptions = [
    { value: "Beasiswa Akademik", label: "Beasiswa Akademik" },
    { value: "Beasiswa Non Akademik", label: "Beasiswa Non Akademik" },
  ];

  const isFormValid = () => {
    return (
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      smtrOption !== "" &&
      schOption !== "" &&
      file !== ""
    );
  };

  const registerHandler = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      const data = {
        name,
        email,
        phone,
        IPK,
        smtrOption,
        schOption,
        file,
      };
      props.onAddRegister(data);
      // navigate("/result");
    } else {
      alert("Semua input wajib diisi");
    }
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setFile("");
    setPhone("");
    setSchOption("");
    setSmtrOption("");
  };
  return (
    <div>
      <Navbar />
      <Card title="daftar beasiswa" className="w-[670px] max-w-full">
        <p className="capitalize font-600">registrasi beasiswa</p>
        <form
          // onSubmit={registerHandler}
          className="flex flex-col gap-3 my-5 mx-7"
        >
          <Input
            label="masukan nama"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="masukan email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="nomor HP"
            id="phone"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Select
            default="Pilih"
            id="semester saat ini"
            label="semester saat ini"
            name="semester saat ini"
            value={smtrOption}
            onChange={(e) => setSmtrOption(e.target.value)}
            options={semesterOptions}
          />
          <Input
            label="IPK"
            id="ipk"
            type="number"
            value={IPK}
            disabled
            onChange={(e) => setIPK(e.target.value)}
            className="bg-gray-200 text-gray-200"
          />
          <Select
            default="Pilihan Beasiswa"
            id="pilihan beasiswa"
            label="pilihan beasiswa"
            name="pilihan beasiswa"
            value={schOption}
            onChange={(e) => setSchOption(e.target.value)}
            options={scholarshipOptions}
          />
          <Input
            label="upload berkas syarat"
            id="file"
            type="file"
            onChange={changeFileHandler}
          />
          <div className="flex items-center justify-center gap-10">
            <Button
              name="daftar"
              disabled={!isFormValid()}
              onClick={registerHandler}
            />
            <Button
              name="batal"
              className="bg-red-500"
              onClick={deleteHandler}
            />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Register;
