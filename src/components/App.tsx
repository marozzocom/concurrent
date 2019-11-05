import React, { useState, useEffect } from "react"
import { createResource, IResource, IResourceSettings } from "services/data"
import { Details, RevealOrderType, TailType } from "./Details"
import { ErrorBoundary } from "./ErrorBoundary"
import { SuspenseControls } from "components/SuspenseControls"

const resourceSettings: IResourceSettings = {
  length: 30,
  maxDelay: 5000
}

export const App = () => {
  const [revealOrder, setRevealOrder] = useState<RevealOrderType>()
  const [tail, setTail] = useState<TailType>()
  const [resource, setResource] = useState<IResource>(createResource(resourceSettings))
  
  const handleRevealOrderChange = (event) => {
    setResource(undefined)
    const value = event.currentTarget.value as RevealOrderType
    if (!value) setTail(undefined)
    setRevealOrder(value)
  }

  const handleTailChange = (event) => {
    setResource(undefined)
    setTail(event.currentTarget.value as TailType)
  }

  useEffect(() => {
    setResource(createResource(resourceSettings))
  }, [tail, revealOrder])

  return <ErrorBoundary>
    <SuspenseControls setResource={setResource} handleRevealOrderChange={handleRevealOrderChange} handleTailChange={handleTailChange} revealOrder={revealOrder} />
    <Details revealOrder={revealOrder} tail={tail} resource={resource} />
  </ErrorBoundary>
}