import React, { useEffect, useRef } from "react";

function VueWrapper() {
  const vueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadVueApp = async () => {
      if (vueRef.current) {
        const vueApp = await import("vueApp/main").then((m) => {
          console.log("m", m);
          return m.default || m;
        });
        await vueApp.mount(vueRef.current);
      }
    };
    loadVueApp();
    return () => {
      if (vueRef.current) {
        vueRef.current.innerHTML = "";
      }
      //   const unmountVueApp = async () => {
      //     if (vueRef.current) {
      //       const vueApp = await import("vueApp/main").then((m) => {
      //         return m.default || m;
      //       });
      //       vueApp.unmount();
      //     }
      //     unmountVueApp();
      //   };
    };
  }, []);

  return <div id="vue-app" ref={vueRef}></div>;
}

export default VueWrapper;
