import e from "express";
import { IAdhaar } from "../../domain/interfaces/IAdhaar";
import { INVALID_BACK_IMAGE, INVALID_FRONT_IMAGE, PARSING_SUCCESS, TEXT_EXTRACTION_FAILED, UNKNOWN_ERROR } from "../../presentation/constents/responseMessage";
import { isBackPage, isFrontPage } from "../../utils/isAdharData";
import { TesseractService } from "../services/TesseractService";
import { extractBackPage, extractFrontPage } from "./extractData";
import { AadhaarEntity } from "../../domain/entities/adhaar";
import { IAdhaarRepository } from "../../domain/interfaces/IAdharRepo";


class orcUseCase {
    constructor(private aadhaarRepo: IAdhaarRepository) { }
    
    async parseAdhar(images: { frontImage: string; backImage: string }) {
        const { frontImage, backImage } = images;
        
        // Here you would implement the logic to process the images
        const tesseractService = new TesseractService();
        const frontText = await tesseractService.extractText(frontImage);
        const backText = await tesseractService.extractText(backImage);

        // Assuming you want to return the extracted text as a response

        console.log("Front Image Text:", frontText);
        console.log("Back Image Text:", backText);
        // Further processing of the extracted text

        if(!frontText || !backText) {
            throw new Error(TEXT_EXTRACTION_FAILED);
        }

        if(!isFrontPage(frontText)) {
            throw new Error(INVALID_FRONT_IMAGE);
        }

        if(!isBackPage(backText)) {
            throw new Error(INVALID_BACK_IMAGE);
        }

        const data: IAdhaar = {};
        try {
            extractFrontPage(frontText, data);
            extractBackPage(backText, data);

        } catch (error) {
            throw new Error(
              error instanceof Error ? error.message : UNKNOWN_ERROR
            );
        }

        // create an entity for the Aadhaar data
        const adharEntity = new AadhaarEntity({
          Name: data.Name,
          UID: data.UID,
          DOB: data.DOB,
          Gender: data.Gender,
          Address: data.Address,
          Pincode: data.Pincode,
          Age: data.Age,
          maskedMobileNumber: data.maskedMobileNumber,
          isUidSame: data.isUidSame,
          age_band: data.age_band,
        });

        const existing = await this.aadhaarRepo.findByUID(data.UID!);
        if (!existing) {
            await this.aadhaarRepo.save(data);
        }
   

        return {
            message: PARSING_SUCCESS,
            data: data,
        };

    }
}

export default orcUseCase;
