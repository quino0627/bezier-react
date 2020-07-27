import React from 'react'

function SvgMoonFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.77 15.678c-3.792-.594-6.857-3.66-7.451-7.454a8.979 8.979 0 01.552-4.817c.168-.412-.237-.827-.648-.659-3.955 1.615-6.648 5.68-6.167 10.316.479 4.63 4.249 8.4 8.878 8.878 4.635.481 8.7-2.212 10.316-6.167.168-.41-.247-.816-.66-.648a8.984 8.984 0 01-4.82.551"
      />
    </svg>
  )
}

export default SvgMoonFilled