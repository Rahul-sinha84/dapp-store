import LeftNavigation from "./Left";
import RightNavigation from "./Right";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__container--content">
          <LeftNavigation />
          <RightNavigation />
        </div>
        <div className="dashboard__container--second"></div>
      </div>
    </div>
  );
};
export default Dashboard;
