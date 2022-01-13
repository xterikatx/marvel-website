import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Triangle } from "react-loader-spinner";

export function Loader({ visible, color="#c70909" }) {
  return (
    <Triangle 
      arialLabel="loading-indicator"
      color={color}
      secondaryColor="#222222"
      visible={visible}
    />
  );
}
