import React from "react"
import { createResource } from "services/data"
import { Number } from "components/Number"

const resource = createResource()

export const Details = () => {
    const { numbers } = resource

    return <>
        <Number number={numbers[0].read()} />
        <Number number={numbers[1].read()} />
        <Number number={numbers[2].read()} />
    </>
}