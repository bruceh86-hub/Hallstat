/**
 * Simple flow diagram for the BermeoValve™: forward drainage passes, backflow is reduced.
 * Schematic only — not to scale.
 */
export function ValveFlowDiagram() {
  return (
    <figure className="rounded-md bg-white p-5 ring-1 ring-black/5">
      <svg viewBox="0 0 520 170" role="img" aria-labelledby="valve-diagram-title valve-diagram-desc" className="w-full">
        <title id="valve-diagram-title">BermeoValve flow diagram</title>
        <desc id="valve-diagram-desc">
          Urine flows from the catheter through the BermeoValve into the drainage tubing toward the bag. Flow in the
          reverse direction, back toward the bladder, is designed to be reduced by the valve.
        </desc>
        <defs>
          <marker id="arrow-teal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#0e7c74" />
          </marker>
          <marker id="arrow-gray" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#8a96a8" />
          </marker>
        </defs>

        {/* catheter + tubing */}
        <rect x="20" y="70" width="190" height="22" rx="11" fill="#f4f6f8" stroke="#0b2545" strokeWidth="2" />
        <rect x="290" y="70" width="210" height="22" rx="11" fill="#f4f6f8" stroke="#0b2545" strokeWidth="2" />
        {/* valve */}
        <rect x="205" y="56" width="90" height="50" rx="12" fill="#ffffff" stroke="#0e7c74" strokeWidth="3" />
        <path d="M232 64 L268 81 L232 98" fill="none" stroke="#0e7c74" strokeWidth="3" strokeLinejoin="round" />

        <text x="20" y="54" fontSize="14" fill="#4a5a70">From catheter</text>
        <text x="500" y="54" fontSize="14" fill="#4a5a70" textAnchor="end">To drainage tubing &amp; bag</text>
        <text x="250" y="128" fontSize="14" fontWeight="600" fill="#0b2545" textAnchor="middle">BermeoValve™</text>

        {/* forward flow */}
        <line x1="60" y1="30" x2="460" y2="30" stroke="#0e7c74" strokeWidth="3" markerEnd="url(#arrow-teal)" />
        <text x="260" y="22" fontSize="13" fill="#0e7c74" textAnchor="middle" fontWeight="600">Drainage flow</text>

        {/* backflow */}
        <line x1="460" y1="152" x2="320" y2="152" stroke="#8a96a8" strokeWidth="3" strokeDasharray="6 5" markerEnd="url(#arrow-gray)" />
        <path d="M296 142 l14 20 M310 142 l-14 20" stroke="#8a96a8" strokeWidth="3" />
        <text x="460" y="142" fontSize="13" fill="#4a5a70" textAnchor="end">Backflow (reduced)</text>
      </svg>
      <figcaption className="mt-3 text-sm text-muted">Schematic, not to scale.</figcaption>
    </figure>
  );
}
