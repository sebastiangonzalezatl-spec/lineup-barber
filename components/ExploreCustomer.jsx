'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AMBER, AMBER_BG, AMBER_LIGHT, AMBER_DARK, GREEN, GREEN_BG, INK, INK_SOFT, GRAY_TEXT, GRAY_SUB, GRAY_MUTED, GRAY_BG, PAGE_BG, CARD_BG, FONT, BORDER, BORDER_SOFT, RADIUS_SM, RADIUS_MD, RADIUS_LG, RADIUS_XL } from '@/components/theme';

const BARBERS = [
  { id: 1, name: 'Darius Moore', tag: '#A2BC31', location: 'Houston, TX', rating: 4.9, reviews: 128, price: 35, initials: 'DM', specialties: ['Fades', 'Tapers', 'Line-ups'], nextSlot: 'Today 2:00 PM', available: true, gradient: 'linear-gradient(135deg, #D4820A 0%, #F5C542 100%)', bio: 'Solo barber with 8+ years. Specializing in fades, tapers, and precision line-ups.', services: [{ name: 'Fade', price: 35, duration: 30 },{ name: 'Fade + Line-up', price: 45, duration: 45 },{ name: 'Taper + Beard', price: 60, duration: 60 }], slots: ['9:00 AM','10:00 AM','2:00 PM','3:30 PM'], queueCount: 4 },
  { id: 2, name: 'Jordan Williams', tag: '#B3CF22', location: 'Atlanta, GA', rating: 4.8, reviews: 94, price: 40, initials: 'JW', specialties: ['Skin Fades', 'Designs', 'Beard Sculpt'], nextSlot: 'Today 4:00 PM', available: true, gradient: 'linear-gradient(135deg, #5A5A9A 0%, #8080C0 100%)', bio: 'Atlanta native. Known for clean skin fades and precision hair designs.', services: [{ name: 'Skin Fade', price: 40, duration: 30 },{ name: 'Fade + Design', price: 55, duration: 50 }], slots: ['4:00 PM','4:30 PM','5:00 PM'], queueCount: 2 },
  { id: 3, name: 'Marcus Reed', tag: '#C4D033', location: 'Houston, TX', rating: 4.7, reviews: 61, price: 30, initials: 'MR', specialties: ['Classic Cuts', 'Fades', 'Kids'], nextSlot: 'Tomorrow 9:00 AM', available: false, gradient: 'linear-gradient(135deg, #2D9E6B 0%, #4AC88A 100%)', bio: 'Classic cuts and fades for all ages.', services: [{ name: 'Classic Cut', price: 30, duration: 30 },{ name: 'Kids Cut', price: 22, duration: 20 }], slots: [], queueCount: 7 },
  { id: 4, name: 'Tre Simmons', tag: '#D5E044', location: 'Houston, TX', rating: 5.0, reviews: 43, price: 45, initials: 'TS', specialties: ['High Fades', 'Dreads', 'Loc Maintenance'], nextSlot: 'Today 6:00 PM', available: true, gradient: 'linear-gradient(135deg, #A45A2A 0%, #D4820A 100%)', bio: 'Specializing in high fades, dreads, and loc maintenance. 5-star rated.', services: [{ name: 'High Fade', price: 45, duration: 40 },{ name: 'Loc Retwist', price: 65, duration: 60 }], slots: ['6:00 PM'], queueCount: 1 },
];
const FILTERS = ['All', 'Available now', 'Top rated', 'Lowest price', 'Near me'];

function BarberCard({ barber, onClick }) {
  return (
    <div onClick={() => onClick(barber)} style={{ background: CARD_BG, border: BORDER, borderRadius: RADIUS_XL, overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.15s, box-shadow 0.15s' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
      <div style={{ height: 140, background: barber.gradient, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 36, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: -1 }}>{barber.initials}</div>
        <div style={{ position: 'absolute', bottom: 10, left: 12, background: 'rgba(255,255,255,0.92)', borderRadius: RADIUS_SM, padding: '3px 8px', fontSize: 11, fontWeight: 600, color: INK, fontFamily: 'monospace', letterSpacing: 0.5 }}>{barber.tag}</div>
        <div style={{ position: 'absolute', top: 10, right: 10, background: barber.available ? GREEN : AMBER, color: 'white', borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 500 }}>{barber.available ? 'Available' : 'Fully booked'}</div>
      </div>
      <div style={{ padding: '14px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 6 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: INK }}>{barber.name}</div>
            <div style={{ fontSize: 12, color: GRAY_TEXT, marginTop: 1 }}><i className="ti ti-map-pin" style={{ fontSize: 11 }} /> {barber.location}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 13, color: '#F5A623' }}>&#9733; {barber.rating}</div>
            <div style={{ fontSize: 11, color: GRAY_MUTED }}>{barber.reviews} reviews</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 12 }}>
          {barber.specialties.map(s => (<span key={s} style={{ fontSize: 11, background: GRAY_BG, color: GRAY_SUB, borderRadius: RADIUS_SM, padding: '2px 8px' }}>{s}</span>))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 10, borderTop: BORDER_SOFT }}>
          {barber.available ? <div style={{ fontSize: 12, color: GREEN }}><i className="ti ti-clock" style={{ fontSize: 12 }} /> {barber.nextSlot}</div> : <div style={{ fontSize: 12, color: AMBER }}><i className="ti ti-bolt" style={{ fontSize: 12 }} /> ASAP &middot; {barber.queueCount} waiting</div>}
          <div style={{ fontSize: 13, fontWeight: 600, color: INK }}>from ${barber.price}</div>
        </div>
      </div>
    </div>
  );
}

