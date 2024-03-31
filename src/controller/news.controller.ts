import { Request, Response } from "express";
import News from "../models/News";



export const createNews = async (req: Request, res: Response) => {
    try {
        const { title, description, img_url } = req.body;

        await News.create({ title, description, img_url });

        res.status(201).json({ message: "Successfully created " });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const getNews = async (req: Request, res: Response) => {
    try {

        const data = await News.find();

        res.status(200).json({ message: "Success ", data });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const updateNews = async (req: Request, res: Response) => {
    try {
        const { title, description, img_url } = req.body;

        const { id } = req.params;

        await News.findByIdAndUpdate(id, {
            $set: {
                title, description, img_url
            },
        });

        res.status(201).json({ message: "Successfully Updated " });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};


export const deleteNews = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await News.findByIdAndDelete(id);

        res.status(202).json({ message: "Success Deleted " });

    } catch (error) {
        res.status(500).json({ message: error });
    }
};

