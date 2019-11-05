import { InterpolationWithTheme } from "@emotion/core"

declare module "react" {
  interface DOMAttributes<T> { 
    css?: InterpolationWithTheme<any> 
  }
  const SuspenseList: any
}

declare module "react-dom" {
  const createRoot: any
}