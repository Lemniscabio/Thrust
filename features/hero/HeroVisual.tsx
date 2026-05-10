// Hero visual — scale-up journey graphic
// Pilot bioreactor (left) → curved path with stage waypoints → industrial tanks (right)
// Three info cards anchored at key journey moments.

export function HeroVisual() {
  return (
    <div
      className="relative select-none rounded-3xl overflow-hidden"
      style={{
        background: 'linear-gradient(158deg, #071E2B 0%, #0D3547 55%, #071E2B 100%)',
        boxShadow:
          '0 0 0 1px rgba(56,175,216,0.14), 0 32px 80px rgba(4,30,39,0.6), inset 0 1px 0 rgba(255,255,255,0.07)',
      }}
    >
      <svg
        viewBox="0 0 540 400"
        fill="none"
        className="w-full"
        style={{ height: 'auto', display: 'block' }}
      >
        <defs>
          {/* Subtle scientific grid */}
          <pattern id="hv-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(56,175,216,0.048)" strokeWidth="0.5"/>
          </pattern>

          {/* Copper glow for path */}
          <filter id="hv-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="hv-glow-dot" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          {/* Path gradient: teal → copper → teal */}
          <linearGradient id="hv-path-grad" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%"   stopColor="#38AFD8" stopOpacity="0.75"/>
            <stop offset="30%"  stopColor="#D86138"/>
            <stop offset="65%"  stopColor="#D86138" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#38AFD8" stopOpacity="0.75"/>
          </linearGradient>

          {/* Vessel ambient teal glow */}
          <radialGradient id="hv-teal-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#38AFD8" stopOpacity="0.13"/>
            <stop offset="100%" stopColor="#38AFD8" stopOpacity="0"/>
          </radialGradient>
          {/* Path ambient copper glow */}
          <radialGradient id="hv-copper-amb" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#D86138" stopOpacity="0.16"/>
            <stop offset="100%" stopColor="#D86138" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* ── Grid backdrop ── */}
        <rect width="540" height="400" fill="url(#hv-grid)"/>

        {/* ── Ambient glows ── */}
        <ellipse cx="74"  cy="205" rx="58"  ry="68" fill="url(#hv-teal-glow)"/>
        <ellipse cx="440" cy="195" rx="78"  ry="80" fill="url(#hv-teal-glow)"/>
        <ellipse cx="260" cy="188" rx="190" ry="62" fill="url(#hv-copper-amb)"/>

        {/* ════════════════════════════════════
            PILOT BIOREACTOR (small, left)
            Center: x=74, body y=165→245
        ════════════════════════════════════ */}
        {/* Body */}
        <rect x="54" y="165" width="40" height="80" rx="4"
          fill="rgba(56,175,216,0.07)" stroke="rgba(56,175,216,0.55)" strokeWidth="1.3"/>
        {/* Top cap */}
        <ellipse cx="74" cy="165" rx="20" ry="7.5"
          fill="rgba(56,175,216,0.12)" stroke="rgba(56,175,216,0.62)" strokeWidth="1.3"/>
        {/* Bottom cap */}
        <ellipse cx="74" cy="245" rx="20" ry="7.5"
          fill="rgba(56,175,216,0.09)" stroke="rgba(56,175,216,0.48)" strokeWidth="1.3"/>
        {/* Agitator shaft */}
        <line x1="74" y1="175" x2="74" y2="235"
          stroke="rgba(56,175,216,0.32)" strokeWidth="0.9" strokeDasharray="3 4"/>
        {/* Baffles */}
        <line x1="56" y1="197" x2="92" y2="197" stroke="rgba(56,175,216,0.38)" strokeWidth="0.9"/>
        <line x1="56" y1="208" x2="92" y2="208" stroke="rgba(56,175,216,0.38)" strokeWidth="0.9"/>
        <line x1="56" y1="219" x2="92" y2="219" stroke="rgba(56,175,216,0.38)" strokeWidth="0.9"/>
        {/* Inlet pipe top */}
        <line x1="74" y1="157" x2="74" y2="142"
          stroke="rgba(56,175,216,0.62)" strokeWidth="1.8" strokeLinecap="round"/>
        {/* Outlet pipe right */}
        <line x1="94" y1="218" x2="106" y2="218"
          stroke="rgba(56,175,216,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Sampling port */}
        <circle cx="54" cy="200" r="2.5"
          fill="rgba(56,175,216,0.3)" stroke="rgba(56,175,216,0.6)" strokeWidth="0.8"/>
        {/* Label */}
        <text x="74" y="267" textAnchor="middle"
          fill="rgba(56,175,216,0.82)" fontSize="7.5" fontWeight="700" letterSpacing="1.4">
          PILOT SCALE
        </text>
        <text x="74" y="277" textAnchor="middle"
          fill="rgba(128,212,250,0.42)" fontSize="6.5" letterSpacing="0.5">
          10 – 500 L
        </text>

        {/* ════════════════════════════════════
            INDUSTRIAL TANKS (large, right)
            Tank 1 (front): cx=432, body y=128→246
            Tank 2 (rear):  cx=476, slightly lighter
        ════════════════════════════════════ */}
        {/* Tank 2 — rear */}
        <rect x="453" y="136" width="46" height="108" rx="4"
          fill="rgba(56,175,216,0.04)" stroke="rgba(56,175,216,0.28)" strokeWidth="1"/>
        <ellipse cx="476" cy="136" rx="23" ry="8.5"
          fill="rgba(56,175,216,0.06)" stroke="rgba(56,175,216,0.28)" strokeWidth="1"/>
        <ellipse cx="476" cy="244" rx="23" ry="8.5"
          fill="rgba(56,175,216,0.04)" stroke="rgba(56,175,216,0.28)" strokeWidth="1"/>
        <line x1="476" y1="100" x2="476" y2="114"
          stroke="rgba(56,175,216,0.38)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="476" y1="174" x2="476" y2="234"
          stroke="rgba(56,175,216,0.2)" strokeWidth="0.8" strokeDasharray="3 4"/>

        {/* Tank 1 — front */}
        <rect x="406" y="126" width="54" height="120" rx="4"
          fill="rgba(56,175,216,0.07)" stroke="rgba(56,175,216,0.55)" strokeWidth="1.3"/>
        <ellipse cx="433" cy="126" rx="27" ry="10"
          fill="rgba(56,175,216,0.12)" stroke="rgba(56,175,216,0.62)" strokeWidth="1.3"/>
        <ellipse cx="433" cy="246" rx="27" ry="10"
          fill="rgba(56,175,216,0.09)" stroke="rgba(56,175,216,0.48)" strokeWidth="1.3"/>
        {/* Agitator */}
        <line x1="433" y1="140" x2="433" y2="232"
          stroke="rgba(56,175,216,0.28)" strokeWidth="0.9" strokeDasharray="3 4"/>
        {/* Baffles */}
        <line x1="408" y1="176" x2="458" y2="176" stroke="rgba(56,175,216,0.28)" strokeWidth="0.9"/>
        <line x1="408" y1="186" x2="458" y2="186" stroke="rgba(56,175,216,0.28)" strokeWidth="0.9"/>
        <line x1="408" y1="196" x2="458" y2="196" stroke="rgba(56,175,216,0.28)" strokeWidth="0.9"/>
        <line x1="408" y1="206" x2="458" y2="206" stroke="rgba(56,175,216,0.28)" strokeWidth="0.9"/>
        <line x1="408" y1="216" x2="458" y2="216" stroke="rgba(56,175,216,0.28)" strokeWidth="0.9"/>
        {/* Inlet top */}
        <line x1="433" y1="116" x2="433" y2="100"
          stroke="rgba(56,175,216,0.62)" strokeWidth="1.8" strokeLinecap="round"/>
        {/* Side pipe left */}
        <line x1="406" y1="192" x2="394" y2="192"
          stroke="rgba(56,175,216,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Sampling port */}
        <circle cx="460" cy="200" r="2.5"
          fill="rgba(56,175,216,0.3)" stroke="rgba(56,175,216,0.6)" strokeWidth="0.8"/>
        {/* Label */}
        <text x="442" y="270" textAnchor="middle"
          fill="rgba(56,175,216,0.82)" fontSize="7.5" fontWeight="700" letterSpacing="1.4">
          INDUSTRIAL SCALE
        </text>
        <text x="442" y="280" textAnchor="middle"
          fill="rgba(128,212,250,0.42)" fontSize="6.5" letterSpacing="0.5">
          50k – 500k L
        </text>

        {/* ════════════════════════════════════
            JOURNEY PATH
            M 94 218  →  C bezier  →  394 192
        ════════════════════════════════════ */}
        {/* Deep copper ambient glow */}
        <path
          d="M 94 218 C 158 200, 220 181, 272 177 C 324 173, 366 178, 394 192"
          stroke="#D86138"
          strokeWidth="14"
          strokeOpacity="0.12"
          strokeLinecap="round"
          filter="url(#hv-glow)"
        />
        {/* Soft mid glow */}
        <path
          d="M 94 218 C 158 200, 220 181, 272 177 C 324 173, 366 178, 394 192"
          stroke="#D86138"
          strokeWidth="3.5"
          strokeOpacity="0.22"
          strokeLinecap="round"
        />
        {/* Crisp dashed path */}
        <path
          d="M 94 218 C 158 200, 220 181, 272 177 C 324 173, 366 178, 394 192"
          stroke="url(#hv-path-grad)"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeDasharray="5.5 4"
        />

        {/* ════════════════════════════════════
            STAGE WAYPOINTS
        ════════════════════════════════════ */}
        {/* BASELINE  ~t=0.22  x=158, y=200 */}
        <circle cx="158" cy="200" r="3.5" fill="#38AFD8" filter="url(#hv-glow-dot)"/>
        <circle cx="158" cy="200" r="6.5" fill="none" stroke="#38AFD8" strokeWidth="0.7" strokeOpacity="0.35"/>
        <text x="158" y="189" textAnchor="middle"
          fill="rgba(128,212,250,0.72)" fontSize="7" fontWeight="600" letterSpacing="0.9">
          BASELINE
        </text>

        {/* MODEL DEV  ~t=0.42  x=224, y=181 */}
        <circle cx="224" cy="181" r="3.5" fill="#D86138" filter="url(#hv-glow-dot)"/>
        <circle cx="224" cy="181" r="6.5" fill="none" stroke="#D86138" strokeWidth="0.7" strokeOpacity="0.45"/>
        <text x="224" y="170" textAnchor="middle"
          fill="rgba(216,97,56,0.85)" fontSize="7" fontWeight="600" letterSpacing="0.9">
          MODEL DEV
        </text>

        {/* DOE & OPT  ~t=0.60  x=292, y=177 */}
        <circle cx="292" cy="177" r="3.5" fill="#D86138" filter="url(#hv-glow-dot)"/>
        <circle cx="292" cy="177" r="6.5" fill="none" stroke="#D86138" strokeWidth="0.7" strokeOpacity="0.45"/>
        <text x="292" y="166" textAnchor="middle"
          fill="rgba(216,97,56,0.85)" fontSize="7" fontWeight="600" letterSpacing="0.9">
          DOE &amp; OPT
        </text>

        {/* SCALE-UP DECISION  ~t=0.80  x=358, y=180 */}
        <circle cx="358" cy="180" r="4" fill="#38AFD8" filter="url(#hv-glow-dot)"/>
        <circle cx="358" cy="180" r="8" fill="none" stroke="#38AFD8" strokeWidth="0.8" strokeOpacity="0.4"/>
        <text x="358" y="168" textAnchor="middle"
          fill="rgba(128,212,250,0.72)" fontSize="7" fontWeight="600" letterSpacing="0.9">
          SCALE-UP
        </text>
        <text x="358" y="158" textAnchor="middle"
          fill="rgba(128,212,250,0.72)" fontSize="7" fontWeight="600" letterSpacing="0.9">
          DECISION
        </text>

        {/* ════════════════════════════════════
            INFO CARD 1 — PILOT EVIDENCE (top-left)
        ════════════════════════════════════ */}
        {/* Card body */}
        <rect x="14" y="14" width="156" height="76" rx="11"
          fill="rgba(7,28,43,0.84)" stroke="rgba(128,212,250,0.2)" strokeWidth="1"/>
        {/* Inner shine */}
        <rect x="15" y="15" width="154" height="22" rx="10"
          fill="rgba(255,255,255,0.035)"/>
        {/* Icon area */}
        <rect x="22" y="22" width="26" height="26" rx="7" fill="rgba(56,175,216,0.2)"/>
        {/* DB icon: stacked ellipses */}
        <ellipse cx="35" cy="28.5" rx="7.5" ry="2.8" fill="none" stroke="#80D4FA" strokeWidth="1.2"/>
        <path d="M 27.5 28.5 L 27.5 36.5 Q 27.5 39.3 35 39.3 Q 42.5 39.3 42.5 36.5 L 42.5 28.5"
          fill="none" stroke="#80D4FA" strokeWidth="1.2"/>
        <path d="M 27.5 32.5 Q 27.5 35 35 35 Q 42.5 35 42.5 32.5"
          fill="none" stroke="#80D4FA" strokeWidth="0.8" strokeOpacity="0.6"/>
        {/* Title */}
        <text x="54" y="33" fill="white" fontSize="11.5" fontWeight="700">Pilot evidence</text>
        {/* Divider */}
        <line x1="22" y1="52" x2="158" y2="52" stroke="rgba(128,212,250,0.1)" strokeWidth="0.8"/>
        {/* Description */}
        <text x="22" y="63" fill="rgba(128,212,250,0.62)" fontSize="9.5">
          Batch records, trends,
        </text>
        <text x="22" y="76" fill="rgba(128,212,250,0.62)" fontSize="9.5">
          deviations, operating history.
        </text>
        {/* Connector to path start */}
        <line x1="88" y1="90" x2="100" y2="210"
          stroke="rgba(56,175,216,0.18)" strokeWidth="0.9" strokeDasharray="3 5"/>

        {/* ════════════════════════════════════
            INFO CARD 2 — RISK WINDOW (center, copper)
        ════════════════════════════════════ */}
        <rect x="168" y="248" width="168" height="90" rx="11"
          fill="rgba(59,21,8,0.92)" stroke="#D86138" strokeWidth="1.2"/>
        {/* Inner shine */}
        <rect x="169" y="249" width="166" height="22" rx="10"
          fill="rgba(255,255,255,0.04)"/>
        {/* Icon area */}
        <rect x="177" y="256" width="26" height="26" rx="7" fill="rgba(216,97,56,0.28)"/>
        {/* Warning triangle icon */}
        <path d="M 190 260 L 197 272 L 183 272 Z"
          fill="none" stroke="#F3907A" strokeWidth="1.3" strokeLinejoin="round"/>
        <line x1="190" y1="263.5" x2="190" y2="267.5"
          stroke="#F3907A" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="190" cy="270" r="0.9" fill="#F3907A"/>
        {/* Title */}
        <text x="209" y="268" fill="white" fontSize="12" fontWeight="700">Risk window</text>
        {/* Divider */}
        <line x1="177" y1="286" x2="324" y2="286" stroke="rgba(216,97,56,0.2)" strokeWidth="0.8"/>
        {/* Description */}
        <text x="177" y="298" fill="rgba(252,237,235,0.72)" fontSize="10">
          Where similar runs begin
        </text>
        <text x="177" y="312" fill="rgba(252,237,235,0.72)" fontSize="10">
          to separate — and why.
        </text>
        {/* Connector to path */}
        <line x1="252" y1="248" x2="268" y2="184"
          stroke="rgba(216,97,56,0.28)" strokeWidth="0.9" strokeDasharray="3 5"/>

        {/* ════════════════════════════════════
            INFO CARD 3 — SCALE-UP PACKAGE (bottom-right)
        ════════════════════════════════════ */}
        <rect x="334" y="296" width="178" height="96" rx="11"
          fill="rgba(7,28,43,0.84)" stroke="rgba(128,212,250,0.2)" strokeWidth="1"/>
        <rect x="335" y="297" width="176" height="22" rx="10"
          fill="rgba(255,255,255,0.035)"/>
        {/* Icon area */}
        <rect x="342" y="304" width="26" height="26" rx="7" fill="rgba(56,175,216,0.2)"/>
        {/* Clipboard/checkmark icon */}
        <rect x="347" y="307" width="15" height="17" rx="2"
          fill="none" stroke="#80D4FA" strokeWidth="1.1"/>
        <path d="M 350 307 L 350 305 Q 350 303 354.5 303 Q 359 303 359 305 L 359 307"
          fill="none" stroke="#80D4FA" strokeWidth="1.1"/>
        <path d="M 350 313 L 352.5 315.5 L 357 311"
          stroke="#80D4FA" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Title */}
        <text x="374" y="316" fill="white" fontSize="11.5" fontWeight="700">Scale-up package</text>
        {/* Divider */}
        <line x1="342" y1="334" x2="500" y2="334" stroke="rgba(128,212,250,0.1)" strokeWidth="0.8"/>
        {/* Checklist items */}
        <CheckRow x={342} y={350} label="Risk diagnosis" />
        <CheckRow x={342} y={366} label="Predictive models" />
        <CheckRow x={342} y={382} label="Decision rules" />
        {/* Connector to waypoint */}
        <line x1="368" y1="296" x2="356" y2="188"
          stroke="rgba(56,175,216,0.18)" strokeWidth="0.9" strokeDasharray="3 5"/>

      </svg>
    </div>
  );
}

/* ── Checklist row used inside SVG ── */
function CheckRow({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <circle cx={x + 5} cy={y - 4} r="4.5"
        fill="none" stroke="rgba(128,212,250,0.45)" strokeWidth="1"/>
      <path
        d={`M ${x + 2.5} ${y - 4} L ${x + 4.5} ${y - 2} L ${x + 8} ${y - 7}`}
        stroke="#80D4FA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
      />
      <text x={x + 15} y={y} fill="rgba(128,212,250,0.72)" fontSize="10">{label}</text>
    </g>
  );
}
