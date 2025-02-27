import mongoose from 'mongoose'

const PaymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    paymentType: {
      type: String,
      enum: ['BOOK_PURCHASE'],
      required: true,
    },
    amount: Number,
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    status: { type: String, enum: ['Success', 'Failed'], default: 'Failed' },
  },
  { timestamps: true },
)

export const Payment = mongoose.model('Payment', PaymentSchema)
