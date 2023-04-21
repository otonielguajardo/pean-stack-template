import { Router, Request, Response } from 'express';
const router = Router();

router.get('/', async (req: Request, res: Response) => {
  res.json({ success: true, data: 'ok' });
});

export default router;