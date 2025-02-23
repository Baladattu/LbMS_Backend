import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, lowercase: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number },
    userType: {
      type: String,
      enum: ['ADMIN', 'USER', 'SUPER_ADMIN'],
      default: 'USER',
    },
    profileImage: { type: String },
    myBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    myCart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    myWishList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    fileId: { type: String },
  },
  { timestamps: true },
)

const User = mongoose.model('User', userSchema)

export default User
