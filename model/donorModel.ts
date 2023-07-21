import mongoose, { Document, Schema } from "mongoose";
import { IDonor } from "../utils/interface";

interface IDonorData extends IDonor, Document{}

const DonorSchema = new Schema<IDonor>({
    phoneNumber:{
        type: String,
        min: 11,
        required: true
    },
    bloodType:{
        type: String,
        required: true
    },
    healthHistory: {
        type: String,
        required: true
    },
    lastDonationDate:{
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model<IDonorData>("donors",DonorSchema)