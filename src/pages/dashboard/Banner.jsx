import React, { useState } from "react";
import BannerCarousel from "../../components/Banner/Carousel";
import { Button } from "@material-tailwind/react";
import AddImage from "../../components/Banner/AddImage";

function Banner() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div className={show ? "opacity-60" : "opacity-100"}>
        <BannerCarousel show={show} />
      </div>
      <div className="mt-2">
        <Button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Cancel" : "Add Image"}
        </Button>
      </div>
      {show && (
        <div className="absolute bottom-[50%] left-[50%] translate-y-[50%] translate-x-[-50%]">
          <AddImage show={() => setShow(false)} />
        </div>
      )}
    </div>
  );
}

export default Banner;
