import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
// import { Await } from "react-router-dom";

function particlebg() {
  async function load(main) {
    await loadBasic(main);
  }
  return <Particles id="tsparticles" init={load} />;
}

export default particlebg;
