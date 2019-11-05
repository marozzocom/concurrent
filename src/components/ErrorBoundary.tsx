import React, { Component } from "react"

interface IErrorBoundaryState {
    hasError: boolean
    error: string
}

export class ErrorBoundary extends Component<{}, IErrorBoundaryState> {
    constructor (props: {}) {
        super(props)

        this.state = {
            hasError: false,
            error: ""
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        console.info(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Error occured.</h1>
        }

        return this.props.children
    }
}