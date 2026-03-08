import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [3, "Product name must be at least 3 characters"],
      maxlength: [100, "Product name cannot exceed 100 characters"]
    },

    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters"]
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"]
    },

    stock: {
      type: Number,
      required: [true, "Stock is required"],
      min: [0, "Stock cannot be negative"],
      default: 0
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      enum: {
        values: ["electronics", "clothing", "books", "other"],
        message: "Category must be one of: electronics, clothing, books, other"
      }
    },

    images: {
      type: [String],
      validate: {
        validator: (v: string) => Array.isArray(v) && v.length > 0,
        message: "At least one product image is required"
      }
    },

    rating: {
      type: Number,
      default: 0,
      min: [0, "Rating cannot be less than 0"],
      max: [5, "Rating cannot be more than 5"]
    },

    numReviews: {
      type: Number,
      default: 0
    },

    isFeatured: {
      type: Boolean,
      default: false
    },

    status: {
      type: String,
      enum: {
        values: ["active", "inactive"],
        message: "Status must be either active or inactive"
      },
      default: "active"
    }
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);