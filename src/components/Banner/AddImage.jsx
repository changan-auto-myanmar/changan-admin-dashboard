import React, { useState, useRef } from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

const AddImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append("image", selectedImage);

    // Replace the following URL with your image upload endpoint
    fetch("https://your-upload-url.com/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Image uploaded successfully:", data);
        resetImage();
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
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
