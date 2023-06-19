
import { useState } from "react";

function useMyhook() {
  const [activate, setactivate] = useState(false)
  const [toogle, settoogle] = useState(false)
  const [responsive, setresponsive] = useState(false)

  const handleactivate = () => {
    setactivate(!activate)
  }

  const hadletoogle = () => {
    settoogle(!toogle);
  };

  const hadletoogleresponsive = () => {
    setresponsive(!responsive)

  };


  return {
    activate, handleactivate, hadletoogle, toogle, hadletoogleresponsive, responsive,
  }
}

export default useMyhook