const getRandomNumber = async () => {
    const number = Math.floor(Math.random() * 20)
    const delay = Math.floor(Math.random() * 200)
    return new Promise(resolve => setTimeout(() => resolve(number), delay))
}

export const createResource = () => {
    return {
        numbers: [
            wrapPromise(getRandomNumber()),
            wrapPromise(getRandomNumber()),
            wrapPromise(getRandomNumber())
        ]
    }
}

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