function BarberDrawer({ barber, onClose, onBook }) {
  const [activeTab, setActiveTab] = useState('services');
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', background: 'rgba(0,0,0,0.4)' }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: PAGE_BG, borderRadius: `${RADIUS_XL}px ${RADIUS_XL}px 0 0`, width: '100%', maxWidth: 600, maxHeight: '90vh', overflow: 'auto' }}>
        <div style={{ height: 180, background: barber.gradient, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: 48, fontWeight: 700, color: 'rgba(255,255,255,0.25)' }}>{barber.initials}</div>
          <button onClick={onClose} style={{ position: 'absolute', top: 14, right: 14, width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,0,0,0.3)', border: 'none', color: 'white', fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="ti ti-x" style={{ fontSize: 15 }} /></button>
          <div style={{ position: 'absolute', bottom: 12, left: 16, background: 'rgba(255,255,255,0.9)', borderRadius: RADIUS_SM, padding: '3px 8px', fontSize: 12, fontWeight: 600, color: INK, fontFamily: 'monospace' }}>{barber.tag}</div>
        </div>
        <div style={{ padding: '18px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
            <div><div style={{ fontSize: 20, fontWeight: 700, color: INK }}>{barber.name}</div><div style={{ fontSize: 13, color: GRAY_TEXT }}><i className="ti ti-map-pin" style={{ fontSize: 12 }} /> {barber.location}</div></div>
            <div style={{ textAlign: 'right' }}><div style={{ fontSize: 16, color: '#F5A623', fontWeight: 600 }}>&#9733; {barber.rating}</div><div style={{ fontSize: 12, color: GRAY_MUTED }}>{barber.reviews} reviews</div></div>
          </div>
          <div style={{ fontSize: 13, color: GRAY_SUB, lineHeight: 1.65, marginBottom: 18 }}>{barber.bio}</div>
          <div style={{ display: 'flex', gap: 4, marginBottom: 18, background: GRAY_BG, borderRadius: RADIUS_MD, padding: 3 }}>
            {['services','availability'].map(tab => (<div key={tab} onClick={() => setActiveTab(tab)} style={{ flex: 1, textAlign: 'center', padding: '7px 0', borderRadius: RADIUS_SM, fontSize: 13, background: activeTab === tab ? CARD_BG : 'transparent', color: activeTab === tab ? INK : GRAY_TEXT, fontWeight: activeTab === tab ? 500 : 400, cursor: 'pointer', textTransform: 'capitalize' }}>{tab}</div>))}
          </div>
          {activeTab === 'services' && <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{barber.services.map((svc, i) => (<div key={i} style={{ background: CARD_BG, border: BORDER, borderRadius: RADIUS_MD, padding: '12px 14px', display: 'flex', alignItems: 'center' }}><div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 500, color: INK }}>{svc.name}</div><div style={{ fontSize: 12, color: GRAY_TEXT }}>{svc.duration} min</div></div><div style={{ fontSize: 15, fontWeight: 600, color: INK }}>${svc.price}</div></div>))}</div>}
          {activeTab === 'availability' && (
            barber.slots.length > 0 ? (<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>{barber.slots.map(s => (<div key={s} onClick={() => onBook(barber)} style={{ padding: '9px 0', textAlign: 'center', background: AMBER_BG, color: AMBER, borderRadius: RADIUS_MD, fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>{s}</div>))}</div>) :
            (<div style={{ background: AMBER_BG, borderRadius: RADIUS_LG, padding: 16, textAlign: 'center' }}><i className="ti ti-bolt" style={{ fontSize: 22, color: AMBER, marginBottom: 8, display: 'block' }} /><div style={{ fontSize: 14, fontWeight: 500, color: AMBER }}>Fully booked</div><div style={{ fontSize: 13, color: AMBER_DARK, marginTop: 4 }}>{barber.queueCount} on ASAP queue</div></div>)
          )}
          <div style={{ marginTop: 20 }}>
            <button onClick={() => onBook(barber)} style={{ width: '100%', padding: '13px 0', background: AMBER, color: 'white', border: 'none', borderRadius: RADIUS_LG, fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: FONT, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <i className={`ti ${barber.slots.length > 0 ? 'ti-calendar' : 'ti-bolt'}`} style={{ fontSize: 14 }} />
              {barber.slots.length > 0 ? 'Book appointment' : 'Join ASAP queue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExploreCustomer() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [qrInput, setQrInput] = useState('');

  const filtered = BARBERS.filter(b => {
    const matchSearch = b.name.toLowerCase().includes(search.toLowerCase()) || b.location.toLowerCase().includes(search.toLowerCase()) || b.specialties.some(s => s.toLowerCase().includes(search.toLowerCase()));
    const matchFilter = activeFilter === 'All' ? true : activeFilter === 'Available now' ? b.available : activeFilter === 'Top rated' ? b.rating >= 4.8 : activeFilter === 'Lowest price' ? b.price <= 35 : true;
    return matchSearch && matchFilter;
  });
  const sorted = [...filtered].sort((a, b) => activeFilter === 'Top rated' ? b.rating - a.rating : activeFilter === 'Lowest price' ? a.price - b.price : 0);

  function handleBook(barber) {
    setSelectedBarber(null);
    router.push('/book');
  }

  return (
    <div style={{ fontFamily: FONT, background: PAGE_BG, minHeight: '100vh' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 10, background: 'rgba(247,245,242,0.92)', backdropFilter: 'blur(12px)', borderBottom: '0.5px solid rgba(0,0,0,0.07)', padding: '0 20px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: INK, letterSpacing: -0.5 }}>Line<span style={{ color: AMBER }}>Up</span></div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => router.push('/auth')} style={{ padding: '6px 14px', background: AMBER, color: 'white', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: FONT }}>My account</button>
        </div>
      </div>
      <div style={{ padding: '20px 20px 32px' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, background: CARD_BG, border: `1px solid ${searchFocused ? AMBER : 'rgba(0,0,0,0.1)'}`, borderRadius: RADIUS_LG, padding: '10px 14px' }}>
            <i className="ti ti-search" style={{ fontSize: 16, color: searchFocused ? AMBER : GRAY_TEXT }} />
            <input value={search} onChange={e => setSearch(e.target.value)} onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)} placeholder="Search barbers, styles, location&hellip;" style={{ flex: 1, border: 'none', outline: 'none', fontSize: 14, color: INK, background: 'transparent', fontFamily: FONT }} />
            {search && <i className="ti ti-x" onClick={() => setSearch('')} style={{ fontSize: 14, color: GRAY_MUTED, cursor: 'pointer' }} />}
          </div>
          <button onClick={() => setShowQR(true)} style={{ width: 44, height: 44, borderRadius: RADIUS_LG, background: CARD_BG, border: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="ti ti-qrcode" style={{ fontSize: 20, color: GRAY_SUB }} /></button>
        </div>
        <div style={{ display: 'flex', gap: 7, marginBottom: 20, overflowX: 'auto', paddingBottom: 2 }}>
          {FILTERS.map(f => (<button key={f} onClick={() => setActiveFilter(f)} style={{ flexShrink: 0, padding: '6px 14px', borderRadius: 20, background: activeFilter === f ? AMBER : CARD_BG, color: activeFilter === f ? 'white' : GRAY_SUB, border: `1px solid ${activeFilter === f ? AMBER : 'rgba(0,0,0,0.1)'}`, fontSize: 13, cursor: 'pointer', fontFamily: FONT }}>{f}</button>))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div style={{ fontSize: 15, fontWeight: 500, color: INK }}>Barbers near you</div>
          <div style={{ fontSize: 13, color: GRAY_TEXT }}>{sorted.length} results</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {sorted.map(b => (<BarberCard key={b.id} barber={b} onClick={setSelectedBarber} />))}
        </div>
      </div>
      {selectedBarber && <BarberDrawer barber={selectedBarber} onClose={() => setSelectedBarber(null)} onBook={handleBook} />}
      {showQR && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div style={{ background: CARD_BG, borderRadius: RADIUS_XL, padding: 28, width: '100%', maxWidth: 360, textAlign: 'center' }}>
            <div style={{ width: 180, height: 180, margin: '0 auto 20px', background: INK, borderRadius: RADIUS_LG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="ti ti-qrcode" style={{ fontSize: 64, color: 'rgba(255,255,255,0.15)' }} />
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: INK, marginBottom: 6 }}>Scan QR Tag</div>
            <div style={{ fontSize: 13, color: GRAY_TEXT, marginBottom: 20 }}>Point camera at a barber&apos;s QR tag, or type the code below</div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
              <input value={qrInput} onChange={e => setQrInput(e.target.value)} placeholder="#A2BC31" style={{ flex: 1, padding: '10px 14px', fontSize: 14, fontFamily: 'monospace', border: '1px solid rgba(0,0,0,0.12)', borderRadius: RADIUS_MD, outline: 'none', color: INK }} />
              <button onClick={() => { const b = BARBERS.find(x => x.tag.replace('#','').toLowerCase() === qrInput.replace('#','').toLowerCase()); if (b) { setShowQR(false); setSelectedBarber(b); } }} style={{ background: AMBER, color: 'white', border: 'none', borderRadius: RADIUS_MD, padding: '0 16px', fontSize: 13, cursor: 'pointer', fontFamily: FONT }}>Go</button>
            </div>
            <button onClick={() => setShowQR(false)} style={{ width: '100%', padding: '10px 0', background: GRAY_BG, border: 'none', borderRadius: RADIUS_LG, fontSize: 13, color: GRAY_SUB, cursor: 'pointer', fontFamily: FONT }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
