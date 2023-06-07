"use client";
import { connect } from "react-redux";

const Home = ({ state }) => {
  return <div className="main">Hello this is from dapp-store</div>;
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Home);
