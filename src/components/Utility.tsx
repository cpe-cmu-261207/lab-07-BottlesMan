import { ClearColor, RandomCell } from "../stores/PixelPainterStore"

const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick={() => ClearColor()}> Clear</button>
      <button className="w-36" onClick={() => RandomCell()}> Random color</button>
    </div>
  )
}

export default Utility