import CostomNavbar from "./CostomNavbar";

const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <CostomNavbar />

      {children}
    </div>
  );
};

export default Base;
