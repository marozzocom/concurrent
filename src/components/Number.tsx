/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

const style = css({
  background: "#ccc",
  borderRadius: "1em",
  margin: "1em",
  padding: "1em",
  width: "1.5em",
  height: "1.5em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

export const Number = ({ number }) => <div css={style}><h2>{number.read()}</h2></div>