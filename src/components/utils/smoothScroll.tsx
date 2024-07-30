"use client"

import { ReactLenis } from 'lenis/react'

function SmoothScroll({ children }: any) {
	return <ReactLenis root options={{
		lerp: 0.07,
		syncTouch: true,
	}} >{children}</ReactLenis>
}

export default SmoothScroll