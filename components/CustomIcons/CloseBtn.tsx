import * as React from "react"
import { SVGProps } from "react"

const CloseBtn = (props: SVGProps<SVGSVGElement>) => (
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 5L5 15" stroke="#E01D1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5L15 15" stroke="#E01D1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)
export default CloseBtn
