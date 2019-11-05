# Demo
See the demo [here](https://marozzocom.github.io/concurrent/).

# Experiment with React SuspenseList and concurrent mode
This example shows how [SuspenseList](https://reactjs.org/docs/concurrent-mode-reference.html#suspenselist) can be used to control how asynchronically loaded components are rendered.

This example renders 30 random numbers ranging from 0 to 99 that take a random time to "load" from zero to five seconds, simulating network latency. By changing the provided settings you can change in which order React renders these elements.

The showing of spinner is also controlled with React Suspense and it is not part of the actual component displaying the number.

## Installation
1) Install dependencies with `npm i`
2) Build with `npm run build`
3) Start server with `npm run start`
4) Open [localhost:3000](http://localhost:3000) in browser

## Watch
Instead of building, you can also run `npm run watch` in a separate terminal to build automatically when files change.