import React, { useState } from "react";
import { storage, db } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

const Post = () => {
  const [formData, setFormData] = useState({
    brand: "",
    year: "",
    kmDriven: "",
    title: "",
    description: "",
    price: "",
    name: "",
    phone: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) {
      alert("Please upload an image");
      return;
    }

    setLoading(true);

    try {
      const imageRef = ref(storage, `products/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, "products"), {
        ...formData,
        imageUrl,
        createdAt: new Date(),
      });

      alert("Product added successfully!");
      setFormData({
        brand: "",
        year: "",
        kmDriven: "",
        title: "",
        description: "",
        price: "",
        name: "",
        phone: "",
      });
      setImage(null);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full">
      <div className="h-16 bg-slate-100 ">
        <img src="" alt="" />
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold text-center ">POST YOUR AD</h1>
        <form
          onSubmit={handleSubmit}
          className="border border-black rounded-sm mt-4 p-3 mx-80 "
        >
          <h1 className="font-semibold text-xl">SELECTED CATEGORY</h1>
          <p className="mt-2 text-sm">
            Bikes / Motorcycles <span>Change</span>
          </p>
          <hr className="my-3" />
          <div className="mt-2 p-4">
            <h1 className="font-semibold text-xl">INCLUDE SOME DETAILS</h1>
            <div className="block mt-2">
              <label>Brand *</label>
              <br></br>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="border-2 border-slate-400 rounded-md w-[27em] py-2 px-1"
                required
              />
            </div>
            <div className="block mt-2">
              <label>Year *</label>
              <br></br>
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className="border-2 border-slate-400 rounded-md w-[27em] py-2 px-1"
                required
              />
            </div>
            <div className="block mt-2">
              <label>Km Driven *</label>
              <br></br>
              <input
                type="text"
                name="kmDriven"
                value={formData.kmDriven}
                onChange={handleInputChange}
                className="border-2 border-slate-400 rounded-md w-[27em] py-2 px-1"
                required
              />
            </div>
            <div className="block mt-2">
              <label>Add Title *</label>
              <br></br>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="border-2 border-slate-400 rounded-md w-[27em] py-2 px-1"
                required
              />
            </div>
            <div className="block mt-2">
              <label>Description *</label>
              <br></br>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="border-2 border-slate-400 rounded-md w-[27em] py-2 px-1 h-24"
                required
              ></textarea>
            </div>
            <hr className="my-3" />
            <h1 className="font-semibold text-xl">SET A PRICE</h1>
            <div className="block mt-2">
              <label>Price *</label>
              <br></br>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="border-2 border-slate-400 rounded-md w-[27em] py-2 px-1"
                required
              />
            </div>
            <hr className="my-3" />
            <h1 className="font-semibold text-xl">UPLOAD PHOTOS</h1>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-4"
              required
            />
            <hr className="my-3" />
            <h1 className="font-semibold text-xl">REVIEW YOUR DETAILS</h1>
            <div className="block mt-2">
              <label>Name *</label>
              <br></br>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border-2 border-slate-400 rounded-md w-[27em] py-2 px-1"
                required
              />
            </div>
            <div className="block mt-4">
              <label>Mobile Phone Number *</label>
              <br></br>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="border-2 border-slate-400 rounded-md w-[27em] py-2 px-1"
                required
              />
            </div>
            <hr className="my-3" />
            <button
              type="submit"
              className="bg-slate-300 px-7 py-3 rounded-md mt-4"
              disabled={loading}
            >
               {loading ? "Posting..." : "Post Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
