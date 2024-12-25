import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProfPage.css";
import AddProf from "./AddProf";
import { FaUserPlus } from "react-icons/fa";
import {toast} from "react-toastify";

const ProfPage = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  //const [editData , setEditData] = useState(null);

  useEffect(() => {
    getProfs();
  }, []);

  const getProfs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/RenseignementProfs/getAllProfs");
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const handleAddProf = (newProf) => {
    const exists = data.some((prof) => prof.code_ue === newProf.code_ue);
    if (exists) {
      window.alert("Already exists.");
    } else {
      setData([...data, newProf]);
      setShowForm(false);
      window.alert("Added successfully.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure that you want to delete this information?")) {
      try {
        const response = await axios.delete(`http://localhost:8000/api/RenseignementProfs/delete_prof/${id}`);
        if (response.status === 201 || response.status === 200)  {
          toast.success(response.data);
          getProfs();
        }
      } catch (error) {
        console.error('Erreur lors de la suppression du professeur:', error);
        toast.error('Erreur lors de la suppression du professeur');
      }
    }
  };


  return (
    <div style={{ marginTop: "10px" }}>
      <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "20px", marginLeft: "110px" , fontFamily:"Georgia, 'Times New Roman', Times, serif" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
          style={{ display: "flex", alignItems: "center" }}
        >
          <FaUserPlus style={{ marginRight: "8px" }} /> Add Infos
        </button>
      </div>
      {showForm && <AddProf onAddProf={handleAddProf} />}

      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Id</th>
            <th style={{ textAlign: "center" }}>Nom du professeur</th>
            <th style={{ textAlign: "center" }}>Code UE</th>
            <th style={{ textAlign: "center" }}>Heure de cours</th>
            <th style={{ textAlign: "center" }}>Date de cours</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.nom_du_professeur}</td>
              <td>{item.code_ue}</td>
              <td>{item.heure}</td>
              <td>{item.date}</td>
              <td>
                <Link to = {`/update/${item._id}` }>
                  <button className = "btn btn-edit">Edit</button>
                </Link>
                <button className="btn btn-delete" onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>  
      </table>
    </div>
  );
};

export default ProfPage;




























/*import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./ProfPage.css";
import AddProf from "./AddProf";
import {FaUserPlus} from "react-icons/fa";

const ProfPage = () => {
  const [data, setData] = useState([]);
  const [showForm , setShowForm] = useState(false)//etat pour gerer l'affichage du formulaire

  useEffect(() => {
    getProfs();
  }, []);

  const getProfs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/RenseignementProfs/getAllProfs");
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  console.log("data=>", data);



  const handleAddProf = (newProf) => {
    setData([...data , newProf]);
    setShowForm(false)
  };

  return  (

    <div style={{ marginTop: "5px" }}>
      <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "20px" , marginLeft : "210px" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
          style={{ display: "flex", alignItems: "center" }}
        >
          <FaUserPlus style={{ marginRight: "8px" }} /> Add Infos
        </button>
      </div>
      {showForm && <AddProf onAddProf={handleAddProf} />}


      <table className  = "styled-table">
        <thead>
          <tr>
            <th style = {{textAlign : "center"}}>Id.</th>
            <th style = {{textAlign : "center"}}>Nom du professeur.</th>
            <th style = {{textAlign : "center"}}>code UE.</th>
            <th style = {{textAlign : "center"}}>Heure de cours.</th>
            <th style = {{textAlign : "center"}}>Date de cours.</th>
            <th style = {{textAlign : "center"}}>Effectuer une actions.</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item , index) =>{
            return (
              <tr key = {index}>
                <th scope = "row">{index + 1}</th>
                <td>{item.nom_du_professeur}</td>
                <td>{item.code_ue}</td>
                <td>{item.heure}</td>
                <td>{item.date}</td>
                <td>
                  <Link to = {`/update/${item.id}`}>
                    <button className="btn btn-edit"> Edit </button>
                  </Link>
                  <button className="btn btn-delete"> Delete </button>
                  <Link to = {`/update/${item.id}`}>
                    <button className="btn btn-view"> View </button> 
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  );
};*/

















/*const ProfPage = () => {
  return (
    <div className="profTable">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope = "col">Identifiant.</th>
            <th scope = "col">Nom du professeur.</th>
            <th scope = "col">Code UE.</th>
            <th scope = "col">Heure.</th>
            <th scope = "col">Date.</th>
            <th scope = "col">Actions.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mr ALI</td>
            <td>INF 438</td>
            <td>10h30</td>
            <td>08/10/2024</td>
            <td>Update | Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}*/
//export default ProfPage;