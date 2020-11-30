import got from 'got';
import sharp from 'sharp';
import { Request, Response } from 'express';

export default class ImageController {
  async resize(req: Request, res: Response) {
    try {
      const defaultSize = 50;
      const { url, width, height } = req.query as {
        url: string;
        width?: string;
        height?: string;
      };

      if (!url) {
        return res.status(400).json({ message: 'Missing url query param' });
      }

      const buff: Buffer = await got(url as string).buffer();
      const resizedBuff: Buffer = await sharp(buff)
        .resize(Number(width) || defaultSize, Number(height) || defaultSize)
        .toBuffer();
      res.write(resizedBuff, 'binary');
      res.end(null, 'binary');
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
