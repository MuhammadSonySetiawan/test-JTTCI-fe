import React from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            JTTCI
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" aria-current="page" href="/">
                Home
              </a>
              <a class="nav-link" href="/karyawan">
                Karyawan
              </a>
              <a class="nav-link" href="/kontrak">
                Kontrak
              </a>
              <a class="nav-link" href="/jabatan">
                Jabatan
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
