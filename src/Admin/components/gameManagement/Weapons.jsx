
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import EditWeapon from "./EditWeapon";

function Weapons() {
  const [weapons, setWeapons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  const handleShow = (weapon) => {
    setSelectedWeapon(weapon);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  useEffect(() => {
    fetchWeapons();
  }, [searchTerm]);

  const fetchWeapons = () => {
    axios
      .get(`https://gamebackend.pythonanywhere.com/api/weapons/?search=${searchTerm}`)
      .then((response) => {
        setWeapons(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weapons:", error);
        setLoading(false);
      });
  };

  const handleDelete = (weaponId) => {
    axios
      .delete(`https://gamebackend.pythonanywhere.com/api/weapon_delete/${weaponId}/`)
      .then(() => {
        // Remove the deleted weapon from the state
        setWeapons(weapons.filter((w) => w.id !== weaponId));
      })
      .catch((error) => {
        console.error(
          "Error deleting weapon:",
          error.response ? error.response.data : error.message
        );
        alert("Error deleting weapon");
      });
  };

  return (
    <div
      className="vh-100 d-flex flex-column "
      style={{ backgroundColor: "black", paddingTop: "10rem" }}
    >
      <div className="w-100 container d-flex justify-content-between">
        <p className="text-light">Weapons</p>
        <Link to={"/admin/overview"}>Back</Link>
      </div>
      {/* Search bar */}
      <div className="w-100 container">
        <div className="p-1 bg-light rounded-0 shadow-sm mb-3">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search Weapon Name"
              aria-describedby="button-addon1"
              className="form-control border-0 bg-light"
              style={{ boxShadow: "none", borderRadius: "1rem" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="input-group-append">
              <button
                id="button-addon1"
                type="button"
                className="btn btn-link text-danger"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-100 container"
        style={{ maxHeight: "35rem", overflowY: "auto" }}
      >
        <Table striped bordered hover variant="dark">
          <thead className="sticky-top">
            <tr>
              <th scope="col">No</th>
              <th scope="col">WeaponId</th>
              <th scope="col">Character</th>
              <th scope="col">Weapon Name</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Created At</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="9" className="text-center">
                  Loading...
                </td>
              </tr>
            ) : weapons.length > 0 ? (
              weapons.map((weapon, index) => (
                <tr key={weapon.id}>
                  <td>{index + 1}</td>
                  <th scope="row">{weapon.id}</th>
                  <td>{weapon.character ? weapon.character.name : "Unknown"}</td>
                  <td>{weapon.name}</td>
                  <td>{weapon.description}</td>
                  <td>
                    <img
                      src={`https://gamebackend.pythonanywhere.com/${weapon.img}`}
                      alt={weapon.name}
                      style={{ width: "100px", height: "auto" }}
                    />
                  </td>
                  <td>{new Date(weapon.created_at).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => handleShow(weapon)}>Edit</button>
                  </td>
                  <td>
                    <div className="d-flex">
                      <button
                        className="btn text-light"
                        onClick={() => handleDelete(weapon.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No Weapons found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      <EditWeapon
        show={showModal}
        handleClose={handleClose}
        weapon={selectedWeapon}
        setWeapons={setWeapons}
        weapons={weapons}
      />
    </div>
  );
}

export default Weapons;
