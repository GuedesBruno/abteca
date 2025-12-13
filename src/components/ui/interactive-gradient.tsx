"use client"

import { useEffect, useRef } from "react"

interface GradientBlob {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    color: string
}

export function InteractiveGradient() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseRef = useRef({ x: -1000, y: -1000 }) // Start off-screen

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number

        // Dark Blue Palette - Strictly NO White
        // Increased velocity 2x-3x for more noticeable movement
        const blobs: GradientBlob[] = [
            { x: 0, y: 0, vx: 0.8, vy: 0.5, radius: 500, color: "rgba(30, 58, 138, 0.6)" }, // Blue-900 strong
            { x: 0, y: 0, vx: -0.6, vy: 0.9, radius: 400, color: "rgba(29, 78, 216, 0.4)" }, // Blue-700
            { x: 0, y: 0, vx: 0.7, vy: -0.6, radius: 450, color: "rgba(30, 64, 175, 0.5)" }, // Blue-800
        ]

        const resizeCanvas = () => {
            // Match internal resolution to display size for accurate coordinate mapping
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth
                canvas.height = canvas.parentElement.offsetHeight
            }

            // Initialize positions randomly within the new bounds
            blobs.forEach(blob => {
                blob.x = Math.random() * canvas.width
                blob.y = Math.random() * canvas.height
            })
        }

        const handleMouseMove = (e: MouseEvent) => {
            // Use parent element for coordinates to handle z-index layering correctly.
            // When hovering text (z-10), the event bubbles to the parent (PageHeader div).
            // We calculate coordinates relative to that parent.
            const target = canvas.parentElement || canvas
            const rect = target.getBoundingClientRect()
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            }
        }

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 }
        }

        const drawBlob = (blob: { x: number, y: number, radius: number, color: string }) => {
            const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius)
            gradient.addColorStop(0, blob.color)
            gradient.addColorStop(1, "rgba(23, 37, 84, 0)") // Fade to transparent (base dark blue)

            ctx.fillStyle = gradient
            ctx.beginPath()
            ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
            ctx.fill()
        }

        const draw = () => {
            // Background - Deep Dark Blue Base
            // #0f172a (slate-950) to #172554 (blue-950)
            const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
            bgGradient.addColorStop(0, "#020617") // Very dark slate/blue
            bgGradient.addColorStop(1, "#172554") // Dark blue
            ctx.fillStyle = bgGradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw drifting ambient blobs
            blobs.forEach(blob => {
                blob.x += blob.vx
                blob.y += blob.vy

                // Soft bounce off edges with margin
                if (blob.x < -100 || blob.x > canvas.width + 100) blob.vx *= -1
                if (blob.y < -100 || blob.y > canvas.height + 100) blob.vy *= -1

                drawBlob(blob)
            })

            // Draw Mouse Interaction (Spotlight)
            // Just a slightly lighter blue, NOT white.
            if (mouseRef.current.x > -500) {
                drawBlob({
                    x: mouseRef.current.x,
                    y: mouseRef.current.y,
                    radius: 300,
                    color: "rgba(59, 130, 246, 0.3)" // Blue-500 transparent (Lighter blue highlight)
                })
            }

            animationFrameId = requestAnimationFrame(draw)
        }

        // Event listeners attached to the window for resize
        window.addEventListener("resize", resizeCanvas)

        // Critical change: Attach mouse events to the parent element (PageHeader)
        // This ensures events are captured even when hovering over text (h1, p) 
        // which sits above the canvas in z-index.
        const eventTarget = canvas.parentElement || canvas
        eventTarget.addEventListener("mousemove", handleMouseMove)
        eventTarget.addEventListener("mouseleave", handleMouseLeave)

        resizeCanvas()
        draw()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            eventTarget.removeEventListener("mousemove", handleMouseMove)
            eventTarget.removeEventListener("mouseleave", handleMouseLeave)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0"
            style={{ width: "100%", height: "100%" }}
        />
    )
}
