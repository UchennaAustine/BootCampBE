import mongoose, { Document, Schema } from "mongoose";
import { IRecipient } from "../utils/interface";

interface IRecipientData extends IRecipient, Document{}

const RecipientSchema = new Schema<IRecipient>({
    phoneNumber:{
        type: String,
        min: 11,
        required: true
    },
    bloodType:{
        type: String,
        required: true
    },
    medicalHistory: {
        type: String,
        required: true,
    },
    name:{
        type: String
    },
    requiredVolume:{
        required: true,
        type: String
        
    }
}, {timestamps: true})

export default mongoose.model<IRecipientData>("recipients",RecipientSchema)