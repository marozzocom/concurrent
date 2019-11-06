/** @jsx jsx */
import React, { Suspense, SuspenseList } from "react"
import { Number } from "components/Number"
import { css, jsx } from "@emotion/core"
import { Spinner } from "components/Spinner"
import { IResource } from "services/data"

const style = css({
  display: "flex",
  flexWrap: "wrap"
})

export enum RevealOrderType {
  Forwards = "forwards",
  Backwards = "backwards",
  Together = "together"
}
export enum TailType {
  Collapsed = "collapsed",
  Hidden = "hidden"
}

export const Details = ({ resource, revealOrder, tail }: { resource: IResource, revealOrder?: RevealOrderType, tail?: TailType }) => <div css={style}><SuspenseList revealOrder={revealOrder} tail={tail}>{resource?.numbers?.map((number, index) => <Suspense key={index} fallback={<Spinner />}><Number number={number} /></Suspense>)}</SuspenseList></div>