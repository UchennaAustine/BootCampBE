import mongoose, { Document, Schema } from "mongoose";
import { IInventory, IRecipient } from "../utils/interface";

interface IInventoryData extends IInventory, Document{}

const InventorySchema = new Schema<IInventory>({
    bloodType:{
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true,
    },
    expiryDate:{
        type: String,
        required: true,
    }
}, {timestamps: true})

export default mongoose.model<IInventoryData>("inventorys",InventorySchema)