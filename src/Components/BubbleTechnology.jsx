export default function BubbleTechnology({iconClassName, languageName, bgColor}) {
  return (
    <div className="bubble-technology">
      <div style={{backgroundColor: bgColor}}>
        <i className={iconClassName}></i>
      </div>
      <span style={{color: bgColor}}>{languageName}</span>
    </div>
  )
}