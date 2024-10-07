import { Request, Response } from "express";
import S3Service from "../services/s3.service";
import { createResponse } from "../utils/response.formatter";

class ImageController{

    private s3Service: S3Service;

    constructor(){
        this.s3Service = new S3Service();
    }

    public uploadImage = async (req: Request, res: Response) => {
        try {
            if (!req.file) {
                const response = createResponse(true, 'No file uploaded');
                return res.status(400).json(response);
            }
            const uploadResult = await this.s3Service.uploadImage(req.file);
            const response = createResponse(false, 'File uploaded successfully', { imageUrl: uploadResult.Location });
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error uploading image:', error);
            const response = createResponse(true, 'Error uploading file', undefined, error);
            return res.status(500).json(response);
        }
    }

}

export default ImageController;