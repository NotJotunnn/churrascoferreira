import Image from "next/image";
import { usePopUpState } from "../../../contexts/Popup";
import { PopUpContext } from "../../../utils/interfaces";

const Post = ({ props = { image: '', index: 0 } }: { props: { image: string, index: number } }) => {
  const { image, index } = props

  const { setCurrentImageIndex, toggleShowImageViewer } = usePopUpState() as PopUpContext

  const handleClick = () => {
    setCurrentImageIndex(index )

    toggleShowImageViewer()
  }

  return (
    <div onClick={handleClick} className="max-w-[300px] max-h-[300px] w-[30vw] h-[30vw] overflow-hidden lg:hover:cursor-pointer">
      <Image className="object-cover h-full lg:hover:scale-125 lg:transition-transform lg:duration-400" src={image} width={1080} height={1080} alt="Post do Instagram"/>
    </div>
  );
}
 
export default Post;