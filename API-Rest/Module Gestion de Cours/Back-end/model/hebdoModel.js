import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    unites_enseignements:{
        type : String,
        required: true,
        unique : true
    },
    support_cours:{
        type : String,
        required: true,
    },
    VH_total_CM:{
        type : String,
        required: true
    },
    VH_total_TD:{
        type : String,
        required: true
    },
    Notes_CC_TE_affiche:{
        type : String,
        required: true
    },
});

export default mongoose.model("fiche_renseignement_hebdomadaire" , userSchema);