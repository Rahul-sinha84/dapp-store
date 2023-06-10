import LeftNavigation from "./Left";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__container--first">
          <LeftNavigation />
        </div>
        <div className="dashboard__container--second"></div>
      </div>
    </div>
  );
};
export default Dashboard;
