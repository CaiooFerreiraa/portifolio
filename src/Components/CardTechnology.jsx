export default function CardTechnology({tittle, iconName, description}) {
  return (
    <div className="card-technology">
      <i className="material-symbols-outlined">{iconName}</i>
      <span className="card-tittle">{tittle}</span>
      <span className="card-description">{description}</span>
    </div>
  )
}