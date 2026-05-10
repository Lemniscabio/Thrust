// Hero visual — ascending zigzag path from pilot to industrial bioreactor.
// Vessels use white strokes to contrast against the teal hero gradient.

// Shared stroke tokens
const V  = 'rgba(255,255,255,0.72)';   // vessel primary stroke
const V2 = 'rgba(255,255,255,0.35)';   // vessel secondary (bands, details)
const V3 = 'rgba(255,255,255,0.18)';   // vessel tertiary (scaffolding diagonals)
const VF = 'rgba(255,255,255,0.05)';   // vessel body fill

export function HeroVisual() {
  return (
    <svg
      viewBox="40 30 450 400"
      fill="none"
      className="w-full select-none"
      style={{ height: 'auto', display: 'block' }}
    >
      <defs>
        <pattern id="hv-grid" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(56,175,216,0.055)" strokeWidth="0.5"/>
        </pattern>
        <filter id="hv-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="7" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="hv-dot-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="hv-path-grad" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%"   stopColor="#38AFD8" stopOpacity="0.8"/>
          <stop offset="28%"  stopColor="#D86138"/>
          <stop offset="72%"  stopColor="#D86138" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#38AFD8" stopOpacity="0.75"/>
        </linearGradient>
        <linearGradient id="hv-area-fill" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%"   stopColor="#D86138" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="#D86138" stopOpacity="0"/>
        </linearGradient>
        <radialGradient id="hv-teal-amb" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#38AFD8" stopOpacity="0.14"/>
          <stop offset="100%" stopColor="#38AFD8" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="hv-copper-amb" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#D86138" stopOpacity="0.13"/>
          <stop offset="100%" stopColor="#D86138" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Grid */}
      <rect width="540" height="430" fill="url(#hv-grid)" rx="24"/>

      {/* Ambient glows */}
      <ellipse cx="70"  cy="330" rx="70"  ry="75"  fill="url(#hv-teal-amb)"/>
      <ellipse cx="440" cy="145" rx="95"  ry="100" fill="url(#hv-teal-amb)"/>
      <ellipse cx="255" cy="275" rx="210" ry="68"  fill="url(#hv-copper-amb)"/>

      {/* Axes */}
      <line x1="36" y1="375" x2="510" y2="375" stroke="rgba(56,175,216,0.18)" strokeWidth="0.8"/>
      <line x1="36" y1="28"  x2="36"  y2="377" stroke="rgba(56,175,216,0.18)" strokeWidth="0.8"/>
      <text x="515" y="378" fill="rgba(128,212,250,0.42)" fontSize="7" fontWeight="500" fontFamily="system-ui">Scale →</text>

      {/* Trend line */}
      <line x1="70" y1="310" x2="402" y2="195"
        stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 7"/>


      {/* ═══════════════════════════════
          PILOT BIOREACTOR  (bottom-left)
      ═══════════════════════════════ */}
      {/* Body */}
      <rect x="50" y="310" width="40" height="45" rx="3"
        fill={VF} stroke={V} strokeWidth="1.6"/>
      {/* Top cap */}
      <ellipse cx="70" cy="310" rx="20" ry="7"
        fill="rgba(255,255,255,0.07)" stroke={V} strokeWidth="1.6"/>
      {/* Bottom cap */}
      <ellipse cx="70" cy="355" rx="20" ry="7"
        fill="rgba(255,255,255,0.04)" stroke={V2} strokeWidth="1.2"/>
      {/* Agitator */}
      <line x1="70" y1="318" x2="70" y2="347"
        stroke={V2} strokeWidth="0.9" strokeDasharray="3 4"/>
      {/* Baffles */}
      <line x1="52" y1="328" x2="88" y2="328" stroke={V2} strokeWidth="0.9"/>
      <line x1="52" y1="338" x2="88" y2="338" stroke={V2} strokeWidth="0.9"/>
      {/* Inlet pipe top */}
      <line x1="70" y1="303" x2="70" y2="290"
        stroke={V} strokeWidth="1.8" strokeLinecap="round"/>
      {/* Outlet pipe */}
      <line x1="90" y1="335" x2="102" y2="335"
        stroke={V2} strokeWidth="1.4" strokeLinecap="round"/>
      {/* Label */}
      <text x="70" y="372" textAnchor="middle"
        fill="rgba(255,255,255,0.85)" fontSize="7.5" fontWeight="700" letterSpacing="1.3" fontFamily="system-ui">
        PILOT
      </text>
      <text x="70" y="382" textAnchor="middle"
        fill="rgba(255,255,255,0.45)" fontSize="6.5" letterSpacing="0.4" fontFamily="system-ui">
        10–500 L
      </text>


      {/* ═══════════════════════════════
          INDUSTRIAL BIOREACTOR  (top-right)
      ═══════════════════════════════ */}

      {/* Scaffolding LEFT */}
      <line x1="370" y1="78" x2="370" y2="228" stroke={V2} strokeWidth="1"/>
      <line x1="370" y1="100" x2="382" y2="100" stroke={V2} strokeWidth="0.9"/>
      <line x1="370" y1="126" x2="382" y2="126" stroke={V2} strokeWidth="0.9"/>
      <line x1="370" y1="152" x2="382" y2="152" stroke={V2} strokeWidth="0.9"/>
      <line x1="370" y1="178" x2="382" y2="178" stroke={V2} strokeWidth="0.9"/>
      <line x1="370" y1="100" x2="382" y2="126" stroke={V3} strokeWidth="0.7"/>
      <line x1="370" y1="152" x2="382" y2="178" stroke={V3} strokeWidth="0.7"/>

      {/* Scaffolding RIGHT */}
      <line x1="502" y1="78" x2="502" y2="228" stroke={V2} strokeWidth="1"/>
      <line x1="490" y1="100" x2="502" y2="100" stroke={V2} strokeWidth="0.9"/>
      <line x1="490" y1="126" x2="502" y2="126" stroke={V2} strokeWidth="0.9"/>
      <line x1="490" y1="152" x2="502" y2="152" stroke={V2} strokeWidth="0.9"/>
      <line x1="490" y1="178" x2="502" y2="178" stroke={V2} strokeWidth="0.9"/>
      <line x1="490" y1="100" x2="502" y2="126" stroke={V3} strokeWidth="0.7"/>
      <line x1="490" y1="152" x2="502" y2="178" stroke={V3} strokeWidth="0.7"/>

      {/* Main cylinder body */}
      <rect x="382" y="78" width="108" height="132" rx="5"
        fill={VF} stroke={V} strokeWidth="1.8"/>

      {/* Construction bands */}
      <line x1="384" y1="110" x2="488" y2="110" stroke={V2} strokeWidth="0.9"/>
      <line x1="384" y1="140" x2="488" y2="140" stroke={V2} strokeWidth="0.9"/>
      <line x1="384" y1="170" x2="488" y2="170" stroke={V2} strokeWidth="0.9"/>

      {/* Flat top cap + collar flange */}
      <ellipse cx="436" cy="78" rx="54" ry="15"
        fill="rgba(255,255,255,0.07)" stroke={V} strokeWidth="1.8"/>
      <ellipse cx="436" cy="78" rx="59" ry="18"
        fill="none" stroke={V2} strokeWidth="1"/>

      {/* ── Nozzles — 4 distinct flanged stubs ──
          Vessel top x=382–490 (center 436). Nozzle centres: 404, 424, 450, 470.
          Each 18px wide, heights descend from tallest (center) to shorter (sides). ── */}

      {/* Nozzle 1  cx=404 */}
      <rect x="395" y="48" width="18" height="28" rx="2"
        fill={VF} stroke={V} strokeWidth="1.4"/>
      <ellipse cx="404" cy="48" rx="9" ry="5"
        fill="rgba(255,255,255,0.1)" stroke={V} strokeWidth="1.4"/>
      {/* base flange ring */}
      <ellipse cx="404" cy="76" rx="11" ry="4"
        fill="none" stroke={V2} strokeWidth="0.9"/>

      {/* Nozzle 2  cx=424 */}
      <rect x="415" y="36" width="18" height="40" rx="2"
        fill={VF} stroke={V} strokeWidth="1.4"/>
      <ellipse cx="424" cy="36" rx="9" ry="5"
        fill="rgba(255,255,255,0.1)" stroke={V} strokeWidth="1.4"/>
      <ellipse cx="424" cy="76" rx="11" ry="4"
        fill="none" stroke={V2} strokeWidth="0.9"/>

      {/* Nozzle 3  cx=450  (tallest) */}
      <rect x="441" y="28" width="18" height="48" rx="2"
        fill={VF} stroke={V} strokeWidth="1.4"/>
      <ellipse cx="450" cy="28" rx="9" ry="5"
        fill="rgba(255,255,255,0.1)" stroke={V} strokeWidth="1.4"/>
      <ellipse cx="450" cy="76" rx="11" ry="4"
        fill="none" stroke={V2} strokeWidth="0.9"/>

      {/* Nozzle 4  cx=470 */}
      <rect x="461" y="44" width="18" height="32" rx="2"
        fill={VF} stroke={V} strokeWidth="1.4"/>
      <ellipse cx="470" cy="44" rx="9" ry="5"
        fill="rgba(255,255,255,0.1)" stroke={V} strokeWidth="1.4"/>
      <ellipse cx="470" cy="76" rx="11" ry="4"
        fill="none" stroke={V2} strokeWidth="0.9"/>

      {/* Porthole */}
      <circle cx="436" cy="148" r="16"
        fill={VF} stroke={V} strokeWidth="1.6"/>
      <circle cx="436" cy="148" r="11"
        fill="none" stroke={V2} strokeWidth="1"/>
      <circle cx="424" cy="137" r="2.2" fill={V}/>
      <circle cx="448" cy="137" r="2.2" fill={V}/>
      <circle cx="424" cy="159" r="2.2" fill={V}/>
      <circle cx="448" cy="159" r="2.2" fill={V}/>

      {/* Bottom cap */}
      <ellipse cx="436" cy="210" rx="54" ry="15"
        fill="rgba(255,255,255,0.05)" stroke={V2} strokeWidth="1.6"/>

      {/* Side valve pipe right */}
      <line x1="490" y1="178" x2="506" y2="178"
        stroke={V} strokeWidth="2" strokeLinecap="round"/>
      <rect x="506" y="173" width="9" height="10" rx="2"
        fill={VF} stroke={V2} strokeWidth="1"/>

      {/* Outlet pipe left */}
      <line x1="382" y1="192" x2="368" y2="192"
        stroke={V2} strokeWidth="1.6" strokeLinecap="round"/>

      {/* Support legs */}
      <line x1="396" y1="210" x2="388" y2="228" stroke={V2} strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="476" y1="210" x2="484" y2="228" stroke={V2} strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="388" y1="228" x2="484" y2="228" stroke={V2} strokeWidth="1"   strokeLinecap="round"/>
      <line x1="396" y1="228" x2="420" y2="210" stroke={V3} strokeWidth="0.8"/>
      <line x1="476" y1="228" x2="452" y2="210" stroke={V3} strokeWidth="0.8"/>

      {/* Label */}
      <text x="436" y="248" textAnchor="middle"
        fill="rgba(255,255,255,0.88)" fontSize="7.5" fontWeight="700" letterSpacing="1.3" fontFamily="system-ui">
        INDUSTRIAL
      </text>
      <text x="436" y="258" textAnchor="middle"
        fill="rgba(255,255,255,0.45)" fontSize="6.5" letterSpacing="0.4" fontFamily="system-ui">
        50k–500k L
      </text>


      {/* ═══════════════════════════════
          ZIGZAG PATH
      ═══════════════════════════════ */}
      <path
        d="M 70 310 L 106 326 L 148 299 L 183 320 L 224 280 L 258 303 L 300 260 L 333 284 L 372 242 L 402 195 L 402 375 L 70 375 Z"
        fill="url(#hv-area-fill)"
      />
      <path
        d="M 70 310 L 106 326 L 148 299 L 183 320 L 224 280 L 258 303 L 300 260 L 333 284 L 372 242 L 402 195"
        stroke="#D86138"
        strokeWidth="14"
        strokeOpacity="0.22"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#hv-glow)"
      />
      <path
        d="M 70 310 L 106 326 L 148 299 L 183 320 L 224 280 L 258 303 L 300 260 L 333 284 L 372 242 L 402 195"
        stroke="url(#hv-path-grad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Peak / valley dots */}
      {([
        [106, 326, true],
        [148, 299, false],
        [183, 320, true],
        [224, 280, false],
        [258, 303, true],
        [300, 260, false],
        [333, 284, true],
        [372, 242, false],
      ] as [number, number, boolean][]).map(([cx, cy, isValley]) => (
        <circle key={cx} cx={cx} cy={cy} r="2.8"
          fill={isValley ? 'rgba(56,175,216,0.85)' : '#D86138'}
          filter="url(#hv-dot-glow)"
        />
      ))}
      <circle cx="70"  cy="310" r="4" fill="#38AFD8" opacity="0.9" filter="url(#hv-dot-glow)"/>
      <circle cx="402" cy="195" r="4" fill="#38AFD8" opacity="0.9" filter="url(#hv-dot-glow)"/>

    </svg>
  );
}
