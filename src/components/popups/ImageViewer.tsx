import Image from "next/image";
import { usePopUpState } from "../../contexts/Popup";
import { PopUpContext } from "../../utils/interfaces";
import Gallery from '../../pages/Galeria/data.json'
import { useState } from "react";

const ImageViewer = ({ props }: { props: { index: number } }) => {
  const { index } = props

  const [ currentShownImageIndex, setCurrentShownImageIndex ] = useState<number>(index)
  const { setShowImageViewer } = usePopUpState() as PopUpContext

  const handleBackgroundClick = () => {
    setShowImageViewer(false)
  }

  const handleImageChange = ( index: number ) => {
    if(index > (Gallery.length - 1) || index < 0) return

    setCurrentShownImageIndex(index)
  }

  const image = Gallery[currentShownImageIndex]

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-screen flex justify-center gap-2 items-center backdrop-blur-sm">
      {image && <Image className="max-w-[30dvh] lg:max-w-[20%] h-auto z-10" src={image} alt="Post do Instagram" width={1080} height={1080}/>}
      <div className="flex items-end gap-2 absolute top-0 w-full h-[100dvh]">
        <button disabled={currentShownImageIndex == 0} onClick={() => handleImageChange(currentShownImageIndex - 1)} className="z-10 h-20 w-[50%] bg-white text-black disabled:text-[#00000050] text-4xl" >&lt;</button>
        <button disabled={currentShownImageIndex == (Gallery.length - 1)} onClick={() => handleImageChange(currentShownImageIndex + 1)} className="z-10 h-20 w-[50%] bg-white text-black disabled:text-[#00000050] text-4xl" >&gt;</button>
      </div>

      <div onClick={handleBackgroundClick} className="w-full h-full absolute top-0 left-0 bg-[#00000050] cursor-pointer"></div>
    </div>
  );
}
 
export default ImageViewer;