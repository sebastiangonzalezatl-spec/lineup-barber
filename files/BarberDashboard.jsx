import { useState } from "react";
import { AMBER, AMBER_BG, GREEN, GREEN_BG, INK, GRAY_TEXT, GRAY_SUB, GRAY_MUTED, GRAY_BG, PAGE_BG, CARD_BG, FONT, BORDER, BORDER_SOFT, RADIUS_MD, RADIUS_LG } from "./theme.js";

const appointments = [
  { time: "9:00 AM", name: "Marcus J.", service: "Fade + Line-up", duration: 45, price: 45, status: "done" },
  { time: "9:45 AM", name: "Deon W.", service: "Taper + Beard", duration: 60, price: 60, status: "done" },
  { time: "11:00 AM", name: "Kai B.", service: "Fade", duration: 30, price: 35, status: "current" },
  { time: "11:30 AM", name: "", service: "", duration: 30, price: 0, status: "open" },
  { time: "12:00 PM", name: "Liam A.", service: "Line-up", duration: 30, price: 25, status: "upcoming" },
  { time: "1:00 PM", name: "Carlos M.", service: "Fade + Beard", duration: 60, price: 65, status: "upcoming" },
  { time: "2:00 PM", name: "Jordan P.", service: "Fade", duration: 45, price: 40, status: "upcoming" },
  { time: "3:00 PM", name: "", service: "", duration: 30, price: 0, status: "open" },
  { time: "3:30 PM", name: "Noah T.", service: "Taper + Beard", duration: 60, price: 60, status: "upcoming" },
];
const queueData = [
  { name: "Alex R.", wait: "22 min" }, { name: "Ben C.", wait: "35 min" },
  { name: "Malik S.", wait: "41 min" }, { name: "Tyrese H.", wait: "1 hr" },
];
const services = [
  { name: "Fade", price: 35, duration: "30 min" }, { name: "Fade + Line-up", price: 45, duration: "45 min" },
  { name: "Taper + Beard", price: 60, duration: "60 min" }, { name: "Beard trim", price: 20, duration: "20 min" },
];
const weekDays = [
  { label: "Mon", slots: 7, total: 9 }, { label: "Tue", slots: 9, total: 9 }, { label: "Wed", slots: 5, total: 9 },
  { label: "Thu", slots: 8, total: 9 }, { label: "Fri", slots: 7, total: 9, today: true },
  { label: "Sat", slots: 9, total: 9 }, { label: "Sun", slots: 0, total: 9 },
];
const statusMeta = {
  done:     { bar: "#C0C0C0", badge: "#F0F0F0", badgeText: "#888", label: "done" },
  current:  { bar: AMBER, badge: AMBER_BG, badgeText: AMBER, label: "in chair" },
  open:     { bar: "#DCDCDC", badge: "#F4F4F4", badgeText: "#AAA", label: "open" },
  upcoming: { bar: GREEN, badge: GREEN_BG, badgeText: GREEN, label: "confirmed" },
};
const navItems = [
  { icon: "ti-layout-dashboard", label: "Dashboard" }, { icon: "ti-calendar", label: "Schedule" },
  { icon: "ti-users", label: "Clients" }, { icon: "ti-photo", label: "Gallery" },
  { icon: "ti-chart-bar", label: "Analytics", soon: true }, { icon: "ti-settings", label: "Settings" },
];

