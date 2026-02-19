"use client"
import { motion, HTMLMotionProps } from "framer-motion"
import { useState } from "react"
import { LucideIcon } from "lucide-react"

interface ExpandingButtonProps extends HTMLMotionProps<"button"> {
  label: string
  icon: LucideIcon
}

export function ExpandingButton({ label, icon: Icon, ...props }: ExpandingButtonProps) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.button
      {...props}
      className="flex items-center bg-indigo-400 text-white font-bold rounded-full py-3 px-3 overflow-hidden cursor-pointer"
      animate={{ width: hovered ? "10rem" : "3rem" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Icon className="w-6 h-6 shrink-0" />
      <motion.span
        className="ml-2 whitespace-nowrap"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
    </motion.button>
  )
}