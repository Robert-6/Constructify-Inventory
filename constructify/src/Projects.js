import './App.css';

// All code was developed by Diego Laboy
function Projects() {
    return (
        <body class="d-flex flex-row">
            <nav
                class="navega navbar sticky-top sticky-bottom position-sticky navbar-expand navbar-dark bg-black d-flex flex-column h-100"
            >
                <ul class="list-group list-group-flush">
                    <li
                        class="list-group-item bg-black p-3 border-bottom border-light"
                    >
                        <a href="./index.html" class="text-decoration-none text-black">
                            <img class="helme" src="./img/security-helmet(1).png" alt="" />
                        </a>
                    </li>
                    <li
                        class="list-group-item bg-black p-4"
                    >
                        <a href="./index.html" class="text-decoration-none text-black">
                            <img src="./img/home.png" alt="" class="saidbal" />
                        </a>
                    </li>
                    <li
                        class="list-group-item bg-black p-4"
                    >
                        <a href="./new-projects.html" class="text-decoration-none text-black">
                            <img src="./img/folder(3).png" alt="" class="saidbal" />
                        </a>
                    </li>
                    <li
                        class="list-group-item bg-black p-4"
                    >
                        <img src="./img/wall-clock(1).png" alt="" class="saidbal" />
                    </li>
                    <li
                        class="list-group-item bg-black p-4"
                    >
                        <img src="./img/llave-inglesa(1).png" alt="" class="saidbal" />
                    </li>
                    <li
                        class="list-group-item bg-black p-4"
                    >
                        <img src="" alt="" class="saidbal" />
                    </li>

                    <li
                        class="list-group-item bg-black p-4"
                    >
                        <img src="./img/user(2).png" alt="" class="saidbal" />
                    </li>
                    <li
                        class="list-group-item bg-black p-4"
                    >
                        <img src="./img/setting.png" alt="" class="saidbal" />
                    </li>
                    <li
                        class="list-group-item bg-black p-4"
                    >
                        <img src="./img/delete(1).png" alt="" class="saidbal" />
                    </li>
                </ul>
            </nav>
            <div class="container d-flex flex-row w-75 mt-3">
                <div class="row d-flex flex-row">
                    <div class="col">
                        <div
                            class="row d-flex flex-row bg-light p-4 mt-2 rounded-4 border-1 shadow"
                        >
                            <div class="col">
                                <h3>Welcome Back, Juan!</h3>
                            </div>
                            <div class="col">
                                <div class="input-group">
                                    <div class="input-group-append bg-warning rounded-start p-1">
                                        <span
                                        ><img
                                                class="lupa m-2"
                                                src="./img/magnifying-glass.png"
                                                alt=""
                                            /></span>
                                    </div>
                                    <input
                                        type="text"
                                        class="searchbar form-control border-0"
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4 d-flex flex-row">
                            <h2 class="m-3">Recent Files</h2>
                            <div class="col d-flex flex-row gy-3 justify-content-around">
                                <div
                                    class="card rounded-4 bg-light border-0 shadow"
                                >
                                    <div class="h d-flex justify-content-between">
                                        <img
                                            class="card-img-top w-25 m-3"
                                            src="./img/blank-page(1).png"
                                            alt="Card image cap"
                                        />
                                        <a href="">
                                            <img class="options m-3" src="./img/more.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">File Name</h5>
                                        <p class="card-text caption">2 MB</p>
                                    </div>
                                </div>
                                <div
                                    class="card rounded-4 bg-light border-0 shadow"
                                >
                                    <div class="h d-flex justify-content-between">
                                        <img
                                            class="card-img-top w-25 m-3"
                                            src="./img/folder(1).png"
                                            alt="Card image cap"
                                        />
                                        <a href="">
                                            <img class="options m-3" src="./img/more.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Folder Name</h5>
                                        <p class="card-text caption">20 MB - 12 items</p>
                                    </div>
                                </div>
                                <div
                                    class="card rounded-4 bg-light border-0 shadow"
                                >
                                    <div class="h d-flex justify-content-between">
                                        <img
                                            class="card-img-top w-25 m-3"
                                            src="./img/blank-page(1).png"
                                            alt="Card image cap"
                                        />
                                        <a href="">
                                            <img class="options m-3" src="./img/more.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">File Name</h5>
                                        <p class="card-text caption">2 MB</p>
                                    </div>
                                </div>
                                <div
                                    class="card rounded-4 bg-light border-0 shadow"
                                >
                                    <div class="h d-flex justify-content-between">
                                        <img
                                            class="card-img-top w-25 m-3"
                                            src="./img/folder(1).png"
                                            alt="Card image cap"
                                        />
                                        <a href="">
                                            <img class="options m-3" src="./img/more.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Folder Name</h5>
                                        <p class="card-text caption">20 MB - 12 items</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-4">
                            <h2 class="m-3">All Files</h2>

                            <div class="col">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Date Modified</th>
                                            <th scope="col">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <img
                                                    class="imgTable m-3"
                                                    src="./img/blank-page(1).png"
                                                    alt=""
                                                />
                                                File Name
                                            </th>
                                            <td class="tableText">11/25/2022</td>
                                            <td class="tableText">File</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <img
                                                    class="imgTable m-3"
                                                    src="./img/folder(1).png"
                                                    alt=""
                                                />
                                                Folder Name
                                            </th>
                                            <td class="tableText">11/25/2022</td>

                                            <td class="tableText">Folder</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <img
                                                    class="imgTable m-3"
                                                    src="./img/blank-page(1).png"
                                                    alt=""
                                                />
                                                File Name
                                            </th>
                                            <td class="tableText">11/25/2022</td>

                                            <td class="tableText">File</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="col d-flex flex-column h-75 align-content-center justify-content-center mt-3"
            >
                <div
                    class="col w-100 bg-light rounded-4 shadow d-flex flex-row p-4 mt-2 m-1 d-flex align-items-center text-start mb-5"
                >
                    <div class="ima">
                        <img class="imgTable m-2" src="./img/user(3).png" alt="" />
                    </div>
                    <div class="info d-flex align-items-start flex-column">
                        <p class="name mb-0">Juan Perez</p>
                        <p class="tableText mb-0">juanperez12@gmail.com</p>
                    </div>
                </div>
                <div class="col d-flex flex-column w-75 h-100">
                    <button class="boton btn-warning border-0 p-4 m-3 mt-5 shadow">
                        New Project File
                    </button>
                    <button class="boton btn-dark border-0 p-4 m-3 shadow">
                        New Project Folder
                    </button>
                </div>
            </div>
        </body>
    );
}

export default Projects;