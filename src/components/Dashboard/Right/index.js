import AddPassword from "./AddPassword";

const RightNavigation = () => {
  return (
    <div className="right-navigation">
      <div className="right-navigation__container">
        <div className="right-navigation__container--add">
          <AddPassword />
        </div>
      </div>
    </div>
  );
};

export default RightNavigation;
