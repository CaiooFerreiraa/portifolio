export default function BubbleTechnology({iconClassName, languageName, bgColor}) {
  return (
    <div className="bubble-technology" style={{backgroundColor: bgColor}}>
      <i className={iconClassName}></i>
      <span>{languageName}</span>
    </div>
  )
}