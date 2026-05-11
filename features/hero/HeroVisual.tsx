// Hero visual — predictive scale-up curve from pilot to industrial bioreactor.
// Industrial tank is the dominant object; three liquid glass cards narrate the journey.

// Pilot vessel tokens — supporting, dim
const V  = 'rgba(255,255,255,0.62)';
const V2 = 'rgba(255,255,255,0.30)';
const VF = 'rgba(255,255,255,0.04)';

// Industrial vessel tokens — bright cyan-white, hero element
const IV  = 'rgba(225,250,255,0.98)';
const IV2 = 'rgba(165,235,255,0.62)';
const IV3 = 'rgba(110,210,240,0.26)';
const IVF = 'rgba(56,175,216,0.10)';

export function HeroVisual() {
  return (
    <svg
      viewBox="20 0 550 410"
      fill="none"
      className="w-full select-none"
      style={{ height: 'auto', display: 'block' }}
    >
      <defs>
        <pattern id="hv-grid" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(56,175,216,0.055)" strokeWidth="0.5"/>
        </pattern>

        {/* Curve glow */}
        <filter id="hv-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="9" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>

        {/* Dot glow */}
        <filter id="hv-dot-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>

        {/* Industrial cyan aura */}
        <filter id="ind-aura" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="20" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>

        {/* Glass card soft drop shadow */}
        <filter id="card-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="11" floodColor="#020C14" floodOpacity="0.45"/>
        </filter>

        {/* Curve gradient: teal start → copper through end */}
        <linearGradient id="hv-path-grad" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%"   stopColor="#38AFD8" stopOpacity="0.85"/>
          <stop offset="22%"  stopColor="#D86138"/>
          <stop offset="100%" stopColor="#D86138" stopOpacity="0.95"/>
        </linearGradient>

        {/* Curve area fill */}
        <linearGradient id="hv-area-fill" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%"   stopColor="#D86138" stopOpacity="0.10"/>
          <stop offset="100%" stopColor="#D86138" stopOpacity="0"/>
        </linearGradient>

        {/* Dark radial backdrop behind tank */}
        <radialGradient id="ind-backdrop" cx="50%" cy="42%" r="50%">
          <stop offset="0%"   stopColor="#010A12" stopOpacity="0.92"/>
          <stop offset="55%"  stopColor="#020E18" stopOpacity="0.62"/>
          <stop offset="100%" stopColor="#020E18" stopOpacity="0"/>
        </radialGradient>

        {/* Ambient glows */}
        <radialGradient id="hv-teal-amb" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#38AFD8" stopOpacity="0.14"/>
          <stop offset="100%" stopColor="#38AFD8" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="hv-copper-amb" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#D86138" stopOpacity="0.13"/>
          <stop offset="100%" stopColor="#D86138" stopOpacity="0"/>
        </radialGradient>

        {/* Liquid glass card fills — frosted cyan-white */}
        <linearGradient id="glass-fill" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(220,242,255,0.22)"/>
          <stop offset="55%"  stopColor="rgba(180,220,250,0.10)"/>
          <stop offset="100%" stopColor="rgba(160,210,240,0.06)"/>
        </linearGradient>
        <linearGradient id="glass-sheen" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.32)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </linearGradient>

        {/* Curve arrowhead */}
        <marker id="curve-arrow" viewBox="0 0 10 10" refX="8" refY="5"
          markerWidth="9" markerHeight="9" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#D86138"/>
        </marker>
      </defs>

      {/* ── Grid ── */}
      <rect width="560" height="410" fill="url(#hv-grid)" rx="24"/>

      {/* ── Ambient glows ── */}
      <ellipse cx="72"  cy="335" rx="74"  ry="78"  fill="url(#hv-teal-amb)"/>
      <ellipse cx="445" cy="150" rx="120" ry="128" fill="url(#hv-teal-amb)"/>
      <ellipse cx="240" cy="272" rx="220" ry="72"  fill="url(#hv-copper-amb)"/>

      {/* ── Subtle axes (blueprint feel) ── */}
      <line x1="38" y1="378" x2="540" y2="378" stroke="rgba(56,175,216,0.16)" strokeWidth="0.7"/>
      <line x1="38" y1="30"  x2="38"  y2="380" stroke="rgba(56,175,216,0.16)" strokeWidth="0.7"/>


      {/* ═══════════════════════════════
          PILOT BIOREACTOR
      ═══════════════════════════════ */}
      <rect x="52" y="316" width="40" height="44" rx="3" fill={VF} stroke={V} strokeWidth="1.5"/>
      <ellipse cx="72" cy="316" rx="20" ry="7" fill="rgba(255,255,255,0.07)" stroke={V} strokeWidth="1.5"/>
      <ellipse cx="72" cy="360" rx="20" ry="7" fill="rgba(255,255,255,0.04)" stroke={V2} strokeWidth="1.1"/>
      <line x1="72" y1="324" x2="72" y2="352" stroke={V2} strokeWidth="0.9" strokeDasharray="2 3"/>
      <line x1="54" y1="336" x2="90" y2="336" stroke={V2} strokeWidth="0.8"/>
      <line x1="72" y1="309" x2="72" y2="296" stroke={V} strokeWidth="1.7" strokeLinecap="round"/>
      <line x1="92" y1="338" x2="104" y2="338" stroke={V2} strokeWidth="1.2" strokeLinecap="round"/>
      <text x="72" y="376" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7.5" fontWeight="700" letterSpacing="1.3" fontFamily="system-ui">PILOT</text>
      <text x="72" y="386" textAnchor="middle" fill="rgba(255,255,255,0.36)" fontSize="6.5" letterSpacing="0.4" fontFamily="system-ui">10–500 L</text>


      {/* ═══════════════════════════════
          INDUSTRIAL BIOREACTOR  (10% larger)
          Body: x=380, y=72, w=130, h=156
      ═══════════════════════════════ */}

      {/* Dark radial backdrop */}
      <ellipse cx="445" cy="150" rx="130" ry="148" fill="url(#ind-backdrop)"/>

      {/* Scaffolding LEFT — clean rungs only */}
      <line x1="370" y1="76" x2="370" y2="244" stroke={IV3} strokeWidth="1"/>
      <line x1="370" y1="105" x2="380" y2="105" stroke={IV3} strokeWidth="0.9"/>
      <line x1="370" y1="143" x2="380" y2="143" stroke={IV3} strokeWidth="0.9"/>
      <line x1="370" y1="181" x2="380" y2="181" stroke={IV3} strokeWidth="0.9"/>
      <line x1="370" y1="219" x2="380" y2="219" stroke={IV3} strokeWidth="0.9"/>

      {/* Scaffolding RIGHT */}
      <line x1="520" y1="76" x2="520" y2="244" stroke={IV3} strokeWidth="1"/>
      <line x1="510" y1="105" x2="520" y2="105" stroke={IV3} strokeWidth="0.9"/>
      <line x1="510" y1="143" x2="520" y2="143" stroke={IV3} strokeWidth="0.9"/>
      <line x1="510" y1="181" x2="520" y2="181" stroke={IV3} strokeWidth="0.9"/>
      <line x1="510" y1="219" x2="520" y2="219" stroke={IV3} strokeWidth="0.9"/>

      {/* Dome top (rounded shoulder) */}
      <path d="M 380 88 Q 380 56 445 56 Q 510 56 510 88 Z"
        fill={IVF} stroke={IV} strokeWidth="2.8" strokeLinejoin="round"/>
      {/* Dome flange line */}
      <line x1="380" y1="88" x2="510" y2="88" stroke={IV} strokeWidth="2.2"/>
      {/* Manway hatch on dome */}
      <ellipse cx="455" cy="68" rx="14" ry="4" fill="rgba(180,245,255,0.10)" stroke={IV} strokeWidth="1.6"/>
      <ellipse cx="455" cy="68" rx="9" ry="2.4" fill="none" stroke={IV2} strokeWidth="1"/>

      {/* Single tall vent stack — left of dome */}
      <rect x="402" y="22" width="14" height="42" rx="2.2" fill={IVF} stroke={IV} strokeWidth="1.85"/>
      <ellipse cx="409" cy="22" rx="7.5" ry="3.4" fill="rgba(180,245,255,0.12)" stroke={IV} strokeWidth="1.85"/>
      {/* Cap rim on stack */}
      <line x1="400" y1="30" x2="418" y2="30" stroke={IV2} strokeWidth="1"/>
      {/* Stack-to-dome elbow */}
      <path d="M 409 64 Q 409 70 416 70 L 422 70" fill="none" stroke={IV2} strokeWidth="1.2" strokeLinecap="round"/>

      {/* Main cylinder body */}
      <rect x="380" y="88" width="130" height="132" rx="3"
        fill={IVF} stroke={IV} strokeWidth="2.8"/>

      {/* Construction bands */}
      <line x1="382" y1="120" x2="508" y2="120" stroke={IV2} strokeWidth="1"/>
      <line x1="382" y1="156" x2="508" y2="156" stroke={IV2} strokeWidth="1"/>
      <line x1="382" y1="192" x2="508" y2="192" stroke={IV2} strokeWidth="1"/>

      {/* Porthole / sight glass */}
      <circle cx="445" cy="156" r="17" fill={IVF} stroke={IV} strokeWidth="2.4"/>
      <circle cx="445" cy="156" r="11" fill="none" stroke={IV2} strokeWidth="1.2"/>
      <circle cx="433" cy="144" r="2" fill={IV}/>
      <circle cx="457" cy="144" r="2" fill={IV}/>
      <circle cx="433" cy="168" r="2" fill={IV}/>
      <circle cx="457" cy="168" r="2" fill={IV}/>

      {/* Bottom cap shadow line */}
      <ellipse cx="445" cy="220" rx="65" ry="6" fill="rgba(56,175,216,0.06)" stroke={IV2} strokeWidth="1.4"/>

      {/* Side control panel — right side, offset clear of body */}
      <line x1="510" y1="178" x2="538" y2="178" stroke={IV} strokeWidth="2" strokeLinecap="round"/>
      <line x1="538" y1="178" x2="538" y2="190" stroke={IV} strokeWidth="2" strokeLinecap="round"/>
      <rect x="528" y="190" width="22" height="30" rx="2.2" fill={IVF} stroke={IV} strokeWidth="1.6"/>
      <line x1="532" y1="198" x2="546" y2="198" stroke={IV2} strokeWidth="0.8"/>
      <line x1="532" y1="204" x2="546" y2="204" stroke={IV2} strokeWidth="0.8"/>
      <circle cx="539" cy="214" r="1.8" fill={IV}/>

      {/* Outlet pipe left */}
      <line x1="380" y1="204" x2="360" y2="204" stroke={IV2} strokeWidth="1.7" strokeLinecap="round"/>
      <rect x="354" y="200" width="8" height="9" rx="1.2" fill={IVF} stroke={IV2} strokeWidth="1"/>

      {/* Bottom skirt — small piping array */}
      <line x1="410" y1="220" x2="410" y2="234" stroke={IV2} strokeWidth="1.4"/>
      <line x1="425" y1="220" x2="425" y2="234" stroke={IV2} strokeWidth="1.4"/>
      <line x1="440" y1="220" x2="440" y2="234" stroke={IV2} strokeWidth="1.4"/>
      <line x1="455" y1="220" x2="455" y2="234" stroke={IV2} strokeWidth="1.4"/>
      <line x1="400" y1="234" x2="465" y2="234" stroke={IV2} strokeWidth="1.3" strokeLinecap="round"/>

      {/* Access stairs — left */}
      <line x1="356" y1="214" x2="376" y2="214" stroke={IV2} strokeWidth="1.1"/>
      <line x1="352" y1="226" x2="376" y2="226" stroke={IV2} strokeWidth="1.1"/>
      <line x1="356" y1="214" x2="352" y2="226" stroke={IV2} strokeWidth="1"/>
      <line x1="376" y1="214" x2="376" y2="226" stroke={IV2} strokeWidth="1"/>

      {/* Support legs */}
      <line x1="395" y1="234" x2="385" y2="250" stroke={IV2} strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="495" y1="234" x2="505" y2="250" stroke={IV2} strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="385" y1="250" x2="505" y2="250" stroke={IV2} strokeWidth="1.2" strokeLinecap="round"/>

      {/* Label — larger, brighter */}
      <text x="445" y="270" textAnchor="middle"
        fill="rgba(230,252,255,1)" fontSize="11.5" fontWeight="700" letterSpacing="2.2" fontFamily="system-ui">
        INDUSTRIAL
      </text>
      <text x="445" y="285" textAnchor="middle"
        fill="rgba(140,222,250,0.92)" fontSize="10" letterSpacing="0.7" fontFamily="system-ui">
        50k–500k L
      </text>


      {/* ═══════════════════════════════
          SCALE-UP CURVE — smooth bezier with arrowhead
      ═══════════════════════════════ */}

      {/* Area fill below curve */}
      <path
        d="M 72 316 C 180 295, 290 195, 380 178 L 380 378 L 72 378 Z"
        fill="url(#hv-area-fill)"
      />

      {/* Soft orange glow halo */}
      <path
        d="M 72 316 C 180 295, 290 195, 380 178"
        stroke="#D86138"
        strokeWidth="22"
        strokeOpacity="0.22"
        strokeLinecap="round"
        fill="none"
        filter="url(#hv-glow)"
      />

      {/* Main path with arrowhead leading into tank */}
      <path
        d="M 72 316 C 180 295, 290 195, 380 178"
        stroke="url(#hv-path-grad)"
        strokeWidth="3.4"
        strokeLinecap="round"
        fill="none"
        markerEnd="url(#curve-arrow)"
      />

      {/* Waypoint dots — exactly 4 (mid two shifted to clear larger cards) */}
      <circle cx="72"  cy="316" r="4.5" fill="#38AFD8" opacity="0.92" filter="url(#hv-dot-glow)"/>
      <circle cx="205" cy="260" r="3.4" fill="#D86138" filter="url(#hv-dot-glow)"/>
      <circle cx="294" cy="211" r="3.4" fill="#D86138" filter="url(#hv-dot-glow)"/>
      <circle cx="380" cy="178" r="4.5" fill="#D86138" opacity="0.95" filter="url(#hv-dot-glow)"/>

      {/* Waypoint labels — 4 readable captions */}
      {/* <text x="72"  y="290" textAnchor="middle" fill="rgba(140,222,250,0.78)" fontSize="8" fontWeight="500" fontFamily="system-ui">Pilot data</text> */}
      {/* <text x="205" y="250" textAnchor="middle" fill="rgba(255,200,140,0.85)" fontSize="8" fontWeight="500" fontFamily="system-ui">Model prediction</text> */}
      {/* <text x="294" y="201" textAnchor="middle" fill="rgba(255,200,140,0.85)" fontSize="8" fontWeight="500" fontFamily="system-ui">Scale-up confidence</text> */}


      {/* ═══════════════════════════════
          LIQUID GLASS WAYPOINT CARDS
          Frosted cyan-white · larger · readable
      ═══════════════════════════════ */}

      {/* ── Card 1: "Pilot evidence"  (near pilot vessel) ── */}
      <g filter="url(#card-shadow)">
        <rect x="14" y="206" width="214" height="92" rx="16"
          fill="url(#glass-fill)" stroke="rgba(180,220,245,0.22)" strokeWidth="0.8"/>
        {/* Indicator */}
        <circle cx="40" cy="248" r="8.5" fill="rgba(56,175,216,0.22)"/>
        <circle cx="40" cy="248" r="4.6" fill="#38AFD8"/>
        {/* Title */}
        <text x="60" y="244" fill="rgba(255,255,255,0.98)" fontSize="13.5" fontWeight="700" letterSpacing="-0.15" fontFamily="system-ui">Pilot evidence</text>
        {/* Sub */}
        <text x="60" y="262" fill="rgba(220,240,255,0.82)" fontSize="10.5" fontFamily="system-ui">Batch history ingested</text>
        <text x="60" y="278" fill="rgba(180,220,245,0.6)" fontSize="9" fontFamily="system-ui">Time-series · deviations · QA</text>
      </g>

      {/* ── Card 2: "Risk window"  (below center of curve) ── */}
      <g filter="url(#card-shadow)">
        <rect x="156" y="302" width="226" height="92" rx="16"
          fill="url(#glass-fill)" stroke="rgba(180,220,245,0.22)" strokeWidth="0.8"/>
        <circle cx="180" cy="344" r="8.5" fill="rgba(216,97,56,0.25)"/>
        <circle cx="180" cy="344" r="4.6" fill="#D86138"/>
        <text x="200" y="340" fill="rgba(255,255,255,0.98)" fontSize="13.5" fontWeight="700" letterSpacing="-0.15" fontFamily="system-ui">Risk window</text>
        <text x="200" y="358" fill="rgba(220,240,255,0.82)" fontSize="10.5" fontFamily="system-ui">Divergence drivers mapped</text>
        <text x="200" y="374" fill="rgba(180,220,245,0.6)" fontSize="9" fontFamily="system-ui">Where good and bad batches split</text>
      </g>

      {/* ── Card 3: "Scale-up package"  (above curve, near tank) ── */}
      <g filter="url(#card-shadow)">
        <rect x="150" y="84" width="234" height="96" rx="16"
          fill="url(#glass-fill)" stroke="rgba(180,220,245,0.26)" strokeWidth="0.8"/>
        <circle cx="174" cy="128" r="8.5" fill="rgba(180,245,255,0.28)"/>
        <circle cx="174" cy="128" r="4.6" fill="rgba(225,250,255,0.96)"/>
        <text x="194" y="124" fill="rgba(255,255,255,0.98)" fontSize="13.5" fontWeight="700" letterSpacing="-0.15" fontFamily="system-ui">Scale-up package</text>
        <text x="194" y="142" fill="rgba(220,240,255,0.82)" fontSize="10.5" fontFamily="system-ui">Model + envelope ready</text>
        <text x="194" y="158" fill="rgba(180,220,245,0.6)" fontSize="9" fontFamily="system-ui">Operating ranges · early warnings</text>
      </g>

    </svg>
  );
}
