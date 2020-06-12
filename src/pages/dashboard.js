import React from "react";
import FirstTab from "../components/FirstTab";
import SecondTab from "../components/SecondTab";
import Layout from "../components/Layout";
import Model from "../components/Model";
import { Router } from "@reach/router";

export default () => {
  return (
    <>
      <Layout>
        <Router>
          <Model path="/dashboard/login" />
          <FirstTab path="/dashboard/first" />
          <SecondTab path="/dashboard/second" />
        </Router>
      </Layout>
    </>
  );
};
