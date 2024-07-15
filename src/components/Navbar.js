// import React from "react";
// import { Link } from "react-router-dom";
// export default function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
//         <div className="container-fluid">
//           <Link className="navbar-brand fs-2 fst-italic" to="/">
//             UserBrowser
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            UserBrowser
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
