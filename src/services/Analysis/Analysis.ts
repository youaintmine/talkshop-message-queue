import { PostAnalysisRepo } from "../../repository/PostAnalysisRepo";

class Analysis {
    protected post_analyse_repo : PostAnalysisRepo;

    constructor() {
        this.post_analyse_repo = new PostAnalysisRepo();
    }
}