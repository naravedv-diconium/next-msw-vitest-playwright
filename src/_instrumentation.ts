// Does not work with HMR, left here for presentation purposes
export async function register() {
  if (process.env.NEXT_PUBLIC_API_MOCKING === "true" && process.env.NEXT_RUNTIME === "nodejs") {
    console.log("NODE MODE")
    const {server} = await import ("./mock/node")
    server.listen()
  }
}