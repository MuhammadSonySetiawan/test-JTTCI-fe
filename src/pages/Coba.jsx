import React, { useState } from "react";
import axios from "axios";

function UserForm() {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const validateInput = () => {
    if (username.trim() === "") {
      setErrorMessage("Username tidak boleh kosong");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateInput();

    if (!isValid) {
      return;
    }

    axios
      .post("URL_API_KAMU", { username })
      .then((response) => {
        // Handle success
        console.log(response.data);
        // Bersihkan form
        setUsername("");
      })
      .catch((error) => {
        // Handle error
        console.error("Ada kesalahan: ", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleInputChange}
      />
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      <button type="submit">Kirim</button>
    </form>
  );
}

export default UserForm;
