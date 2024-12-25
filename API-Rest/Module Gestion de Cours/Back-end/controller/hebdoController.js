import Hebdo from "../model/hebdoModel.js"

export const create_hebdo = async(req, res) => {
    try {
        const hebdoData = new Hebdo(req.body);
        const { unites_enseignements } = req.body; // req.body pour extraire unites_enseignements

        const hebdoExist = await Hebdo.findOne({ unites_enseignements }); // Vérification par unites_enseignements
        if (hebdoExist) {
            return res.status(400).json({ message: "Already exist." });
        }
        const savedHebdo = await hebdoData.save();
        res.status(200).json(savedHebdo);
    } catch (error) {
        console.error(error); //erreur dans la console pour le débogage
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const fetch = async (req , res) =>{
    try {
        const hebdo = await Hebdo.find();
        if(hebdo.length == 0){
            return res.status(404).json({message : "Not Found"});
        }
        res.status(200).json(hebdo);
    }catch (error){
        res.status(500).json({error : "Internal Server error."});
    }
};

export const getHebdoById = async(req , res) =>{
    try{
        const id = req.params.id;
        const hebdoExist = await Hebdo.findById(id);
        if(!hebdoExist){
            return res.status(404).json({message : "Not Found."})
        }
        res.status(200).json(hebdoExist);
    }catch (error){
        res.status(500).json({error : "Internal Server error."});
    }
};

export const update_hebdo = async(req , res) =>{
    try{
        const id = req.params.id;
        const hebdoExist = await Hebdo.findOne({_id:id});
        if(!hebdoExist){
            return res.status(404).json({message : "Not Found."})
        }
        const updateHebdo = await Hebdo.findByIdAndUpdate(id , req.body,{new:true});
        res.status(201).json(updateHebdo);
    }catch (error){
        res.status(500).json({error : "Internal Server error."});
    }
};


export const delete_hebdo = async (req , res) => {
    try{
        const id = req.params.id;
        const hebdoExist = await Hebdo.findOne({_id:id});
        if(!hebdoExist){
            return res.status(404).json({message : "Not Found."})
        }
        await Hebdo.findByIdAndDelete(id);
        res.status(201).json({message : "Deleted successfully."});
    }catch (error){
        res.status(500).json({error : "Internal Server error."});
    }
};

/*export const fetch = async(req , res) =>{
    try{
        return res.json("World heb.");
    }catch (error){
        res.status(500).json({error : "Internal Server error"});
    }
};*/