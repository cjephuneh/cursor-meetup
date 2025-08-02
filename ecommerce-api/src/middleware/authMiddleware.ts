import jwt from 'jsonwebtoken';

const authMiddleware = (req: { headers: { [x: string]: string; }; user: any; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }, next: () => void) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).send('Access denied.');

    jwt.verify(token, 'secret', (err: any, user: any) => {
        if (err) return res.status(403).send('Invalid token.');
        req.user = user;
        next();
    });
};

export default authMiddleware;