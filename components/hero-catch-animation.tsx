export function HeroCatchAnimation() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-[linear-gradient(180deg,#fffef8_0%,#ffffff_45%,#f7f8fa_100%)] p-4 shadow-[0_30px_80px_-40px_rgba(24,24,27,0.45)] sm:p-6 lg:p-8">
      <div className="absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
      <div className="hero-stage relative h-[380px] sm:h-[500px] lg:h-[620px]">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-grid-fade" />

        <svg
          viewBox="0 0 520 420"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="logoBall" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4d507f" />
              <stop offset="100%" stopColor="#3d416c" />
            </linearGradient>
            <linearGradient id="logoAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f9c325" />
              <stop offset="100%" stopColor="#f2b515" />
            </linearGradient>
            <filter id="logoGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
          </defs>

          <path
            d="M52 123C133 45 227 29 308 80C360 112 402 167 445 177"
            fill="none"
            stroke="rgba(24,24,27,0.12)"
            strokeWidth="2"
            strokeDasharray="8 10"
            strokeLinecap="round"
          />

          <g>
            <animateTransform
              attributeName="transform"
              type="scale"
              values="0.2 0.2;0.45 0.45;0.72 0.72;1 1;1 1"
              keyTimes="0;0.28;0.52;0.68;1"
              dur="4.2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0.12;0.2;0.28;0.28"
              keyTimes="0;0.28;0.52;0.68;1"
              dur="4.2s"
              repeatCount="indefinite"
            />
            <ellipse cx="317" cy="270" rx="88" ry="26" fill="rgba(24,24,27,0.08)" />
          </g>

          <g opacity="0">
            <animate
              attributeName="opacity"
              values="0;0;0;0.9;0"
              keyTimes="0;0.6;0.66;0.72;1"
              dur="4.2s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="314 237;314 237;314 237;314 237;314 237"
              keyTimes="0;1"
              dur="4.2s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="scale"
              values="0.35 0.35;0.35 0.35;0.35 0.35;1 1;1.3 1.3"
              keyTimes="0;0.6;0.66;0.72;1"
              dur="4.2s"
              repeatCount="indefinite"
            />
            <circle
              cx="0"
              cy="0"
              r="74"
              fill="none"
              stroke="rgba(249,195,37,0.24)"
              strokeWidth="14"
            />
          </g>

          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="108 68;182 34;250 88;314 237;314 237"
              keyTimes="0;0.24;0.5;0.68;1"
              dur="4.2s"
              calcMode="spline"
              keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.2 0 0.2 1;0 0 1 1"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="scale"
              values="0.74 0.74;0.82 0.82;0.92 0.92;1 1;1 1"
              keyTimes="0;0.24;0.5;0.68;1"
              dur="4.2s"
              repeatCount="indefinite"
            />
            <circle cx="0" cy="0" r="114" fill="#040404" />
            <circle cx="0" cy="0" r="100" fill="url(#logoBall)" />
            <circle
              cx="0"
              cy="0"
              r="110"
              fill="none"
              stroke="rgba(249,195,37,0.2)"
              strokeWidth="10"
              filter="url(#logoGlow)"
            />
          </g>

          <g transform="translate(229 264)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="252 320;241 298;232 280;229 264;229 264"
              keyTimes="0;0.3;0.54;0.68;1"
              dur="4.2s"
              calcMode="spline"
              keySplines="0.22 0.08 0.22 1;0.22 0.08 0.22 1;0.22 0.08 0.22 1;0 0 1 1"
              repeatCount="indefinite"
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                values="-18 26;-11 16;-4 5;0 0;0 0"
                keyTimes="0;0.34;0.56;0.68;1"
                dur="4.2s"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="-7 72 78;-4 72 78;-1 72 78;0 72 78;0 72 78"
                keyTimes="0;0.34;0.56;0.68;1"
                dur="4.2s"
                repeatCount="indefinite"
              />
              <path
                d="M10 104C34 103 54 84 74 50C88 24 101 5 116 -6C131 -17 145 -17 156 -8C142 -2 131 12 118 34C97 71 80 100 57 121C37 139 11 146 -15 141C-27 138 -36 132 -42 124C-24 126 -8 121 10 104Z"
                fill="url(#logoAccent)"
              />
            </g>
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                values="-11 18;-7 11;-2 4;0 0;0 0"
                keyTimes="0;0.34;0.56;0.68;1"
                dur="4.2s"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="-5 122 82;-3 122 82;-1 122 82;0 122 82;0 122 82"
                keyTimes="0;0.34;0.56;0.68;1"
                dur="4.2s"
                repeatCount="indefinite"
              />
              <path
                d="M52 102C78 102 100 82 123 47C139 22 154 2 171 -10C189 -22 206 -23 218 -13C201 -6 187 10 171 34C147 72 128 102 102 124C79 143 50 150 21 146C8 144 -2 139 -10 131C10 133 31 127 52 102Z"
                fill="url(#logoAccent)"
              />
            </g>
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                values="-5 12;-3 7;-1 2;0 0;0 0"
                keyTimes="0;0.34;0.56;0.68;1"
                dur="4.2s"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="-4 175 82;-2 175 82;-1 175 82;0 175 82;0 175 82"
                keyTimes="0;0.34;0.56;0.68;1"
                dur="4.2s"
                repeatCount="indefinite"
              />
              <path
                d="M104 98C132 98 156 79 181 47C199 24 216 7 235 -6C253 -18 269 -20 281 -12C263 -6 247 10 228 34C201 69 179 98 151 120C126 138 95 144 66 138C53 135 42 129 35 121C55 124 79 119 104 98Z"
                fill="url(#logoAccent)"
              />
            </g>
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                values="-10 16;-6 10;-2 3;0 0;0 0"
                keyTimes="0;0.34;0.56;0.68;1"
                dur="4.2s"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="-4 116 118;-2 116 118;-1 116 118;0 116 118;0 116 118"
                keyTimes="0;0.34;0.56;0.68;1"
                dur="4.2s"
                repeatCount="indefinite"
              />
              <path
                d="M-34 116C-12 93 21 77 58 74C86 72 114 79 143 93C171 107 195 108 216 100C244 89 266 78 286 79C271 99 250 116 225 130C198 145 165 152 127 152C84 152 42 143 4 132C-11 128 -25 123 -38 117L-34 116Z"
                fill="url(#logoAccent)"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
