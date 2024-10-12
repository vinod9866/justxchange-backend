import { ManagedUpload } from 'aws-sdk/clients/s3';
import s3 from '../../config/aws.config';

// Initialize S3Service
export const s3Service = {
    // Upload image method
    uploadImage: async (
        file: Express.Multer.File,
    ): Promise<ManagedUpload.SendData> => {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME || '', // Your bucket name
            Key: `uploads/${Date.now()}_${file.originalname}`, // File name in S3
            Body: file.buffer, // File content
            // ACL: 'public-read', // Make it public or private as per your needs
            ContentType: file.mimetype, // Ensure the content type is set
        };

        return s3.upload(params).promise();
    },
};
