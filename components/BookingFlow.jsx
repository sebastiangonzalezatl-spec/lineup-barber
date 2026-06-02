'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AMBER, AMBER_BG, AMBER_LIGHT, AMBER_DARK, GREEN, GREEN_BG, RED, RED_BG, INK, INK_SOFT, GRAY_TEXT, GRAY_SUB, GRAY_MUTED, GRAY_BG, PAGE_BG, CARD_BG, FONT, BORDER, BORDER_SOFT, BORDER_MED, RADIUS_SM, RADIUS_MD, RADIUS_LG, RADIUS_XL } from '@/components/theme';

const BARBER = { name: 'Darius Moore', tag: '#A2BC31', location: 'Houston, TX', rating: 4.9, reviews: 128, initials: 'DM' };
const SERVICES = [
  { id: 1, name: 'Fade', price: 35, duration: 30, popular: true },
  { id: 2, name: 'Fade + Line-up', price: 45, duration: 45, popular: false },
  { id: 3, name: 'Taper + Beard', price: 60, duration: 60, popular: false },
  { id: 4, name: 'Beard trim', price: 20, duration: 20, popular: false },
  { id: 5, name: 'Kids cut (under 12)', price: 25, duration: 25, popular: false },
];
const MONTH_DAYS = Array.from({ length: 30 }, (_, i) => i + 1);
const TODAY = 1;
const CLOSED_DAYS = [7, 14, 21, 28];
function getSlotsForDay(day) {
  if (CLOSED_DAYS.includes(day)) return [];
  if ([3, 10, 17, 22].includes(day)) return [];
  return ['9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM'].filter((_, i) => ((day * 3 + i) % 5) !== 0);
}

