import Costumers from "../models/costumer.js";


export const getCostumer = async (req, res) => {
    try {
        const response = await Costumers.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getCostumerById = async (req, res) => {
    try {
        const response = await Costumers.findOne({
            where : {
            id: req.params.id
    }});
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

export const CreateCostumer = async (req, res) => {
    try {
        await Costumers.create(req.body);
        res.status(201).json({msg: "Create Costumer Success"});
    } catch (error) {
        console.log(error.message);
    }

}

export const updateCostumer = async (req, res) => {
    try {
        await Costumers.update(req.body,{
            where : {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Costumer Updated"});
    } catch (error) {
        console.log(error.message);
    }

}

export const deleteCostumer = async (req, res) => {
    try {
        const costumerId = req.params.id;
        const costumer = await Costumers.findByPk(costumerId);

        if (!costumer) {
            return res.status(404).json({ msg: "costumer not found" });
        }

        await Costumers.destroy();
        res.status(200).json({ msg: "costumer deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};