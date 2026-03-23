"use client"
import { useEffect, useRef } from "react"

export default function Music() {
  const audioRef = useRef(null)

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.8
        audioRef.current.play()
      }
    }

    document.addEventListener("click", playMusic)

    return () => {
      document.removeEventListener("click", playMusic)
    }
  }, [])

  return (
    <audio ref={audioRef} loop>
      <source src="/bg.mp3" type="audio/mp3" />
    </audio>
  )
}
