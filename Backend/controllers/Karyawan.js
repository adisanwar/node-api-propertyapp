import Karyawan from "../models/karyawan.js";

export const getKaryawan = async (req, res) => {
    try {
        const karyawan = await Karyawan.findAll({
        });
        res.status(200).json(karyawan);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKaryawanById = async (req, res) => {
    try {
        const karyawan = await Karyawan.findOne({
            where : {
            id: req.params.id
    }});
        res.status(200).json(karyawan);
    } catch (error) {
        console.log(error);
    }
}

export const CreateKaryawan = async (req, res) => {
    try {
        await Karyawan.create(req.body);
        res.status(201).json({msg: "Create Karyawan Success"});
    } catch (error) {
        console.log(error.message);
    }

}

export const updateKaryawan = async (req, res) => {
    try {
        await Karyawan.update(req.body,{
            where : {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Karyawan Updated"});
    } catch (error) {
        console.log(error.message);
    }

}

export const deleteKaryawan = async (req, res) => {
    try {
        const KaryawanId = req.params.id;
        const karyawan = await Karyawan.findByPk(KaryawanId);

        if (!karyawan) {
            return res.status(404).json({ msg: "Karyawan not found" });
        }

        await Karyawan.destroy();
        res.status(200).json({ msg: "Karyawan deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};