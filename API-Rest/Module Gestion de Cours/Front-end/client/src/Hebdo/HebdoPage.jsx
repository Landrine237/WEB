import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
import { FaUserPlus } from "react-icons/fa";
import axios from "axios"
import AddHebdo from "./AddHebdo";
import "./HebdoPage.css";


const HebdoPage = () => {
    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
      getHebdo();
    }, []);
  
    const getHebdo = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/RenseignementHebdo/getAllHebdo");
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error("There was an error!", error);
      }
    };

    
  const handleAddHebdo = (newHebdo) => {
    const exists = data.some((hebdo) => hebdo.unites_enseignements === newHebdo.unites_enseignements);
    if (exists) {
      window.alert("Already exists.");
    } else {
      setData([...data, newHebdo]);
      setShowForm(false);
      window.alert("Added successfully.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure that you want to delete this information?")) {
      try {
        const response = await axios.delete(`http://localhost:8000/api/RenseignementHebdo/delete_hebdo/${id}`);
        if (response.status === 201 || response.status === 200)  {
          toast.success(response.data);
          getHebdo();
        }
      } catch (error) {
        console.error('Erreur lors de la suppression des informations:', error);
        toast.error('Erreur lors de la suppression des informations');
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
      {showForm && <AddHebdo onAddHebdo={handleAddHebdo} />}

      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Id.</th>
            <th style={{ textAlign: "center" }}>Unites d'enseignements.</th>
            <th style={{ textAlign: "center" }}>Support de cours.</th>
            <th style={{ textAlign: "center" }}>VH total CM.</th>
            <th style={{ textAlign: "center" }}>VH total TD.</th>
            <th style={{ textAlign: "center" }}>Notes de CC et TE affichees.</th>
            <th style={{ textAlign: "center" }}>Actions.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.unites_enseignements}</td>
              <td>{item.support_cours}</td>
              <td>{item.VH_total_CM}</td>
              <td>{item.VH_total_TD}</td>
              <td>{item.Notes_CC_TE_affiche}</td>
              <td>
                <Link to = {`/updateHebdo/${item._id}` }>
                  <button className = "btn btn-edit2">Edit</button>
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















/*const HebdoPage = () => {
      return (
        <div>HomePage</div>
      )
    }*/
export default HebdoPage;