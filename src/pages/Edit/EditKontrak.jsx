import React, { useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Navbar from "../../components/Navbar";

function EditKontrak() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [nameUpdate, setNameUpdate] = useState(null);
  const [idCardUpdate, setIdCardUpdate] = useState(null);
  const [kontrakUpdate, setKontrakUpdate] = useState(null);

  // Edit
  const handleUpdate = (e) => {
    axios
      .put(`http://localhost:8000/kontrak/${id}`, {
        idcard: idCardUpdate,
        name: nameUpdate,
        kontrak: kontrakUpdate,
      })
      .then((response) => {
        console.log("Data berhasil diperbarui:", response);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  return (
    <>
      <Navbar />
      <form className="container">
        <h1 className="d-flex justify-content-center align-items-center">
          Edit Data
        </h1>
        <form className="input-post d-flex flex-column align-content-center justify-content-center w-100 mb-5">
          <div class="mb-3">
            <label for="exampleInputName1" class="form-label">
              Nama
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName1"
              aria-describedby="nameHelp"
              onChange={(e) => setNameUpdate(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputNumber" class="form-label">
              Id Card
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputNumber"
              onChange={(e) => setIdCardUpdate(e.target.value)}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputKontak" class="form-label">
              Kontak
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputKontak"
              onChange={(e) => setKontrakUpdate(e.target.value)}
            />
          </div>

          <a
            href={"/kontrak"}
            type="submit"
            class="btn btn-primary"
            onClick={() => {
              handleUpdate();
            }}
          >
            Simpan
          </a>
        </form>
      </form>
    </>
  );
}

export default EditKontrak;
