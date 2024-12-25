import Prof from "../model/profModel.js"


export const create_prof = async(req, res) => {
    try {
        const profData = new Prof(req.body);
        const { code_ue } = req.body; // req.body pour extraire code_ue

        const profExist = await Prof.findOne({ code_ue }); // Vérification par code_ue
        if (profExist) {
            return res.status(400).json({ message: "Already exist." });
        }

        const savedProf = await profData.save();
        res.status(200).json(savedProf);
    } catch (error) {
        console.error(error); //erreur dans la console pour le débogage
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const fetch = async (req , res) =>{
    try {
        const profs = await Prof.find();
        if(profs.length == 0){
            return res.status(404).json({message : "Not Found"});
        }
        res.status(200).json(profs);
    }catch (error){
        res.status(500).json({error : "Internal Server error."});
    }
};

export const getProfById = async(req , res) =>{
    try{
        const id = req.params.id;
        const profExist = await Prof.findById(id);
        if(!profExist){
            return res.status(404).json({message : "Not Found."})
        }
        res.status(200).json(profExist);
    }catch (error){
        res.status(500).json({error : "Internal Server error."});
    }
};


export const update_prof = async(req , res) =>{
    try{
        const id = req.params.id;
        const profExist = await Prof.findOne({_id:id});
        if(!profExist){
            return res.status(404).json({message : "Not Found."})
        }
        const updateProf = await Prof.findByIdAndUpdate(id , req.body,{new:true});
        res.status(201).json(updateProf);
    }catch (error){
        res.status(500).json({error : "Internal Server error."});
    }
};

export const delete_prof = async (req , res) => {
    try{
        const id = req.params.id;
        const profExist = await Prof.findOne({_id:id});
        if(!profExist){
            return res.status(404).json({message : "Not Found."})
        }
        await Prof.findByIdAndDelete(id);
        res.status(201).json({message : "Deleted successfully."});
    }catch (error){
        res.status(500).json({error : "Internal Server error."});
    }
};



/*export const fetch = async(req , res) =>{
    try{
        return res.json("World.");
    }catch (error){
        res.status(500).json({error : "Internal Server error"});
    }
};*/