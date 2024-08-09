import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "./../../axios.js";

export default function BannerCarousel({ show }) {
  const [image, setImage] = useState([]);

  const getImage = async () => {
    try {
      const res = await axios.get("api/v1/banners/cms");
      console.log(res.data.data.banners);
      setImage(res.data.data.banners);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(image);

  useEffect(() => {
    getImage();
  }, [show]);

  return (
    <Carousel className="rounded-xl h-[400px] bg-red-600">
      {image &&
        image.map((item, index) => (
          <div key={index}>
            <img
              src={
                "https://dev-changan-automobile.onrender.com/api/v1/" +
                item.filename
              }
              alt={item.domainName + " - " + item.filename}
              className=""
            />
          </div>
        ))}
    </Carousel>
  );
}
