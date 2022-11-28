import logo from './logo.svg';
import './App.css';

// All code was developed by Diego Laboy
function App() {
  return (
    <body>
      <nav
        class="nave navbar navbar-expand navbar-dark bg-black d-flex flex-column"
      >
        <div class="row w-100">
          <ul class="d-md-none d-flex flex-row justify-content-between p-3">
            <li>
              <a
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              ><img class="menu" src="./img/menu.png" alt=""
                /></a>
            </li>
            <li>
              <a href="#"><img class="user" src="./img/user(1).png" alt="" /></a>
            </li>
          </ul>
        </div>
        <div
          class="row d-flex flex-row justify-content-center align-items-center w-100"
        >
          <div class="col col-1">
            <li
              class="d-lg-flex d-none align-items-center justify-content-center"
            >
              <a
                class="nav-link"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              ><img class="menu" src="./img/menu.png" alt=""
                /></a>
            </li>
          </div>
          <div class="nave col col-11">
            <div
              class="container d-flex flex-md-row flex-column align-items-center"
            >
              <a
                href="#"
                class="navbar-brand d-flex flex-md-row flex-column active align-items-center nav-fill w-100"
              ><img
                  class="logo img-fluid"
                  src="./img/security-helmet(1).png"
                  alt=""
                />
                <div class="brand-name navbar-text align-self-center text-light">
                  Constructify
                </div>
                <div class="d-md-none d-inline navbar-text align-self-center">
                  <p class="small font-weight-light">
                    Best app to deal with your inventory!
                  </p>
                </div>
              </a>
              <ul
                class="navbar-nav nav-fill d-md-flex d-none w-25 align-items-center"
              >
                <li class="nav-item">
                  <a href="#" class="nav-link"
                  ><img class="user" src="./img/messenger.png" alt=""
                    /></a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link"
                  ><img class="user" src="./img/bell(1).png" alt=""
                    /></a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link"
                  ><img class="user" src="./img/user(1).png" alt=""
                    /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div
        class="offcanvas offcanvas-start bg-gradient"
        data-bs-scroll="true"
        data-bs-backdrop="true"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header d-flex justify-content-between">
          <h5 class="offcanvas-title brand-name" id="offcanvasExampleLabel">
            <img class="logo img-fluid" src="./img/security-helmet.png" alt="" />
            Constructify Inventory
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item p-5"
            >
              <a href="./index.html" class="text-decoration-none text-black">
                <img src="./img/home(1).png" alt="" class="icons" /> Home
              </a>
            </li>
            <li
              class="list-group-item p-5"
            >
              <a
                href="./index.html"
                class="text-decoration-none text-black"
              >
                <img src="./img/folder(1).png" alt="" class="icons" />
                Projects
              </a>
            </li>
            <li
              class="list-group-item p-5"
            >
              <img src="./img/wall-clock.png" alt="" class="icons" />
              Orders Pending
            </li>
            <li
              class="list-group-item p-5"
            >
              <img src="./img/llave-inglesa.png" alt="" class="icons" />
              Materials/Tools Available
            </li>
            <li
              class="list-group-item p-5"
            ></li>
          </ul>
        </div>
      </div>
      <div
        class="content container-fluid rounded-bottom d-flex justify-content-center align-items-center"
      >
        <div
          class="row rowa d-flex flex-lg-row flex-column justify-content-center align-items-center rounded-5"
        >
          <div
            class="wrapper m-5 d-flex flex-row justify-content-center align-items-center"
          >
            <h2 class="d-lg-inline d-none justify-content-start">
              Best app to deal with your inventory!
            </h2>
            <div class="left d-flex flex-column align-items-center">
              <p class="desc text-center">
                Manage your project's tools, materials and personal needs.
              </p>
              <p class="desc text-center">Organized and easy!</p>
              {/* <a href="./Projets.js"> */}
                <button type="button" class="boton btn btn-warning btn-lg">
                  Create Project
                </button>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
