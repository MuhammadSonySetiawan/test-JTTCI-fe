import React, { useState } from "react";

function Edit(params) {
    console.log(params)
  const [idUpdate, setIdUpdate] = useState();
  const [nameUpdate, setNameUpdate] = useState(null);
  const [idCardUpdate, setIdCardUpdate] = useState(null);
  const [jabatanUpdate, setJabatanUpdate] = useState(null);

  // Edit
  console.log(idUpdate);
  const handleUpdate = () => {
    // axios
    //   .put(`http://localhost:8000/jabatan/${idUpdate}`, {
    //     idcard: idCardUpdate,
    //     name: nameUpdate,
    //     jabatan: jabatanUpdate,
    //   })
    //   .then((response) => {
    //     console.log("Data berhasil diperbarui:", response);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };
  return (
    <div className="container">
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
          <label for="exampleInputJabatan" class="form-label">
            Jabatan
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputJabatan"
            onChange={(e) => setJabatanUpdate(e.target.value)}
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => {
            handleUpdate();
            // setIdUpdate(item.id);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Edit;
