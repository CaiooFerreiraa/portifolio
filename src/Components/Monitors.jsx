import { useState } from "react";

export default function Monitors() {
  const [imgHorizontal, _setImgHorizontal] = useState();
  const [imgVertical, _setImgVertical] = useState();
  const [urlProject, _setUrlProject] = useState('https://lab-system-frontend-roan.vercel.app');

  return (
    <div className="monitors">
      <button type="button" className="material-symbols-outlined arrow-work">arrow_back_ios</button>
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
      <button type="button" className="material-symbols-outlined arrow-work">arrow_forward_ios</button>
    </div>
  )
}