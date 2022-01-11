import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Triangle } from "react-loader-spinner";

export function Loader({ visible }) {
  return (
    <Triangle 
      arialLabel="loading-indicator"
      color="#c70909"
      secondaryColor="#222222"
      visible={visible}
    />
  );
}
