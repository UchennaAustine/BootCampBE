import mongoose, { Document, Schema } from "mongoose";
import { IDonorDonation } from "../utils/interface";

interface IDonorDonationData extends IDonorDonation, Document{}

const DonorDonationSchema = new Schema<IDonorDonation>({
    donationVolume:{
        type: String,
        required: true
    },
    donor_id:{
        type: String,
        required: true
    },
    donorDate: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model<IDonorDonationData>("donors",DonorDonationSchema)