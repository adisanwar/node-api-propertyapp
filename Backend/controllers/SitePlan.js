import Siteplan from "../models/siteplan.js";


export const getSiteplan= async (req, res) => {
    try {
        const response = await Siteplan.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSiteplanById = async (req, res) => {
    try {
        const response = await Siteplan.findOne({
            where : {
            id: req.params.id
    }});
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

export const CreateSiteplan= async (req, res) => {
    try {
        await Siteplan.create(req.body);
        res.status(201).json({msg: "Create SiteplanSuccess"});
    } catch (error) {
        console.log(error.message);
    }

}

export const updateSiteplan= async (req, res) => {
    try {
        await Siteplan.update(req.body,{
            where : {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "SiteplanUpdated"});
    } catch (error) {
        console.log(error.message);
    }

}

export const deleteSiteplan= async (req, res) => {
    try {
        const SiteplanId = req.params.id;
        const Siteplan= await Siteplan.findByPk(SiteplanId);

        if (!Siteplan) {
            return res.status(404).json({ msg: "Siteplan not found" });
        }

        await Siteplan.destroy();
        res.status(200).json({ msg: "Siteplandeleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};