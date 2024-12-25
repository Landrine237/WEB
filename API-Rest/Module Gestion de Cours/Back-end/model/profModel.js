import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nom_du_professeur:{
        type : String,
        required: true
    },
    code_ue:{
        type : String,
        required: true,
        unique : true
    },
    heure:{
        type : String,
        required: true
    },
    date:{
        type : String,
        required: true
    },
});

export default mongoose.model("fiche_renseignement_professeurs" , userSchema);