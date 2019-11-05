/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { RevealOrderType, TailType } from "components/Details"
import { IResource } from "services/data"

interface ISuspenseControlsProps {
  setResource: React.Dispatch<React.SetStateAction<IResource>>
  handleRevealOrderChange: (event: any) => void
  handleTailChange: (event: any) => void
  revealOrder: RevealOrderType
}

const styles = {
  root: css({
    display: "flex",
    padding: "1em",
    background: "#f1f1f1"
  }),
  control: css({
    marginLeft: "0.5em"
  })
}

export const SuspenseControls = (props: ISuspenseControlsProps) => {

  const { setResource, revealOrder, handleRevealOrderChange, handleTailChange } = props
  const showTailOptions = revealOrder === (RevealOrderType.Forwards || RevealOrderType.Backwards)
  return <div css={styles.root}>
    <button css={styles.control} onClick={() => setResource(undefined)}>Clear</button>
    <label css={styles.control}>Reveal order:&nbsp;
      <select onChange={handleRevealOrderChange}>
        <option value={undefined}>None</option>
        <option value={RevealOrderType.Forwards}>Forwards</option>
        <option value={RevealOrderType.Backwards}>Backwards</option>
        <option value={RevealOrderType.Together}>Together</option>
      </select>
    </label>
    {showTailOptions && <label css={styles.control}>Tail:&nbsp;
      <select onChange={handleTailChange}>
        <option value={undefined}>None</option>
        <option value={TailType.Collapsed}>Collapsed</option>
        <option value={TailType.Hidden}>Hidden</option>
      </select>
    </label>}
  </div>
}