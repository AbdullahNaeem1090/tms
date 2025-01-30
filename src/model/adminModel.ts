import mongoose, { Document, Schema } from "mongoose";

export interface IAdmin extends Document {
  username: string;
  password: string;
  email: string;
  isVerified:boolean,
  OTP?: string,
  otpExpiry?: Date,
  verifyToken?: string,
  verifyTokenExpiry?: Date,
}

const AdminSchema: Schema = new Schema<IAdmin>({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  OTP: String,
  otpExpiry: Date,
});

const AdminModel =mongoose.models.admins || mongoose.model<IAdmin>("admins", AdminSchema);

export default AdminModel;
