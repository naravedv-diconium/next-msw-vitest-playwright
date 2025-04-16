async function register() {
  if (typeof window === "undefined") {
    const { server } = await import("./node");
    console.log("NODE MODE")
    server.listen();
  } else {
    const { worker } = await import("./browser");
    console.log("BROWSER MODE")
    await worker.start();
  }
}

await register();

export {}