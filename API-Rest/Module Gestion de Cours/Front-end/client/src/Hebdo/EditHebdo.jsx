import React from "react";
import axios from "axios";
import "./EditHebdo.css";
import { useParams , useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";


const EditHebdo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [hebdo, setHebdo] = useState({
        unites_enseignements: "",
        support_cours: "",
        VH_total_CM: "",
        VH_total_TD: "",
        Notes_CC_TE_affiche: ""
    });
  
    const getHebdo = useCallback(async () => {
      try {
        console.log("Fetching professor data for ID:", id);
        const response = await axios.get(`http://localhost:8000/api/RenseignementHebdo/getHebdoById/${id}`);
        if (response.status === 201 || response.status === 200) {
          setHebdo(response.data);
        }
      } catch (error) {
        console.error("There was an error fetching the professor data!", error);
      }
    }, [id]);
  
    useEffect(() => {
      getHebdo();
    }, [getHebdo]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setHebdo({ ...hebdo, [name]: value });
    };
  
    const handleUpdateHebdo = async () => {
      try {
        const response = await axios.put(`http://localhost:8000/api/RenseignementHebdo/update_hebdo/${id}`, hebdo);
        if (response.status === 201 || response.status === 200) {
          window.alert("Updated successfully.");
          navigate("/FicheHebdomadaire.");
        }
      } catch (error) {
        console.error("There was an error updating the professor!", error);
      }
    };
  
    return (
      <div className="form-container2">
        <h2>Edit Informations.</h2>
        <input
        type="text"
        name="unites_enseignements"
        placeholder="unites d'enseignements..."
        value={hebdo.unites_enseignements}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="support_cours"
        placeholder="Support de cours..."
        value={hebdo.support_cours}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="VH_total_CM"
        placeholder="volume total horaire cours magistraux..."
        value={hebdo.VH_total_CM}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="VH_total_TD"
        placeholder="volume total horaire travaux diriges..."
        value={hebdo.VH_total_TD}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="Notes_CC_TE_affiche"
        placeholder="notes de cc et te affichees..."
        value={hebdo.Notes_CC_TE_affiche}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <button type="button" className="btn btn-success" onClick={handleUpdateHebdo}>
        OK
      </button>
    </div>
  );
};
  


/*const EditHebdo = () =>{
  const { id } = useParams();
  console.log("Editing prof with ID :" , id)
  return (
    <div>
      <h2>Add edit</h2>
    </div>
  )
}*/

export default EditHebdo;