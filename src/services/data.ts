const getNumber = async (previous: number, maxDelay: number) => {
    const number = previous + 1
    const delay = Math.floor(Math.random() * maxDelay)
    return new Promise(resolve => setTimeout(() => resolve(number), delay))
}

export interface IResource {
  numbers: any
}

export interface IResourceSettings {

  length: number
  maxDelay: number
}

export const createResource = (resourceSettings: IResourceSettings) => ({ numbers: [...Array(resourceSettings.length)].map((_, index) => wrapPromise(getNumber(index, resourceSettings.maxDelay))) })

const wrapPromise = (promise) => {
    let status = "pending"
    let result: any

    const suspender = async () => {
        try {
            const r = await promise
            status = "success"
            result = r
        } catch (error) {
            console.log("error encountered")
            status = "error"
            result = error
        }
    }

    return {
        read: () => {
            if (status === "pending") {
                throw suspender()
            } else if (status === "error") {
                throw result
            } else if (status === "success") {
                return result
            }
        }
    }
}