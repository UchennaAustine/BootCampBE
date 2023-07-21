import mongoose, { Document, Schema } from "mongoose";
import { ITransfusion } from "../utils/interface";

interface ITransfusionData extends ITransfusion, Document{}

const TransfusionSchema = new Schema<ITransfusion>({
    receipients_id:{
        type: String,
        required: true
    },
    donor_id: {
        type: String,
        required: true,
    },
    transfusionDate:{
        type: String,
        required: true,
    },
    transfusionVolume:{
        type: String,
        required: true,
    }
}, {timestamps: true})

export default mongoose.model<ITransfusionData>("transfusions",TransfusionSchema)