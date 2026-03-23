"use client"

import { useEffect, useRef } from "react"

export default function Music({ shouldPlay }) {
  const audioRef = useRef(null)

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.8
        audioRef.current.play().catch(() => {})
      }
    }

    if (shouldPlay) {
      playAudio()

      // fallback: user interaction trigger
      window.addEventListener("click", playAudio)
    }

    return () => {
      window.removeEventListener("click", playAudio)
    }
  }, [shouldPlay])

  return (
    <audio ref={audioRef} preload="auto">
      <source src="/bg.mp3" type="audio/mpeg" />
    </audio>
  )
}
