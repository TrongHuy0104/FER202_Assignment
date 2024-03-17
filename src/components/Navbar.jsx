import Logo from "./Logo";

function Navbar() {
    return (
        <div className="header">
            <div className="container">
                <div className="top-bar">
                    <Logo />

                    <div className="top-act">
                        <div className="top-act__user">
                            <img
                                src="./src/assets/img/avatar.jpg"
                                alt=""
                                className="top-act__avatar"
                            />
                            <div className="dropdown">
                                <div className="dropdown__inner">
                                    <ul className="dropdown__list">
                                        <li className="dropdown__item">
                                            <span className="dropdown__text-wrap">
                                                <svg
                                                    className="icon"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1em"
                                                    viewBox="0 0 448 512"
                                                >
                                                    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                                                </svg>
                                                <span className="dropdown__text">
                                                    User
                                                </span>
                                            </span>
                                        </li>
                                        <div className="act-dropdown__separate"></div>
                                        <li className="dropdown__item">
                                            <a
                                                href="user?action=log-out"
                                                className="dropdown__link"
                                            >
                                                <img
                                                    className="icon"
                                                    alt=""
                                                    aria-hidden="true"
                                                    loading="lazy"
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljg0MzggNi42NTYyNUwxMS4zNDM4IDIuMTU2MjVDMTEuMTU2MiAxLjk2ODc1IDEwLjgxMjUgMS45Njg3NSAxMC42MjUgMi4xNTYyNUMxMC40Mzc1IDIuMzQzNzUgMTAuNDM3NSAyLjY4NzUgMTAuNjI1IDIuODc1TDE0LjI4MTIgNi41SDUuNUM1LjIxODc1IDYuNSA1IDYuNzUgNSA3QzUgNy4yODEyNSA1LjIxODc1IDcuNSA1LjUgNy41SDE0LjI4MTJMMTAuNjI1IDExLjE1NjJDMTAuNDM3NSAxMS4zNDM4IDEwLjQzNzUgMTEuNjg3NSAxMC42MjUgMTEuODc1QzEwLjgxMjUgMTIuMDYyNSAxMS4xNTYyIDEyLjA2MjUgMTEuMzQzOCAxMS44NzVMMTUuODQzOCA3LjM3NUMxNS45Mzc1IDcuMjgxMjUgMTYgNy4xNTYyNSAxNiA3QzE2IDYuODc1IDE1LjkzNzUgNi43NSAxNS44NDM4IDYuNjU2MjVaTTUuNSAxM0gyLjVDMS42NTYyNSAxMyAxIDEyLjM0MzggMSAxMS41VjIuNUMxIDEuNjg3NSAxLjY1NjI1IDEgMi41IDFINS41QzUuNzUgMSA2IDAuNzgxMjUgNiAwLjVDNiAwLjI1IDUuNzUgMCA1LjUgMEgyLjVDMS4wOTM3NSAwIDAgMS4xMjUgMCAyLjVWMTEuNUMwIDEyLjkwNjIgMS4wOTM3NSAxNCAyLjUgMTRINS41QzUuNzUgMTQgNiAxMy43ODEyIDYgMTMuNUM2IDEzLjI1IDUuNzUgMTMgNS41IDEzWiIgZmlsbD0iIzgwOEI5QSIvPgo8L3N2Zz4K"
                                                />
                                                Log out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
