import * as React from "react"

export function Logo(props) {
  return (
      <svg width={228} height={25} xmlns="http://www.w3.org/2000/svg" {...props}>
        <text
          transform="translate(-24 -24)"
          fill="#000"
          fillRule="evenodd"
          fontSize={36}
          fontFamily="OhnoSoftieDemo-Black, Ohno Softie Demo"
          fontWeight={700}
        >
          <tspan x={24} y={48}>
            {"AUDIENCE "}
          </tspan>
          <tspan
            x={185.316}
            y={48}
            fontFamily="OhnoSoftieDemo-Regular, Ohno Softie Demo"
            fontWeight="normal"
          >
            {"KING"}
          </tspan>
        </text>
      </svg>    
  )
}

