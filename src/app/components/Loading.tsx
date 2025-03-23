import { BarLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <BarLoader color="#ffffff" width="100%" height={2} />
    </div>
  );
};

export default Loading;
