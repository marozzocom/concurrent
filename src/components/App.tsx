import React, { Suspense, SuspenseList } from "react"
import { Details } from "./Details"
import { ErrorBoundary } from "./ErrorBoundary"

export const App = () => <ErrorBoundary>
    <SuspenseList revealOrder="forwards">
        <Details />
    </SuspenseList>
</ErrorBoundary>