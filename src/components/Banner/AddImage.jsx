import React, { useState, useRef } from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import axios from "./../../axios";
import { toast } from "sonner";

const AddImage = ({ show }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const sendMessage = () => {
    show();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) return;
    console.log(selectedImage);

    const formData = {
      image: selectedImage,
    };
    console.log(formData);
    try {
      const res = await axios.post("api/v1/banners", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Image Upload Complete");
      sendMessage();
    } catch (error) {
      toast.error(error.response.data.message);
    }

    // Replace the following URL with your image upload endpoint
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const resetImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    fileInputRef.current.value = null; // Reset the file input
  };

  return (
    <Card className="max-w-sm mx-auto mt-10">
      <CardBody>
        <Typography variant="h5" className="mb-4">
          Upload an Image
        </Typography>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <Button
          variant="outlined"
          color="blue"
          fullWidth
          onClick={triggerFileInput}
        >
          Choose Image
        </Button>

        {imagePreview && (
          <div className="mt-4">
            <img
              src={imagePreview}
              alt="Selected"
              className="w-full h-auto rounded-lg"
            />
            <Button variant="text" color="red" fullWidth onClick={resetImage}>
              Cancel
            </Button>
          </div>
        )}
      </CardBody>

      <CardFooter className="pt-0">
        <Button
          variant="filled"
          color="green"
          fullWidth
          onClick={handleUpload}
          disabled={!selectedImage}
        >
          Upload
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AddImage;
