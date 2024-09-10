import { Document, model, Schema } from "mongoose";

interface IProduct extends Document {
  name: string;
  price: number;
  category: string;
}

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

const product = model<IProduct>("Product", productSchema);
export default product;
