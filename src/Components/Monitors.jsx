import { useState } from "react";

export default function Monitors() {
  const [imgHorizontal, _setImgHorizontal] = useState();
  const [imgVertical, _setImgVertical] = useState();
  const [urlProject, _setUrlProject] = useState('https://lab-system-frontend-roan.vercel.app');

  return (
    <div className="monitors">
      <button type="button" className="arrow-work-left">
        <i class="material-symbols-outlined">arrow_circle_left</i>
      </button>
      <a href={urlProject} className="link-work" target="_self">Ver Aplicação</a>
      <div className="monitor m-one">
        <div className="screen">
          <img src={imgVertical} alt="Monitor com código" />
        </div>
      </div>

      <div className="monitor m-two">
        <div className="screen">
          <img src={imgHorizontal} alt="Monitor com website" />
        </div>
      </div>
      <button type="button" className="material-symbols-outlined arrow-work-right">
        <i class="material-symbols-outlined">arrow_circle_right</i>
      </button>
    </div>
  )
}