import express from "express";
import upload from "../../utils/multer";
import { initOrcModule } from "../Di/orcModule";

// import orcController from "../controllers/orc.controller";
// import orcUseCase from "../../application/uescase/orc.usecase"; 
// import { MongoAdhaarRepository } from "../../infrastructure/repositories/adhar.repo";
// import { AadhaarModel } from "../../infrastructure/database/models/adharModel";

// const adharRepo = new MongoAdhaarRepository(AadhaarModel);
// const orcUseCaseInstance = new orcUseCase(adharRepo);
// const controller = new orcController(orcUseCaseInstance);

const orcRouter = express.Router();

const controller = initOrcModule();

orcRouter.post(
  "/parse-adhar",
  upload.fields([
    { name: "frontImage", maxCount: 1 },
    { name: "backImage", maxCount: 1 },
  ]),
  async (req, res) => {
    controller.parseAdhar(req, res);
  }
);

export default orcRouter;
