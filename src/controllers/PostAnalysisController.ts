import { Request, Response } from "express";
import { PostAnalysisRepo } from "../repository/PostAnalysisRepo";

class PostAnalysisController {
    protected analysis_repo : PostAnalysisRepo;

    constructor() {
        this.analysis_repo = new PostAnalysisRepo();
    }

    async create(){
        try{
            //Make use of the service here
        } catch (error){
            throw new Error("Message Queue is not updated")
        }
    }

    async findById(req: Request, res: Response) {
        try {
            let id = parseInt(req.params["id"]);
            const post  = await this.analysis_repo.retrieveById(id);
            
            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched note by id!",
            });
        }catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Cannot find User"
            });
        }
    }
}

export default new PostAnalysisController();