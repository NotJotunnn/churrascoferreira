import { usePopUpState } from "../../contexts/Popup";
import { PopUpContext } from "../../utils/interfaces";
import ImageViewer from "./ImageViewer";
import SideBar from "./SideBar";

const PopUps = () => {
  const { showImageViewer, currentImageIndex } = usePopUpState() as PopUpContext

  return (
    <>
      <SideBar />
      { showImageViewer && <ImageViewer props={{ index: currentImageIndex }} /> }
    </>
  );
}
 
export default PopUps;