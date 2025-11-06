import { useState } from "react";

export default function Monitors() {
  const [imgHorizontal, setImgHorizontal] = useState();
  const [imgVertical, setImgVertical] = useState();
  const [urlProject, setUrlProject] = useState('https://lab-system-frontend-roan.vercel.app');

  return (
    <div className="monitors">
      <button type="button" className="material-symbols-outlined arrow-work">arrow_back_ios</button>
      <a href={urlProject} className="link-work" target="_self">Ver aplicação</a>
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