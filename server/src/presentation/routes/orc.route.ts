import express from "express";
import orcController from "../controllers/orc.controller";
import upload from "../../utils/multer";
import orcUseCase from "../../application/uescase/orc.usecase"; 
import { MongoAdhaarRepository } from "../../infrastructure/repositories/adhar.repo";

const orcRouter = express.Router();

const adharRepo = new MongoAdhaarRepository();
const orcUseCaseInstance = new orcUseCase(adharRepo);
const controller = new orcController(orcUseCaseInstance);

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
