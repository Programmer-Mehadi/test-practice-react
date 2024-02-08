/* eslint-disable react-refresh/only-export-components */
import { memo } from "react"

/* eslint-disable react/prop-types */
function AgeComponent({ age }) {
  console.log("AgeComponent")
  return (
    <div>
      <h2>{age}</h2>
    </div>
  )
}

export default memo(AgeComponent)
