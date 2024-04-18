import { useRef, useEffect } from 'react'
import LogoM from '../../../assets/images/m-high-resolution-logo-transparent.png'
import './index.scss'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    gsap.timeline()
    .to(bgRef.current, {
        duration: 1, 
        opacity: 1
    })

    .from (outlineLogoRef.current, {
        drawSVG: 0, 
        duration: 20,
    })
    

    gsap.fromTo(
        solidLogoRef.current, 
        {
            opacity: 0,
        },
        {
            opacity: 1, 
            delay: 4, 
            duration: 4,
        }
    )
}, [] )

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoM}
        alt="M"
      />

<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="300.000000pt" height="220.000000pt" viewBox="0 0 300.000000 220.000000" preserveAspectRatio="xMidYMid meet">

  <g 
    className="svg-container"
    transform="translate(0.000000,220.000000) scale(0.100000,-0.100000)" fill="none">
    <path
      //ref={outlineLogoRef} 
      d="M513 2185 c-143 -62 -381 -304 -462 -470 -30 -61 -57 -146 -42 -129 5 5 16 33 26 63 36 110 213 334 344 435 31 24 82 58 114 76 31 17 57 34 57 36 0 5 0 5 -37 -11
      M615 2191 c20 -18 379 -44 550 -39 l165 4 0 -26 c0 -22 -8 -30 -41 -45 -22 -10 -52 -32 -66 -49 -23 -28 -25 -35 -19 -96 18 -175 119 -540 343 -1233 8 -27 17 -46 20 -43 3 2 -31 118 -76 258 -167 527 -248 825 -271 997 -11 81 -11 84 12 108 13 14 44 36 69 48 45 23 46 25 39 62 -4 26 -11 37 -21 34 -8 -2 -77 -6 -154 -8 -123 -5 -416 13 -530 32 -18 3 -26 2 -20 -4
      M2645 2168 c-49 -5 -237 -8 -417 -6 -301 3 -327 2 -331 -13 -3 -12 10 -27 44 -48 31 -19 51 -39 55 -56 4 -18 -24 -121 -94 -348 -146 -466 -248 -802 -279 -919 -15 -57 -31 -104 -35 -106 -4 -2 -8 -8 -8 -14 0 -7 5 -6 14 1 7 6 21 40 30 75 22 91 148 506 275 915 61 195 111 366 111 381 0 20 -12 38 -40 64 -22 20 -45 36 -50 36 -6 0 -10 6 -10 13 0 9 81 12 372 12 205 0 405 2 443 5 l70 5 0 -29 c0 -34 1 -34 -178 -70 -65 -13 -121 -26 -124 -29 -15 -15 -22 -267 -13 -442 25 -453 79 -1025 126 -1335 18 -118 32 -140 90 -140 19 0 93 -12 165 -26 72 -14 133 -23 136 -21 6 7 -114 33 -244 53 l-112 17 -10 51 c-30 146 -62 429 -107 940 -27 308 -42 792 -27 860 l9 40 79 13 c44 7 115 23 158 35 71 19 78 23 73 42 -3 11 -6 29 -6 39 0 20 -18 20 -165 5
      M505 1979 c-133 -17 -241 -59 -271 -104 -25 -38 -31 -187 -10 -245 l16 -45 -32 -25 c-18 -14 -54 -44 -79 -67 -25 -24 -51 -43 -58 -43 -7 0 -23 12 -36 26 -14 15 -25 23 -25 17 0 -12 40 -49 60 -55 9 -3 38 16 70 46 30 28 68 61 84 72 l30 21 -19 58 c-21 68 -15 193 11 233 36 55 178 95 383 108 108 6 113 6 108 -12 -3 -11 -86 -419 -183 -909 -97 -490 -180 -893 -183 -897 -4 -4 -31 -12 -61 -18 -122 -22 -242 -54 -247 -66 -2 -6 0 -27 6 -45 l10 -34 -2 39 -2 40 70 18 c39 10 105 25 149 32 43 8 81 18 85 23 12 12 372 1823 365 1834 -6 11 -143 10 -239 -2
      M885 1950 c-8 -13 -111 -742 -135 -960 -11 -96 -25 -275 -31 -396 -17 -325 1 -427 89 -506 23 -21 42 -41 42 -45 0 -5 -143 -9 -317 -10 -175 0 -343 -5 -373 -11 -40 -7 -10 -8 115 -3 194 7 257 7 444 2 125 -4 135 -3 141 15 5 14 -3 25 -32 47 -26 18 -49 48 -66 85 l-27 57 0 265 c1 179 7 317 18 425 25 232 139 1035 147 1035 14 0 233 -717 314 -1030 79 -305 107 -458 113 -625 8 -194 11 -197 108 -108 38 36 112 93 163 126 76 50 92 65 92 86 1 107 132 541 362 1199 66 189 118 346 115 348 -2 2 -49 -123 -104 -278 -194 -546 -348 -1040 -377 -1211 -8 -43 -16 -79 -17 -81 -2 -1 -45 -30 -94 -64 -50 -34 -119 -87 -153 -118 -35 -31 -66 -54 -69 -50 -4 3 -8 59 -9 124 -3 187 -65 485 -195 935 -69 240 -216 713 -230 739 -11 20 -25 23 -34 8
      M2194 1895 c33 -289 47 -426 60 -585 28 -335 46 -651 53 -907 l6 -252 -39 -6 c-50 -9 -200 -42 -239 -53 -19 -5 -30 -15 -29 -25 3 -55 5 -67 13 -67 5 0 5 15 1 36 -6 24 -5 37 3 39 36 13 226 55 249 55 54 0 58 15 52 188 -9 279 -34 711 -55 962 -22 276 -66 660 -75 669 -4 3 -4 -21 0 -54z M2181 30 c-62 -5 -119 -12 -125 -15 -6 -2 34 -2 89 1 132 9 584 6 708 -4 53 -4 97 -5 97 -1 0 19 -586 33 -769 19z
      "
      />

  </g>
</svg>
    </div>
  )
}

export default Logo