export default function BarberDashboard() {
  const [scheduleView, setScheduleView] = useState("day");
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [selectedAppt, setSelectedAppt] = useState(null);

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: FONT, background: PAGE_BG, overflow: "hidden" }}>
      <div style={{ width: 220, flexShrink: 0, background: "#fff", borderRight: "0.5px solid rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "22px 20px 18px", borderBottom: "0.5px solid rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5, color: INK }}>Line<span style={{ color: AMBER }}>Up</span></div>
          <div style={{ fontSize: 10, color: GRAY_TEXT, marginTop: 2, letterSpacing: 1, textTransform: "uppercase" }}>Barber Portal</div>
        </div>
        <div style={{ flex: 1, padding: "12px 10px" }}>
          {navItems.map(item => (
            <div key={item.label} onClick={() => setActiveNav(item.label)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 8, marginBottom: 2, cursor: "pointer", background: activeNav === item.label ? AMBER_BG : "transparent", transition: "background 0.15s" }}>
              <i className={`ti ${item.icon}`} style={{ fontSize: 16, color: activeNav === item.label ? AMBER : GRAY_TEXT }} />
              <span style={{ fontSize: 13, color: activeNav === item.label ? AMBER : GRAY_SUB, fontWeight: activeNav === item.label ? 500 : 400 }}>{item.label}</span>
              {item.soon && <span style={{ marginLeft: "auto", fontSize: 9, background: "#F0F0F0", color: "#AAA", padding: "2px 5px", borderRadius: 4 }}>Soon</span>}
            </div>
          ))}
        </div>
        <div style={{ padding: "14px 18px", borderTop: "0.5px solid rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${AMBER} 0%, #F5C542 100%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600, color: "white", flexShrink: 0 }}>DM</div>
            <div><div style={{ fontSize: 13, fontWeight: 500, color: INK }}>Darius Moore</div><div style={{ fontSize: 11, color: GRAY_TEXT, letterSpacing: 0.3 }}>#A2BC31</div></div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflow: "auto", padding: "26px 26px 32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
          <div>
            <div style={{ fontSize: 21, fontWeight: 500, color: INK }}>Good morning, Darius</div>
            <div style={{ fontSize: 13, color: GRAY_TEXT, marginTop: 2 }}>Friday, May 8 · 7 appointments today</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button style={{ display: "flex", alignItems: "center", gap: 6, background: "#fff", border: "0.5px solid rgba(0,0,0,0.12)", borderRadius: 8, padding: "7px 12px", fontSize: 13, color: GRAY_SUB, cursor: "pointer" }}><i className="ti ti-qrcode" style={{ fontSize: 15 }} />My QR tag</button>
            <button style={{ background: AMBER, color: "white", border: "none", borderRadius: 8, padding: "7px 16px", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>+ New slot</button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 12, marginBottom: 22 }}>
          {[{label:"Today's earnings",value:"$340",sub:"+12% vs last Fri",subColor:GREEN},{label:"Appointments",value:"7 / 9",sub:"2 slots remaining",subColor:GRAY_TEXT},{label:"ASAP queue",value:"4",sub:"waiting for slot",subColor:AMBER},{label:"Rating",value:"4.9 ★",sub:"128 reviews",subColor:GRAY_TEXT}].map(m => (
            <div key={m.label} style={{ background: "#fff", borderRadius: 10, padding: "14px 16px", border: "0.5px solid rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize: 11, color: GRAY_TEXT, marginBottom: 6, letterSpacing: 0.3, textTransform: "uppercase" }}>{m.label}</div>
              <div style={{ fontSize: 24, fontWeight: 600, color: INK, letterSpacing: -0.5 }}>{m.value}</div>
              <div style={{ fontSize: 11, color: m.subColor, marginTop: 4 }}>{m.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 18, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#fff", border: BORDER, borderRadius: RADIUS_LG, overflow: "hidden" }}>
              <div style={{ padding: "14px 18px", borderBottom: "0.5px solid rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: INK }}>Today's schedule</div>
                <div style={{ display: "flex", gap: 5 }}>
                  {["day","week"].map(v => (<button key={v} onClick={() => setScheduleView(v)} style={{ padding: "4px 10px", borderRadius: 6, border: "none", background: scheduleView === v ? AMBER : "#F0F0F0", color: scheduleView === v ? "#fff" : GRAY_TEXT, fontSize: 12, cursor: "pointer", fontWeight: scheduleView === v ? 500 : 400 }}>{v.charAt(0).toUpperCase() + v.slice(1)}</button>))}
                </div>
              </div>
              {appointments.map((appt, i) => {
                const s = statusMeta[appt.status]; const isOpen = appt.status === "open";
                return (
                  <div key={i} onClick={() => !isOpen && setSelectedAppt(appt === selectedAppt ? null : appt)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 18px", borderBottom: i < appointments.length - 1 ? "0.5px solid rgba(0,0,0,0.05)" : "none", cursor: isOpen ? "default" : "pointer", background: selectedAppt === appt ? "#FAFAFA" : "transparent", transition: "background 0.12s" }}>
                    <div style={{ width: 58, fontSize: 12, color: GRAY_TEXT, flexShrink: 0 }}>{appt.time}</div>
                    <div style={{ width: 3, height: 38, borderRadius: 2, background: s.bar, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      {isOpen ? <div style={{ fontSize: 12, color: "#BBB", fontStyle: "italic" }}>Open slot · {appt.duration} min</div> : <><div style={{ fontSize: 13, fontWeight: 500, color: INK }}>{appt.name}</div><div style={{ fontSize: 12, color: GRAY_TEXT, marginTop: 1 }}>{appt.service} · {appt.duration} min</div></>}
                    </div>
                    {appt.price > 0 ? (<div style={{ textAlign: "right" }}><div style={{ fontSize: 13, fontWeight: 500, color: INK }}>${appt.price}</div><div style={{ fontSize: 10, background: s.badge, color: s.badgeText, padding: "2px 7px", borderRadius: 5, marginTop: 3, display: "inline-block" }}>{s.label}</div></div>) : (<div style={{ fontSize: 10, background: s.badge, color: s.badgeText, padding: "2px 7px", borderRadius: 5 }}>{s.label}</div>)}
                  </div>
                );
              })}
            </div>

            <div style={{ background: "#fff", border: BORDER, borderRadius: RADIUS_LG, padding: "16px 18px" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: INK, marginBottom: 14 }}>This week</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, textAlign: "center" }}>
                {weekDays.map(d => {
                  const pct = d.total > 0 ? Math.round((d.slots / d.total) * 100) : 0; const full = pct === 100;
                  return (
                    <div key={d.label}>
                      <div style={{ fontSize: 11, color: d.today ? AMBER : GRAY_TEXT, marginBottom: 6, fontWeight: d.today ? 600 : 400 }}>{d.label}</div>
                      <div style={{ height: 48, background: "#F3F3F3", borderRadius: 5, position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: `${pct}%`, background: d.today ? AMBER : full ? GREEN : "rgba(0,0,0,0.15)", borderRadius: "4px 4px 0 0", opacity: 0.8, transition: "height 0.3s" }} />
                      </div>
                      <div style={{ fontSize: 11, color: GRAY_MUTED, marginTop: 4 }}>{d.slots > 0 ? `${d.slots}/${d.total}` : "—"}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: "#fff", border: BORDER, borderRadius: RADIUS_LG, overflow: "hidden" }}>
              <div style={{ padding: "12px 16px", borderBottom: "0.5px solid rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}><i className="ti ti-bolt" style={{ fontSize: 15, color: AMBER }} /><span style={{ fontSize: 13, fontWeight: 500, color: INK }}>ASAP queue</span></div>
                <span style={{ fontSize: 11, background: AMBER_BG, color: AMBER, padding: "3px 8px", borderRadius: 6, fontWeight: 500 }}>4 waiting</span>
              </div>
              {queueData.map((q, i) => (<div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 16px", borderBottom: i < queueData.length - 1 ? "0.5px solid rgba(0,0,0,0.05)" : "none" }}><div style={{ width: 22, height: 22, borderRadius: "50%", background: "#F3F3F3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: GRAY_TEXT, fontWeight: 600, flexShrink: 0 }}>{i + 1}</div><div style={{ flex: 1 }}><div style={{ fontSize: 13, fontWeight: 500, color: INK }}>{q.name}</div><div style={{ fontSize: 11, color: GRAY_TEXT }}>Waiting {q.wait}</div></div><i className="ti ti-message" style={{ fontSize: 14, color: GRAY_MUTED }} /></div>))}
              <div style={{ padding: "9px 16px", background: "#FAFAFA" }}><div style={{ fontSize: 11, color: GRAY_MUTED }}>SMS fires automatically when a slot opens</div></div>
            </div>

            <div style={{ background: "#fff", border: BORDER, borderRadius: RADIUS_LG, overflow: "hidden" }}>
              <div style={{ padding: "12px 16px", borderBottom: "0.5px solid rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}><span style={{ fontSize: 13, fontWeight: 500, color: INK }}>Portfolio gallery</span><span style={{ fontSize: 12, color: AMBER, cursor: "pointer" }}>Manage →</span></div>
              <div style={{ padding: "12px 16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6, marginBottom: 10 }}>
                  {["#E5DDD4","#D4DCE8","#E5E5D4","#D4E5DF","#E5D4E5"].map((bg, i) => (<div key={i} style={{ aspectRatio: "1", background: bg, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}><i className="ti ti-scissors" style={{ fontSize: 18, color: "rgba(0,0,0,0.2)" }} /></div>))}
                  <div style={{ aspectRatio: "1", background: "#F5F5F5", borderRadius: 7, border: "1.5px dashed rgba(0,0,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><i className="ti ti-plus" style={{ fontSize: 17, color: "#BBBBBB" }} /></div>
                </div>
                <div style={{ fontSize: 11, color: GRAY_MUTED }}>5 photos · shown on your public profile</div>
              </div>
            </div>

            <div style={{ background: "#fff", border: BORDER, borderRadius: RADIUS_LG, overflow: "hidden" }}>
              <div style={{ padding: "12px 16px", borderBottom: "0.5px solid rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}><span style={{ fontSize: 13, fontWeight: 500, color: INK }}>Services &amp; pricing</span><span style={{ fontSize: 12, color: AMBER, cursor: "pointer" }}>Edit →</span></div>
              {services.map((svc, i) => (<div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 16px", borderBottom: i < services.length - 1 ? "0.5px solid rgba(0,0,0,0.05)" : "none" }}><div><div style={{ fontSize: 13, color: INK }}>{svc.name}</div><div style={{ fontSize: 11, color: GRAY_TEXT }}>{svc.duration}</div></div><div style={{ fontSize: 13, fontWeight: 500, color: INK }}>${svc.price}</div></div>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
