import { Request, Response } from 'express';
import { s3Service } from '../services/s3.service';
import { exceptionMsger } from '../utils/exceptionMsger';

const imageController = {
    uploadImage: async (req: Request, res: Response) => {
        try {
            if (!req.file) {
                const response = 'No file uploaded';
                return res.status(400).json(exceptionMsger(response));
            }

            const uploadResult = await s3Service.uploadImage(req.file);
            const response = {
                message: 'File uploaded successfully',
                imageUrl: uploadResult.Location,
            };
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error uploading image:', error);
            const response = 'Error uploading file';
            return res.status(500).json(exceptionMsger(response));
        }
    },
};

export default imageController;
