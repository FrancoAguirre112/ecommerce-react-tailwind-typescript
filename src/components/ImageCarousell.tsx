import { useState } from "react";
import Carrousel from "./Carrousel";

type ImageCarouselProps = {
  images: string[] | undefined;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    images?.[0]
  );

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const carousellContent = images?.map((image, index) => (
    <img key={index} src={image} alt={`Slide ${index}`} className="w-full" />
  ));

  return (
    <>
      <div className="hidden lg:flex lg:items-center">
        <div className="mr-4">
          {images?.map((image, index) => (
            <div
              key={index}
              className={`w-16 h-16 mb-2 rounded-lg cursor-pointer ${
                selectedImage === image ? "border-[1px] border-zinc-400" : ""
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className="p-[3px] rounded-lg"
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </div>
        <div>
          <img
            src={selectedImage}
            alt="Selected"
            className="min-w-[25rem] max-w-[25rem] h-[43rem] object-cover"
          />
        </div>
      </div>

      <div className="lg:hidden  w-full">
        <Carrousel content={carousellContent} />
      </div>
    </>
  );
};

export default ImageCarousel;
