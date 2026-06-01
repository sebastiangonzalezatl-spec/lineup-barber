import { AMBER, AMBER_BG, AMBER_DARK, INK, GRAY_TEXT, PAGE_BG, FONT } from "./theme.js";

export default function AnalyticsStub() {
  return (
    <div style={{ fontFamily: FONT, background: PAGE_BG, minHeight: "100vh", padding: 24 }}>
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 20, fontWeight: 500, color: INK }}>Analytics</div>
        <div style={{ fontSize: 12, color: GRAY_TEXT, marginTop: 2 }}>Performance insights for your shop</div>
      </div>
      <div style={{ background: AMBER_BG, border: `0.5px solid ${AMBER}33`, borderRadius: 12, padding: "16px 20px", marginBottom: 22, display: "flex", alignItems: "center", gap: 12 }}>
        <i className="ti ti-sparkles" style={{ fontSize: 18, color: AMBER }} />
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, color: AMBER }}>Analytics coming soon</div>
          <div style={{ fontSize: 12, color: AMBER_DARK, marginTop: 2 }}>We're building your dashboard. Below is a preview of what's coming.</div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20, filter: "blur(3px)", opacity: 0.5, pointerEvents: "none" }}>
        {[{ label: "Monthly revenue", value: "$2,840" },{ label: "Total clients", value: "94" },{ label: "Avg per visit", value: "$48" },{ label: "No-show rate", value: "4%" }].map(m => (
          <div key={m.label} style={{ background: "#fff", borderRadius: 10, padding: "14px 16px", border: "0.5px solid rgba(0,0,0,0.07)" }}>
            <div style={{ fontSize: 11, color: GRAY_TEXT, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.3 }}>{m.label}</div>
            <div style={{ fontSize: 24, fontWeight: 600, color: INK }}>{m.value}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "#fff", borderRadius: 12, border: "0.5px solid rgba(0,0,0,0.08)", padding: 20, filter: "blur(3px)", opacity: 0.5, pointerEvents: "none", height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "100%", height: 120, background: "#F3F3F3", borderRadius: 8, position: "relative", overflow: "hidden" }}>
          <svg width="100%" height="100%" viewBox="0 0 400 120" preserveAspectRatio="none">
            <polyline points="0,100 50,80 100,60 150,70 200,40 250,55 300,30 350,45 400,20" fill="none" stroke={AMBER} strokeWidth="2" />
            <polygon points="0,100 50,80 100,60 150,70 200,40 250,55 300,30 350,45 400,20 400,120 0,120" fill={`${AMBER}22`} />
          </svg>
        </div>
      </div>
    </div>
  );
}
