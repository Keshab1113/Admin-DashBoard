import React from "react";
import Box1 from "../../components/AnalyticalComponents/Box1";
import Box2 from "../../components/AnalyticalComponents/Box2";
import Box3 from "../../components/AnalyticalComponents/Box3";
import Box4 from "../../components/AnalyticalComponents/Box4";
import { Helmet } from "react-helmet";


const Analytical = () => {
  

  return (
    <div className=" mt-[10vh] bg-slate-100 dark:bg-slate-950 h-full gap-4 flex sm:flex-row flex-col justify-center items-start px-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Analytical Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Box2/>
      <div className=" sm:w-[70%] w-[100%] h-fit my-4 gap-4 flex flex-col">
        <Box1 />
        <Box3 />
        <Box4 />
      </div>
      
    </div>
  );
};

export default Analytical;
