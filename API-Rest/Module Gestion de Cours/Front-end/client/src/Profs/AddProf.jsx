import React, { useState } from "react";
import axios from "axios";
import "./AddProf.css";

const AddProf = ({ onAddProf }) => {
  const [newProf, setNewProf] = useState({
    nom_du_professeur: "",
    code_ue: "",
    heure: "",
    date: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProf({ ...newProf, [name]: value });
  };

  const handleAddProf = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/RenseignementProfs/create_prof", newProf);
      if (response.status === 200) {
        onAddProf(response.data);
        setNewProf({
          nom_du_professeur: "",
          code_ue: "",
          heure: "",
          date: ""
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
        name="nom_du_professeur"
        placeholder="Nom du professeur..."
        value={newProf.nom_du_professeur}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="code_ue"
        placeholder="Code UE..."
        value={newProf.code_ue}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="heure"
        placeholder="Heure..."
        value={newProf.heure}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="date"
        placeholder="Date..."
        value={newProf.date}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <button type="button" className="btn btn-success" onClick={handleAddProf}>
        OK
      </button>
    </div>
  );
};

export default AddProf;


















/*import React, { useState } from "react";
import axios from "axios";
import "./AddProf.css"

const AddProf = ({ onAddProf }) => {
  const [newProf, setNewProf] = useState({
    nom_du_professeur: "",
    code_ue: "",
    heure: "",
    date: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProf({ ...newProf, [name]: value });
  };

  const handleAddProf = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/RenseignementProfs//create_prof", newProf);
      if (response.status === 200) {
        onAddProf(response.data);
        setNewProf({
          nom_du_professeur: "",
          code_ue: "",
          heure: "",
          date: ""
        });
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="form-container" style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="nom_du_professeur"
        placeholder="Nom du professeur"
        value={newProf.nom_du_professeur}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="code_ue"
        placeholder="Code UE"
        value={newProf.code_ue}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="heure"
        placeholder="Heure"
        value={newProf.heure}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="date"
        placeholder="Date"
        value={newProf.date}
        onChange={handleInputChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <button type="button" className="btn btn-success" onClick={handleAddProf}>
        OK
      </button>
    </div>
  );
};

export default AddProf;*/