"use client"
import { useState } from "react"

import FirstScreen from "../FirstScreen"
import SecondScreen from "../SecondScreen"
import LyricsScreen from "../LyricsScreen"
import OutroScreen from "../OutroScreen"

export default function Home() {
  const [step, setStep] = useState(1)

  return (
    <>
      {step === 1 && <FirstScreen onNext={() => setStep(2)} />}
      {step === 2 && <SecondScreen onNext={() => setStep(3)} />}
      {step === 3 && <LyricsScreen onNext={() => setStep(4)} />}
      {step === 4 && <OutroScreen />}
    </>
  )
}
