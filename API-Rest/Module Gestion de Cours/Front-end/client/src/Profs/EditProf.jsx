import React from "react";
import axios from "axios";
import "./EditProf.css";
import { useParams , useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";


const EditProf = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [prof, setProf] = useState({
    nom_du_professeur: "",
    code_ue: "",
    heure: "",
    date: ""
  });

  const getProf = useCallback(async () => {
    try {
      console.log("Fetching professor data for ID:", id);
      const response = await axios.get(`http://localhost:8000/api/RenseignementProfs/getProfById/${id}`);
      if (response.status === 201 || response.status === 200) {
        setProf(response.data);
      }
    } catch (error) {
      console.error("There was an error fetching the professor data!", error);
    }
  }, [id]);

  useEffect(() => {
    getProf();
  }, [getProf]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProf({ ...prof, [name]: value });
  };

  const handleUpdateProf = async () => {
    try {
      const response = await axios.put(`http://localhost:8000/api/RenseignementProfs/update_prof/${id}`, prof);
      if (response.status === 201 || response.status === 200) {
        window.alert("Updated successfully.");
        navigate("/FicheProfesseurs.");
      }
    } catch (error) {
      console.error("There was an error updating the professor!", error);
    }
  };

  return (
    <div className="form-container2">
      <h2>Edit Professor</h2>
      <input
        type="text"
        name="nom_du_professeur"
        placeholder="Nom du professeur..."
        value={prof.nom_du_professeur}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="code_ue"
        placeholder="Code UE..."
        value={prof.code_ue}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="heure"
        placeholder="Heure..."
        value={prof.heure}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="date"
        placeholder="Date..."
        value={prof.date}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <button type="button" className="btn btn-success" onClick={handleUpdateProf}>
        Update
      </button>
    </div>
  );
};

/*const EditProf = () =>{
  const { id } = useParams();
  console.log("Editing prof with ID :" , id)
  return (
    <div>
      <h2>Add edit</h2>
    </div>
  )
}*/

export default EditProf;