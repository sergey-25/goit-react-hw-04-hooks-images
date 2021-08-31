import Loader from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

export const Spinner = () => {
  return (
    <LoaderWrapper>
      <Loader
        type="Oval"
        color="#BA55D3"
        height={100}
        width={100}
        timeout={3000}
      />
    </LoaderWrapper>
  );
};