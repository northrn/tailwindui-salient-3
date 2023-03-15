import * as React from "react"

export function Logo(props) {
  return (
  <svg width={191} height={45} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#00AB83" cx={22.5} cy={22.5} r={22.5} />
      <path
        d="M22.116 40.76c11.92 0 17.54-12.519 16.838-15.61-.523-.2-11.088 0-16.838 0H6.05c-1.196 4.7 4.144 15.61 16.065 15.61Z"
        fill="#FFF"
      />
      <text fontFamily="OhnoSoftieDemo-Regular, Ohno Softie Demo" fontSize={24}>
        <tspan x={60} y={29} fill="#000">
          {"Audience"}
        </tspan>
        <tspan
          x={147.984}
          y={29}
          fontFamily="OhnoSoftieDemo-Medium, Ohno Softie Demo"
          fontWeight={400}
          fill="#00AB83"
        >
          {"King"}
        </tspan>
      </text>
    </g>
  </svg>
  )
}

