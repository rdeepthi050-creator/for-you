"use client"

import { useEffect, useRef } from "react"

export default function Music() {
  const audioRef = useRef(null)

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {})
      }
    }

    // autoplay try
    playAudio()

    // fallback click
    window.addEventListener("click", playAudio)

    return () => {
      window.removeEventListener("click", playAudio)
    }
  }, [])

  return (
    <audio ref={audioRef} loop>
      <source src="/bg.mp3" type="audio/mpeg" />
    </audio>
  )
}
