export interface IDonor {
    phoneNumber?: string;
    bloodType?: string;
    healthHistory?: string;
    lastDonationDate?: string;

}
export interface IInventory {

    bloodType?: string;
    quantity?: string;
    expiryDate?: string;

}
export interface ITransfusion {

    receipients_id?: string;
    donor_id?: string;
    transfusionDate?: string;
    transfusionVolume?: string;
}
export interface IDonorDonation {
    donor_id?: string;
    donorDate?: string;
    donationVolume?: string;
}

export interface IRecipient{
    phoneNumber?: string;
    name?: string;
    bloodType?: string;
    medicalHistory?: string;
    requiredVolume?: string
}