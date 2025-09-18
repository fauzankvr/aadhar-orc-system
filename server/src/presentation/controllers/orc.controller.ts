import { Request, Response } from "express";
import { StatusCodes } from "../constents/statusCode";
import { MISSING_IMAGES } from "../constents/responseMessage";
import { IocrUseCase } from "../../domain/interfaces/IuseCase";

class orcController {
    constructor(private _orcuseCase: IocrUseCase) { }

    async parseAdhar(req: Request, res: Response) {
        try {
            if (
                !req.files ||
                Array.isArray(req.files) ||
                !(req.files as { [fieldname: string]: Express.Multer.File[] }).frontImage ||
                !(req.files as { [fieldname: string]: Express.Multer.File[] }).backImage
            ) {
                return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json({ error: MISSING_IMAGES });
            }
            const files = req.files as { [fieldname: string]: Express.Multer.File[] };
            const frontImage = files.frontImage[0];
            const backImage = files.backImage[0];
            
            const result = await this._orcuseCase.parseAdhar({
                frontImage: frontImage.path,
                backImage: backImage.path,
            });
            console.log(result)
            res.status(StatusCodes.OK).json(result);
        } catch (error:any) {
            res
              .status(StatusCodes.INTERNAL_SERVER_ERROR)
              .json({status:false, error: error.message });
        }
    }
}

export default orcController;