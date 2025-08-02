"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ product: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Product' }, quantity: { type: Number, required: true } }],
    total: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
});
const Order = mongoose_1.default.model('Order', orderSchema);
exports.default = Order;