export default function BookingFlow() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [service, setService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showASAP, setShowASAP] = useState(false);
  const [done, setDone] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [phone, setPhone] = useState('');

  const slots = selectedDate ? getSlotsForDay(selectedDate) : [];
  const fullyBooked = selectedDate && !CLOSED_DAYS.includes(selectedDate) && slots.length === 0;

  if (done === 'booked') return (
    <div style={{ fontFamily: FONT, background: PAGE_BG, minHeight: '100vh', padding: '24px 16px', maxWidth: 480, margin: '0 auto' }}>
      <div style={{ background: CARD_BG, border: BORDER, borderRadius: RADIUS_LG, padding: '24px 20px', textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: GREEN_BG, border: `2px solid ${GREEN}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i className="ti ti-check" style={{ fontSize: 28, color: GREEN }} /></div>
        <div style={{ fontSize: 20, fontWeight: 600, color: INK, marginBottom: 6 }}>You&apos;re booked!</div>
        <div style={{ fontSize: 14, color: GRAY_TEXT, marginBottom: 24 }}>{service?.name} with {BARBER.name} on June {selectedDate} at {selectedTime}</div>
        <button onClick={() => router.push('/explore')} style={{ width: '100%', padding: '13px 0', background: AMBER, color: 'white', border: 'none', borderRadius: RADIUS_LG, fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: FONT }}>Back to explore</button>
      </div>
    </div>
  );

  if (done === 'asap') return (
    <div style={{ fontFamily: FONT, background: PAGE_BG, minHeight: '100vh', padding: '24px 16px', maxWidth: 480, margin: '0 auto' }}>
      <div style={{ background: CARD_BG, border: BORDER, borderRadius: RADIUS_LG, padding: '24px 20px', textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: AMBER_BG, border: `2px solid ${AMBER}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><i className="ti ti-bolt" style={{ fontSize: 28, color: AMBER }} /></div>
        <div style={{ fontSize: 20, fontWeight: 600, color: INK, marginBottom: 6 }}>You&apos;re on the queue!</div>
        <div style={{ fontSize: 14, color: GRAY_TEXT, marginBottom: 24 }}>We&apos;ll text you the moment a slot opens with {BARBER.name}</div>
        <button onClick={() => router.push('/explore')} style={{ width: '100%', padding: '13px 0', background: AMBER, color: 'white', border: 'none', borderRadius: RADIUS_LG, fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: FONT }}>Back to explore</button>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: FONT, background: PAGE_BG, minHeight: '100vh', padding: '24px 16px', maxWidth: 480, margin: '0 auto' }}>
      {/* Barber header */}
      <div style={{ background: CARD_BG, border: BORDER, borderRadius: RADIUS_LG, padding: '16px 20px', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: `linear-gradient(135deg, ${AMBER} 0%, ${AMBER_LIGHT} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 600, color: 'white' }}>{BARBER.initials}</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 16, fontWeight: 600, color: INK }}>{BARBER.name}</span><span style={{ fontSize: 11, background: GRAY_BG, color: GRAY_TEXT, padding: '2px 7px', borderRadius: RADIUS_SM, fontFamily: 'monospace' }}>{BARBER.tag}</span></div>
          <div style={{ fontSize: 12, color: GRAY_TEXT, marginTop: 2 }}>{BARBER.location}</div>
        </div>
      </div>

      <div style={{ background: CARD_BG, border: BORDER, borderRadius: RADIUS_LG, padding: '24px 20px' }}>
        {/* Step indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 22 }}>
          {['Service', 'Date & time', 'Confirm'].map((label, i) => {
            const num = i + 1; const done2 = step > num; const active = step === num;
            return (
              <div key={label} style={{ display: 'flex', alignItems: 'center', flex: i < 2 ? 1 : 'none' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: done2 ? GREEN : active ? AMBER : GRAY_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: done2 || active ? 'white' : GRAY_TEXT }}>{done2 ? <i className="ti ti-check" style={{ fontSize: 13 }} /> : num}</div>
                  <div style={{ fontSize: 11, color: active ? AMBER : done2 ? GREEN : GRAY_TEXT, whiteSpace: 'nowrap' }}>{label}</div>
                </div>
                {i < 2 && <div style={{ flex: 1, height: 1.5, background: done2 ? GREEN : GRAY_BG, margin: '0 8px', marginBottom: 18 }} />}
              </div>
            );
          })}
        </div>

        {/* Step 1: Services */}
        {step === 1 && (
          <div>
            <div style={{ fontSize: 15, fontWeight: 500, color: INK, marginBottom: 4 }}>Choose a service</div>
            <div style={{ fontSize: 13, color: GRAY_TEXT, marginBottom: 16 }}>Select what you&apos;d like done</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {SERVICES.map(svc => {
                const active = service?.id === svc.id;
                return (<div key={svc.id} onClick={() => setService(svc)} style={{ background: active ? AMBER_BG : CARD_BG, border: `${active ? 1.5 : 0.5}px solid ${active ? AMBER : 'rgba(0,0,0,0.08)'}`, borderRadius: RADIUS_LG, padding: '13px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', border: `2px solid ${active ? AMBER : 'rgba(0,0,0,0.15)'}`, background: active ? AMBER : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{active && <i className="ti ti-check" style={{ fontSize: 11, color: 'white' }} />}</div>
                  <div style={{ flex: 1 }}><div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 14, fontWeight: active ? 500 : 400, color: active ? AMBER : INK }}>{svc.name}</span>{svc.popular && <span style={{ fontSize: 10, background: GREEN_BG, color: GREEN, padding: '2px 6px', borderRadius: RADIUS_SM }}>Popular</span>}</div><div style={{ fontSize: 12, color: GRAY_TEXT, marginTop: 2 }}>{svc.duration} min</div></div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: active ? AMBER : INK }}>${svc.price}</div>
                </div>);
              })}
            </div>
            <button onClick={() => service && setStep(2)} disabled={!service} style={{ width: '100%', marginTop: 20, padding: '13px 0', background: service ? AMBER : GRAY_BG, color: service ? 'white' : GRAY_MUTED, border: 'none', borderRadius: RADIUS_LG, fontSize: 14, fontWeight: 500, cursor: service ? 'pointer' : 'not-allowed', fontFamily: FONT }}>Continue &rarr;</button>
          </div>
        )}

        {/* Step 2: Date & time */}
        {step === 2 && (
          <div>
            <div style={{ fontSize: 15, fontWeight: 500, color: INK, marginBottom: 4 }}>Pick a date &amp; time</div>
            <div style={{ fontSize: 13, color: GRAY_TEXT, marginBottom: 16 }}>{service?.name} &middot; {service?.duration} min &middot; ${service?.price}</div>
            <div style={{ background: CARD_BG, border: BORDER, borderRadius: RADIUS_LG, padding: 16, marginBottom: 14 }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: INK, marginBottom: 12 }}>June 2026</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginBottom: 4 }}>{['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (<div key={d} style={{ textAlign: 'center', fontSize: 11, color: GRAY_TEXT, fontWeight: 500 }}>{d}</div>))}</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3 }}>
                <div />
                {MONTH_DAYS.map(day => {
                  const closed = CLOSED_DAYS.includes(day); const booked = !closed && getSlotsForDay(day).length === 0;
                  const isToday = day === TODAY; const sel = selectedDate === day; const past = day < TODAY;
                  return (<div key={day} onClick={() => !closed && !past && (setSelectedDate(day), setSelectedTime(null))} style={{ aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: 12, cursor: closed || past ? 'not-allowed' : 'pointer', background: sel ? AMBER : isToday && !sel ? AMBER_BG : 'transparent', color: sel ? 'white' : past ? '#DDD' : closed ? GRAY_MUTED : booked ? RED : INK, fontWeight: isToday ? 600 : 400, border: isToday && !sel ? `1.5px solid ${AMBER}` : '1.5px solid transparent', opacity: past ? 0.3 : 1 }}>{day}</div>);
                })}
              </div>
            </div>
            {selectedDate && !CLOSED_DAYS.includes(selectedDate) && (
              <div style={{ background: CARD_BG, border: BORDER, borderRadius: RADIUS_LG, padding: 16, marginBottom: 14 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: INK, marginBottom: 12 }}>Available times &middot; June {selectedDate}</div>
                {fullyBooked ? (
                  <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <div style={{ fontSize: 14, color: GRAY_SUB, marginBottom: 12 }}>No slots available &mdash; join the ASAP queue</div>
                    <button onClick={() => setShowASAP(true)} style={{ background: AMBER, color: 'white', border: 'none', borderRadius: RADIUS_LG, padding: '10px 20px', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: FONT, display: 'inline-flex', alignItems: 'center', gap: 6 }}><i className="ti ti-bolt" style={{ fontSize: 14 }} />Join ASAP queue</button>
                  </div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>{slots.map(time => { const sel = selectedTime === time; return (<div key={time} onClick={() => setSelectedTime(time)} style={{ padding: '9px 0', textAlign: 'center', background: sel ? AMBER : GRAY_BG, color: sel ? 'white' : INK_SOFT, borderRadius: RADIUS_MD, fontSize: 13, fontWeight: sel ? 500 : 400, cursor: 'pointer' }}>{time}</div>); })}</div>
                )}
              </div>
            )}
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setStep(1)} style={{ flex: 1, padding: '13px 0', background: CARD_BG, color: GRAY_SUB, border: BORDER_MED, borderRadius: RADIUS_LG, fontSize: 14, cursor: 'pointer', fontFamily: FONT }}>&larr; Back</button>
              <button onClick={() => setStep(3)} disabled={!selectedDate || !selectedTime} style={{ flex: 2, padding: '13px 0', background: selectedDate && selectedTime ? AMBER : GRAY_BG, color: selectedDate && selectedTime ? 'white' : GRAY_MUTED, border: 'none', borderRadius: RADIUS_LG, fontSize: 14, fontWeight: 500, cursor: selectedDate && selectedTime ? 'pointer' : 'not-allowed', fontFamily: FONT }}>Continue &rarr;</button>
            </div>
          </div>
        )}

        {/* Step 3: Confirm */}
        {step === 3 && (
          <div>
            <div style={{ fontSize: 15, fontWeight: 500, color: INK, marginBottom: 4 }}>Confirm your booking</div>
            <div style={{ background: CARD_BG, border: BORDER, borderRadius: RADIUS_LG, overflow: 'hidden', marginBottom: 14 }}>
              {[{ label: 'Service', value: service?.name, icon: 'ti-scissors' },{ label: 'Date', value: `June ${selectedDate}, 2026`, icon: 'ti-calendar' },{ label: 'Time', value: selectedTime, icon: 'ti-clock' },{ label: 'Barber', value: BARBER.name, icon: 'ti-user' }].map((row, i, arr) => (<div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderBottom: i < arr.length - 1 ? BORDER_SOFT : 'none' }}><i className={`ti ${row.icon}`} style={{ fontSize: 15, color: GRAY_TEXT, width: 18 }} /><div style={{ flex: 1, fontSize: 13, color: GRAY_TEXT }}>{row.label}</div><div style={{ fontSize: 13, fontWeight: 500, color: INK }}>{row.value}</div></div>))}
            </div>
            <div style={{ background: AMBER_BG, border: `0.5px solid ${AMBER}22`, borderRadius: RADIUS_LG, padding: '14px 16px', marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div><div style={{ fontSize: 13, color: AMBER, fontWeight: 500 }}>Total due at shop</div><div style={{ fontSize: 12, color: AMBER_DARK, marginTop: 2 }}>Payment collected in person</div></div>
              <div style={{ fontSize: 24, fontWeight: 700, color: AMBER }}>${service?.price}</div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setStep(2)} style={{ flex: 1, padding: '13px 0', background: CARD_BG, color: GRAY_SUB, border: BORDER_MED, borderRadius: RADIUS_LG, fontSize: 14, cursor: 'pointer', fontFamily: FONT }}>&larr; Back</button>
              <button onClick={() => setDone('booked')} style={{ flex: 2, padding: '13px 0', background: AMBER, color: 'white', border: 'none', borderRadius: RADIUS_LG, fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: FONT }}>Confirm booking</button>
            </div>
          </div>
        )}
      </div>

      {/* ASAP Modal */}
      {showASAP && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', zIndex: 100 }}>
          <div style={{ background: CARD_BG, borderRadius: `${RADIUS_XL}px ${RADIUS_XL}px 0 0`, padding: '24px 24px 36px', width: '100%', maxWidth: 480 }}>
            <div style={{ width: 36, height: 4, background: GRAY_BG, borderRadius: 2, margin: '0 auto 20px' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}><div style={{ width: 36, height: 36, borderRadius: '50%', background: AMBER_BG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="ti ti-bolt" style={{ fontSize: 18, color: AMBER }} /></div><div><div style={{ fontSize: 16, fontWeight: 600, color: INK }}>Join the ASAP queue</div><div style={{ fontSize: 12, color: GRAY_TEXT }}>Get the next available slot with {BARBER.name}</div></div></div>
            <div style={{ background: AMBER_BG, borderRadius: RADIUS_LG, padding: '14px 16px', marginBottom: 18 }}>
              {[{icon:'ti-check',text:'You join the waitlist for the next open slot'},{icon:'ti-message',text:"You'll receive an SMS the moment a slot opens"},{icon:'ti-bolt',text:'First person to confirm via text gets the slot'},{icon:'ti-credit-card',text:"If you confirm but don't show, a no-show fee applies"}].map((item, i) => (<div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: i < 3 ? 8 : 0 }}><i className={`ti ${item.icon}`} style={{ fontSize: 14, color: AMBER, marginTop: 1 }} /><span style={{ fontSize: 13, color: INK_SOFT, lineHeight: 1.5 }}>{item.text}</span></div>))}
            </div>
            <div style={{ background: RED_BG, border: `0.5px solid ${RED}33`, borderRadius: RADIUS_MD, padding: '10px 14px', marginBottom: 18, display: 'flex', gap: 10 }}><i className="ti ti-alert-triangle" style={{ fontSize: 15, color: RED, marginTop: 1 }} /><div style={{ fontSize: 12, color: RED }}><strong>No-show policy:</strong> If you confirm a slot and don&apos;t appear, a $15 fee will be charged.</div></div>
            <div style={{ marginBottom: 14 }}><div style={{ fontSize: 12, fontWeight: 500, color: INK, marginBottom: 6 }}>Your mobile number for SMS alerts</div><input type="tel" placeholder="(555) 000-0000" value={phone} onChange={e => setPhone(e.target.value)} style={{ width: '100%', padding: '11px 14px', fontSize: 14, border: '1px solid rgba(0,0,0,0.12)', borderRadius: RADIUS_MD, outline: 'none', boxSizing: 'border-box', color: INK, fontFamily: FONT }} /></div>
            <div onClick={() => setAgreed(!agreed)} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 20, cursor: 'pointer' }}><div style={{ width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${agreed ? AMBER : 'rgba(0,0,0,0.2)'}`, background: agreed ? AMBER : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{agreed && <i className="ti ti-check" style={{ fontSize: 11, color: 'white' }} />}</div><span style={{ fontSize: 12, color: GRAY_SUB, lineHeight: 1.5 }}>I understand the ASAP queue rules and no-show fee policy.</span></div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setShowASAP(false)} style={{ flex: 1, padding: '13px 0', background: CARD_BG, color: GRAY_SUB, border: BORDER_MED, borderRadius: RADIUS_LG, fontSize: 14, cursor: 'pointer', fontFamily: FONT }}>Cancel</button>
              <button onClick={() => agreed && phone.length >= 7 && (setShowASAP(false), setDone('asap'))} disabled={!agreed || phone.length < 7} style={{ flex: 2, padding: '13px 0', background: agreed && phone.length >= 7 ? AMBER : GRAY_BG, color: agreed && phone.length >= 7 ? 'white' : GRAY_MUTED, border: 'none', borderRadius: RADIUS_LG, fontSize: 14, fontWeight: 500, cursor: agreed && phone.length >= 7 ? 'pointer' : 'not-allowed', fontFamily: FONT, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}><i className="ti ti-bolt" style={{ fontSize: 14 }} />Join queue</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
