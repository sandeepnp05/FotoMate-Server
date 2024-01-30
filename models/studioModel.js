import mongoose from "mongoose";

const studioSchema = new mongoose.Schema({
  vendorId: {
    type: mongoose.Types.ObjectId,
    ref: "Vendor",
    required: true, 
  },
  studioName: {
    type: String,
    required: true,
  },
  city:{
    type: String,
    required: true,
  },
  cities: [{
    type: String,
    required: true,
  }],
  description:{
    type:String,
    
  },
  isBlocked: {
      type: Boolean,
      default: false,
      required: true,
  },
  isVerified: {
      type: Boolean,
      default: false,
      required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  galleryImages: [{
    type: String,
    required: true,
}
  ],
  categories:[{
    type: String,
  }]
 
});

const Studio = mongoose.model("Studio", studioSchema);

export default Studio;
