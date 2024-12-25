import React, { useState } from "react";
import axios from "axios";
import "./AddHebdo.css";

const AddHebdo = ({ onAddHebdo }) => {
  const [newHebdo, setNewHebdo] = useState({
    unites_enseignements: "",
    support_cours: "",
    VH_total_CM: "",
    VH_total_TD: "",
    Notes_CC_TE_affiche: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHebdo({ ...newHebdo, [name]: value });
  };

  const handleAddHebdo = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/RenseignementHebdo/create_hebdo", newHebdo);
      if (response.status === 200) {
        onAddHebdo(response.data);
        setNewHebdo({
            unites_enseignements: "",
            support_cours: "",
            VH_total_CM: "",
            VH_total_TD: "",
            Notes_CC_TE_affiche: "",
        });
      }
    } catch (error) {
      if(error.response && error.response.status === 400){
        window.alert("Already exists.");
      }else{
        console.error("There was an error!", error);
      }
    }
  };

  return (
    <div className="form-container" style={{ marginBottom: "20px" , marginTop: "2opx" }}>
      <input
        type="text"
        name="unites_enseignements"
        placeholder="unites d'enseignements..."
        value={newHebdo.unites_enseignements}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="support_cours"
        placeholder="Support de cours..."
        value={newHebdo.support_cours}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="VH_total_CM"
        placeholder="volume total horaire cours magistraux..."
        value={newHebdo.VH_total_CM}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="VH_total_TD"
        placeholder="volume total horaire travaux diriges..."
        value={newHebdo.VH_total_TD}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="Notes_CC_TE_affiche"
        placeholder="notes de cc et te affichees..."
        value={newHebdo.Notes_CC_TE_affiche}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <button type="button" className="btn btn-success" onClick={handleAddHebdo}>
        OK
      </button>
    </div>
  );
};

export default AddHebdo;