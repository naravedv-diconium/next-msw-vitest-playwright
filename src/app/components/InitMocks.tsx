'use client'

import {useEffect} from "react";

export default function InitMocks() {

  useEffect(() => {
    const init = async () => {
      if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_API_MOCKING === "true") {
        const {worker} = await import("../../mock/browser");
        console.log("MOCKING MODE")
        await worker.start();
      } else {
        console.log("LIVE MODE");
      }
    }

    init();
  })

  return null
}