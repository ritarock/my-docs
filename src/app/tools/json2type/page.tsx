'use client'

import { useState } from "react"

export default function Json2type() {
  const [leftArea, setLeftArea] = useState("")
  const [rightArea, setRightArea] = useState("")

  const handleTsClick = () => {
    setRightArea(leftArea)
  }

  const handleGoClick = () => {
    setRightArea(leftArea)
  }

  return (
    <>
      <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
      <form>
        <textarea
          rows={50}
          cols={50}
          style={{resize: "none"}}
          value={leftArea}
          onChange={(e) => setLeftArea(e.target.value)}
        />
      </form>
      <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
        <button onClick={handleTsClick}>to ts</button>
        <button onClick={handleGoClick}>to go</button>
      </div>
      <form>
        <textarea
          rows={50}
          cols={50}
          style={{resize: "none"}}
          value={rightArea}
          readOnly
        />
      </form>
      </div>
    </>
  )
}
