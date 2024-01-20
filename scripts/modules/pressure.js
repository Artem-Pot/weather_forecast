import { result } from "../scripts.js";

//давление
function pressureFun(){
    const indicatorsPressure = document.querySelector('.indicators__pressure-indicator');
    indicatorsPressure.textContent = Math.round(JSON.stringify(result.current.pressure_mb) * 0.750063755419211);
  }

export { pressureFun };