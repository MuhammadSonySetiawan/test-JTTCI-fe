import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

function Jabatan() {
  const [data, setData] = useState([]);
  const [name, setName] = useState(null);
  const [idCard, setIdCard] = useState(null);
  const [jabatan, setJabatan] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  // Get Data
  const fetchData = () => {
    axios
      .get(`http://localhost:8000/jabatan`)
      .then((res) => {
        setData(res.data.payload.datas);
      })
      .catch((err) => console.log(err));
  };

  // Delete
  const hendleDelete = (e) => {
    axios
      .delete(`http://localhost:8000/jabatan/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // Post
  const handleSubmitPost = (e) => {
    axios
      .post(`http://localhost:8000/jabatan`, {
        idcard: idCard,
        name: name,
        jabatan: jabatan,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <h1 className="d-flex justify-content-center align-items-center mt-2 mb-4">
        Halaman Jabatan
      </h1>
      <div className="container">
        {/* input jabatan start */}
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
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setIdCard(e.target.value)}
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
              onChange={(e) => setJabatan(e.target.value)}
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            onClick={handleSubmitPost}
          >
            Submit
          </button>
        </form>
        {/* input  jabatan end */}
        
        <form action="">
          <table class="table mt-3">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama</th>
                <th scope="col">Id Card</th>
                <th scope="col">Jabatan</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, key) => (
                <tr key={key}>
                  <th scope="row">{key + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.idcard}</td>
                  <td>{item.jabatan}</td>
                  <td>
                    <Link
                      to={`/edit-jabatan/${item.id}`}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <a
                      href="/jabatan"
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        hendleDelete(item.id);
                      }}
                    >
                      Hapus
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Jabatan;
