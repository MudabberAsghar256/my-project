import Navbar from "../navbar";
export const MainComponents = ({ children }) => {
  return (
    <div className="w-full ">
      <Navbar />
      <div className="pt-[70px] bg-white  w-full ">{children}</div>
    </div>
  );
};
