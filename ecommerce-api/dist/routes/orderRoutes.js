"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Order_1 = __importDefault(require("../models/Order"));
const router = express_1.default.Router();
// Create Order
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = new Order_1.default(req.body);
    yield order.save();
    res.status(201).json(order);
}));
// Get All Orders
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield Order_1.default.find().populate('user').populate('products.product');
    res.json(orders);
}));
exports.default = router;
