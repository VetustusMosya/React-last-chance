import "./Card.css"

export const Card = (props) => {
  return (
    <div className={(props.className ?? '') + " card"}>{props.children}</div>
  )
}
