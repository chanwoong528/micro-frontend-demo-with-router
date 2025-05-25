import { Suspense, useEffect, useRef } from "react";

const AngularWrapperLoader = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AngularWrapper />
    </Suspense>
  );
};

const AngularWrapper = () => {
  const angularRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadAngularApp = async () => {
      if (angularRef.current) {
        angularRef.current.innerHTML = "<app-root></app-root>";
        try {
          const angularApp = await import("angularApp/Module").then((m) => {
            return m.default || m;
          });

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
      <div id="angular-app" ref={angularRef}></div>
    </>
  );
};

export default AngularWrapperLoader;
