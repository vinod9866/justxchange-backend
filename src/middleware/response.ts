import { Router } from 'express';

const router = Router();

export const attachSwaggerResponses = (req: any, res: any, next: any) => {
    /* #swagger.responses[400] = {
      description: 'Bad Request',
      schema: { $ref: "#/components/schemas/ErrorResponse" }
  } */

    /* #swagger.responses[500] = {
      description: 'Internal Server Error',
      schema: { $ref: "#/components/schemas/ErrorResponse" }
  } */
    next();
};

// Apply it to all routes
router.use(attachSwaggerResponses);
