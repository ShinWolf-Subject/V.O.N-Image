import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    try {
        const imagePath = path.join(process.cwd(), 'images/A3cmZp1ocV19I1uriKq0QQ5p7duOnmW807M.png');
        const imageBuffer = fs.readFileSync(imagePath);
        
        res.setHeader('Content-Type', 'image/png');
        res.setHeader('Cache-Control', 'public, max-age=86400');
        res.send(imageBuffer);
    } catch (error) {
        res.status(404).json({ error: 'Image not found' });
    }
          }
