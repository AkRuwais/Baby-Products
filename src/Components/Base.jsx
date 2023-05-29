import CostomNavbar from "./CostomNavbar";
import Footer from "./Footer";

const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <CostomNavbar />

        {children}
      </div>
      
    </>
  );
};

export default Base;
