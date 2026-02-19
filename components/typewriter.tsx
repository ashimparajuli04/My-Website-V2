"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const words = ["Student", "Programmer", "Learner"]

export function Typewriter() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (text.length < words[index].length) {
      timeout = setTimeout(() => {
        setText(words[index].slice(0, text.length + 1))
      }, 80)
    } else {
      timeout = setTimeout(() => {
        setText("")
        setIndex((i) => (i + 1) % words.length)
      }, 1500)
    }

    return () => clearTimeout(timeout)
  }, [text, index])

  return (
    <span className="inline-flex items-center">
      <span className="text-indigo-400 font-semibold">
        {text}
      </span>

      {/* Cursor */}
      <motion.span
        className="ml-1 inline-block h-6 w-0.5 bg-indigo-400"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </span>
  )
}
