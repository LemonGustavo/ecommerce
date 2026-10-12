import express from 'express';
import { PrismaClient } from '@prisma/client';
import { EtherealMailProvider } from './providers/EtherealMailProvider';
import { PrismaOrderRepository } from './repositories/PrismaOrderRepository';
import { NotificationService } from './services/NotificationService';
import { OrderService } from './services/OrderService';
import { OrderController } from './controllers/OrderController';

const app = express();
app.use(express.json());
app.set('json spaces', 2);

const prisma = new PrismaClient();
const mailProvider = new EtherealMailProvider();
const orderRepository = new PrismaOrderRepository(prisma);
const notificationService = new NotificationService(mailProvider);
const orderService = new OrderService(orderRepository, notificationService);
const orderController = new OrderController(orderService);

app.post('/orders', (req, res) => orderController.processOrder(req, res));

export default app;