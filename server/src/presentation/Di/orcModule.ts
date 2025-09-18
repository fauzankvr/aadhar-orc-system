import orcController from "../controllers/orc.controller"; 
import OrcUseCase from "../../application/uescase/orc.usecase"; 
import { MongoAdhaarRepository } from "../../infrastructure/repositories/adhar.repo"; 
import { AadhaarModel } from "../../infrastructure/database/models/adharModel"; 


export function initOrcModule() {
  const adharRepo = new MongoAdhaarRepository(AadhaarModel);
  const orcUseCase = new OrcUseCase(adharRepo);
  const controller = new orcController(orcUseCase);
  return controller;
}
