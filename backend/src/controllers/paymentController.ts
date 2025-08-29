

// controllers/paymentController.ts
import { Request, Response } from 'express';
import  prisma  from '../config/db';


export const getPayments = async (req: Request, res: Response) => {
    try {
        const payments = await prisma.payment.findMany({ where: { propertyId: req.params.id } });
        res.json(payments);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch payments' });
    }
};


export const depositFunds = async (req: Request, res: Response) => {
    try {
        const { fromAddress, amount } = req.body;
        const payment = await prisma.payment.create({ data: { propertyId: req.params.id, fromAddress, amount } });
        res.status(201).json(payment);
    } catch (err) {
        res.status(500).json({ error: 'Failed to deposit funds' });
    }
};


export const distributeFunds = async (req: Request, res: Response) => {
    try {
        await prisma.payment.updateMany({ where: { propertyId: req.params.id, distributed: false }, data: { distributed: true } });
        res.json({ message: 'Funds distributed' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to distribute funds' });
    }
};