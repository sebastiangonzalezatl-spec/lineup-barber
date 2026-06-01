import { useState } from "react";
import { AMBER, AMBER_BG, AMBER_DARK, GREEN, GREEN_BG, INK, INK_SOFT, GRAY_TEXT, GRAY_SUB, GRAY_MUTED, GRAY_BG, PAGE_BG, FONT, BORDER, BORDER_SOFT, RADIUS_MD, RADIUS_LG } from "./theme.js";

export default function BarberProfile() {
  const [editing, setEditing] = useState(false);
  const [bio, setBio] = useState("Solo barber with 8+ years of experience. Specializing in fades, tapers, and precision line-ups. Walk-ins welcome, appointments preferred.");
  const [displayName, setDisplayName] = useState("Darius Moore");
  const galleryColors = ["#E5DDD4", "#D4DCE8", "#E5E5D4", "#D4E5DF", "#E5D4E5", "#D8D4E5"];

  return (
    <div style={{ fontFamily: FONT, background: PAGE_BG, minHeight: "100vh", padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 500, color: INK }}>My profile</div>
          <div style={{ fontSize: 12, color: GRAY_TEXT, marginTop: 2 }}>How clients see you on LineUp</div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button style={{ display: "flex", alignItems: "center", gap: 6, background: "#fff", border: "0.5px solid rgba(0,0,0,0.12)", borderRadius: 8, padding: "7px 12px", fontSize: 13, color: "#5A5A5F", cursor: "pointer" }}>
            <i className="ti ti-eye" style={{ fontSize: 14 }} /> Preview public page
          </button>
          <button onClick={() => setEditing(!editing)} style={{ background: editing ? AMBER : "#fff", color: editing ? "#fff" : INK, border: `0.5px solid ${editing ? AMBER : "rgba(0,0,0,0.12)"}`, borderRadius: 8, padding: "7px 14px", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
            {editing ? "Save changes" : "Edit profile"}
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "#fff", border: BORDER, borderRadius: RADIUS_LG, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
              <div style={{ position: "relative" }}>
                <div style={{ width: 68, height: 68, borderRadius: "50%", background: `linear-gradient(135deg, ${AMBER} 0%, #F5C542 100%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 600, color: "white" }}>DM</div>
                {editing && <div style={{ position: "absolute", bottom: 0, right: 0, width: 22, height: 22, background: AMBER, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><i className="ti ti-camera" style={{ fontSize: 12, color: "white" }} /></div>}
              </div>
              <div style={{ flex: 1 }}>
                {editing ? <input value={displayName} onChange={e => setDisplayName(e.target.value)} style={{ fontSize: 17, fontWeight: 600, color: INK, border: `1px solid ${AMBER}`, borderRadius: 6, padding: "4px 8px", width: "100%", background: "#FFFDF8", outline: "none" }} /> : <div style={{ fontSize: 17, fontWeight: 600, color: INK }}>{displayName}</div>}
                <div style={{ fontSize: 12, color: GRAY_TEXT, marginTop: 3 }}>Solo barber · Houston, TX</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 6 }}>
                  <span style={{ fontSize: 13, color: "#F5A623" }}>★ 4.9</span>
                  <span style={{ fontSize: 12, color: GRAY_TEXT }}>128 reviews</span>
                </div>
              </div>
            </div>
            <div style={{ borderTop: "0.5px solid rgba(0,0,0,0.06)", paddingTop: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: INK, marginBottom: 6 }}>Bio</div>
              {editing ? <textarea value={bio} onChange={e => setBio(e.target.value)} rows={4} style={{ width: "100%", fontSize: 13, color: INK_SOFT, lineHeight: 1.6, border: `1px solid ${AMBER}`, borderRadius: 6, padding: "8px 10px", background: "#FFFDF8", outline: "none", resize: "none", boxSizing: "border-box" }} /> : <div style={{ fontSize: 13, color: GRAY_SUB, lineHeight: 1.7 }}>{bio}</div>}
            </div>
          </div>

          <div style={{ background: "#fff", border: BORDER, borderRadius: RADIUS_LG, padding: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: INK, marginBottom: 14 }}>Your QR tag</div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 72, height: 72, background: "#F3F3F3", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="ti ti-qrcode" style={{ fontSize: 38, color: "#CCCCCC" }} />
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 2, color: INK, fontFamily: "monospace" }}>#A2BC31</div>
                <div style={{ fontSize: 12, color: GRAY_TEXT, marginTop: 4 }}>Clients scan or type this to find you instantly</div>
                <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                  <button style={{ fontSize: 12, background: "#F3F3F3", border: "none", borderRadius: 6, padding: "5px 10px", cursor: "pointer", color: GRAY_SUB }}><i className="ti ti-download" style={{ fontSize: 12 }} /> Download</button>
                  <button style={{ fontSize: 12, background: "#F3F3F3", border: "none", borderRadius: 6, padding: "5px 10px", cursor: "pointer", color: GRAY_SUB }}><i className="ti ti-copy" style={{ fontSize: 12 }} /> Copy link</button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: "#fff", border: BORDER, borderRadius: RADIUS_LG, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: INK }}>Hours</div>
              {editing && <span style={{ fontSize: 12, color: AMBER, cursor: "pointer" }}>Edit</span>}
            </div>
            {[{ day: "Mon–Fri", hours: "9:00 AM – 6:00 PM", open: true },{ day: "Saturday", hours: "9:00 AM – 4:00 PM", open: true },{ day: "Sunday", hours: "Closed", open: false }].map((h, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: i < 2 ? BORDER_SOFT : "none" }}>
                <div style={{ fontSize: 13, color: INK_SOFT }}>{h.day}</div>
                <div style={{ fontSize: 13, color: h.open ? INK_SOFT : GRAY_MUTED }}>{h.hours}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "#fff", border: BORDER, borderRadius: RADIUS_LG, overflow: "hidden" }}>
            <div style={{ padding: "14px 18px", borderBottom: "0.5px solid rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: INK }}>Photo gallery</div>
              {editing && <button style={{ fontSize: 12, background: AMBER_BG, color: AMBER, border: "none", borderRadius: 6, padding: "4px 10px", cursor: "pointer" }}>+ Add photo</button>}
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {galleryColors.map((bg, i) => (
                  <div key={i} style={{ aspectRatio: "4/3", background: bg, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                    <i className="ti ti-scissors" style={{ fontSize: 22, color: "rgba(0,0,0,0.18)" }} />
                    {editing && <div style={{ position: "absolute", top: 6, right: 6, width: 20, height: 20, background: "rgba(220,64,64,0.85)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><i className="ti ti-x" style={{ fontSize: 11, color: "white" }} /></div>}
                  </div>
                ))}
                {editing && <div style={{ aspectRatio: "4/3", background: "#F5F5F5", borderRadius: 8, border: "1.5px dashed rgba(0,0,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><i className="ti ti-plus" style={{ fontSize: 20, color: "#CCCCCC" }} /></div>}
              </div>
              <div style={{ fontSize: 11, color: GRAY_MUTED, marginTop: 10 }}>6 photos · drag to reorder</div>
            </div>
          </div>

          <div style={{ background: "#fff", border: BORDER, borderRadius: RADIUS_LG, overflow: "hidden" }}>
            <div style={{ padding: "14px 18px", borderBottom: "0.5px solid rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: INK }}>Services &amp; pricing</div>
              {editing && <button style={{ fontSize: 12, background: AMBER_BG, color: AMBER, border: "none", borderRadius: 6, padding: "4px 10px", cursor: "pointer" }}>+ Add service</button>}
            </div>
            {[{ name: "Fade", price: 35, duration: "30 min", popular: true },{ name: "Fade + Line-up", price: 45, duration: "45 min" },{ name: "Taper + Beard", price: 60, duration: "60 min" },{ name: "Beard trim", price: 20, duration: "20 min" },{ name: "Kids cut (under 12)", price: 25, duration: "25 min" }].map((svc, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "center", padding: "11px 18px", borderBottom: i < arr.length - 1 ? BORDER_SOFT : "none" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <span style={{ fontSize: 13, color: INK }}>{svc.name}</span>
                    {svc.popular && <span style={{ fontSize: 10, background: GREEN_BG, color: GREEN, padding: "2px 6px", borderRadius: 5 }}>Popular</span>}
                  </div>
                  <div style={{ fontSize: 12, color: GRAY_TEXT, marginTop: 1 }}>{svc.duration}</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: INK, marginRight: editing ? 12 : 0 }}>${svc.price}</div>
                {editing && <i className="ti ti-edit" style={{ fontSize: 14, color: GRAY_MUTED, cursor: "pointer" }} />}
              </div>
            ))}
          </div>

          <div style={{ background: AMBER_BG, border: `0.5px solid ${AMBER}22`, borderRadius: RADIUS_LG, padding: "14px 18px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: AMBER }}>Pro plan · $25/mo</div>
                <div style={{ fontSize: 12, color: AMBER_DARK, marginTop: 2 }}>Next billing: June 8, 2026</div>
              </div>
              <span style={{ fontSize: 11, background: AMBER, color: "white", padding: "3px 8px", borderRadius: 6, fontWeight: 500 }}>Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
