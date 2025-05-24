import React, { Suspense, useEffect, useRef, useState } from "react";

// const AngularApp = React.lazy(() => import("angularApp/Module"));
import AngularApp from "angularApp/Module";
const AngularWrapperLoader = () => {
  //   console.log("AngularWrapperLoader>> ", AngularApp);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AngularWrapper />
    </Suspense>
  );
};

const AngularWrapper = () => {
  console.log("AngularWrapperLoader");
  const angularRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadAngularApp = async () => {
      if (angularRef.current) {
        angularRef.current.innerHTML = "<app-root></app-root>";
        try {
          const angularApp = await import("angularApp/Module").then((m) => {
            return m.default || m;
          });
        //   const AngularAppComponent = React.createElement(angularApp);
          angularApp.bootstrap(angularRef.current);
        } catch (error) {
          console.error("Angular on Mount [error]:", error);
        }
      }
    };
    loadAngularApp();
    return () => {
      if (angularRef.current) {
        angularRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <>
      <h1>angular wrapper</h1>
      <div ref={angularRef}></div>
    </>
  );
};

export default AngularWrapperLoader;
