import React from 'react'

function SvgPencil(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.678 5.736L18.414 7 17 5.586l1.263-1.264a.997.997 0 011.415 0 1 1 0 010 1.414zM4 20v-1.415L4.586 18 6 19.414 5.414 20H4zM15.586 7L17 8.414 7.414 18 6 16.586 15.586 7zm5.506-4.092a2.99 2.99 0 00-2.122-.879c-.767 0-1.535.293-2.121.88L1.999 17.756V22h4.244L21.092 7.151a3.003 3.003 0 000-4.243z"
      />
    </svg>
  )
}

export default SvgPencil