import {Store} from 'pullstate'

const color: string[] = ['#000000','#804000','#FE0000','#FE6A00','#FFD800','#00FF01','#FFFFFF','#01FFFF','#0094FE','#0026FF','#B100FE','#FF006E']

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][]
  PickedColor: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const RandomColor = () =>{
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push(color[Math.floor(Math.random() * 12)])
    }
  }
  return output
}

export const RandomCell = () =>{
  PixelPainterStore.update(s => {s.canvas = RandomColor()})
}

export const ChangeCellColor = (x: number , y: number) =>{
  PixelPainterStore.update(s =>{s.canvas[y][x] = s.PickedColor})
}

export const ClearColor = () =>{
  PixelPainterStore.update(s => {s.canvas = createEmptyCanvas()})
}

export const PickColor = (color: string) =>{
  PixelPainterStore.update(s => {s.PickedColor = color})
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  PickedColor: ""
})