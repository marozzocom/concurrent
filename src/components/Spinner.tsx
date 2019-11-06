/** @jsx jsx */
import React from "react"
import { keyframes, css, jsx } from "@emotion/core"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const style = css({
  margin: "1em",
  padding: "1em",
  width: "1.5em",
  height: "1.5em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: `${rotate} 1s linear infinite`
})

export const Spinner = () => <div css={style}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ width: "1.5em", height: "1.5em" }}>
    <defs>
      <linearGradient id="be3cd200-4584-4317-b543-09865f7dc1d6" x1="7.3" y1="7.3" x2="30.49" y2="30.49" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#d9e021" />
        <stop offset="1" stopColor="#0e7a7a" />
      </linearGradient>
    </defs>
    <path d="M16,0a16,16,0,1,0,8.92,29.28l-3.34-5A10,10,0,1,1,26,16h6A16.07,16.07,0,0,0,16,0Z" style={{ fill: "url(#be3cd200-4584-4317-b543-09865f7dc1d6)" }} />
  </svg>
</div >