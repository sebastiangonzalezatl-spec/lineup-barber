'use client';
import { useState } from 'react';
import { AMBER, AMBER_BG, AMBER_DARK, GREEN, GREEN_BG, INK, INK_SOFT, GRAY_TEXT, GRAY_SUB, GRAY_MUTED, GRAY_BG, PAGE_BG, FONT, BORDER, BORDER_SOFT, RADIUS_MD, RADIUS_LG } from '@/components/theme';

export default function BarberProfile() {
  const [editing, setEditing] = useState(false);
  const [bio, setBio] = useState('Solo barber with 8+ years of experience. Specializing in fades, tapers, and precision line-ups.');
  const [displayName, setDisplayName] = useState('Darius Moore');
  const galleryColors = ['#E5DDD4','#D4DCE8','#E5E5D4','#D4E5DF','#E5D4E5','#D8D4E5'];

  return (
    <div style={{ fontFamily: FONT, background: PAGE_BG, minHeight: '100vh', padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
        <div><div style={{ fontSize: 20, fontWeight: 500, color: INK }}>My profile</div><div style={{ fontSize: 12, color: GRAY_TEXT, marginTop: 2 }}>How clients see you on LineUp</div></div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#fff', border: '0.5px solid rgba(0,0,0,0.12)', borderRadius: 8, padding: '7px 12px', fontSize: 13, color: GRAY_SUB, cursor: 'pointer', fontFamily: FONT }}><i className="ti ti-eye" style={{ fontSize: 14 }} /> Preview</button>
          <button onClick={() => setEditing(!editing)} style={{ background: editing ? AMBER : '#fff', color: editing ? '#fff' : INK, border: `0.5px solid ${editing ? AMBER : 'rgba(0,0,0,0.12)'}`, borderRadius: 8, padding: '7px 14px', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: FONT }}>{editing ? 'Save changes' : 'Edit profile'}</button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#fff', border: BORDER, borderRadius: RADIUS_LG, padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: 68, height: 68, borderRadius: '50%', background: `linear-gradient(135deg, ${AMBER} 0%, #F5C542 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 600, color: 'white' }}>DM</div>
                {editing && <div style={{ position: 'absolute', bottom: 0, right: 0, width: 22, height: 22, background: AMBER, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><i className="ti ti-camera" style={{ fontSize: 12, color: 'white' }} /></div>}
              </div>
              <div style={{ flex: 1 }}>
                {editing ? <input value={displayName} onChange={e => setDisplayName(e.target.value)} style={{ fontSize: 17, fontWeight: 600, color: INK, border: `1px solid ${AMBER}`, borderRadius: 6, padding: '4px 8px', width: '100%', background: '#FFFDF8', outline: 'none', fontFamily: FONT }} /> : <div style={{ fontSize: 17, fontWeight: 600, color: INK }}>{displayName}</div>}
                <div style={{ fontSize: 12, color: GRAY_TEXT, marginTop: 3 }}>Solo barber &middot; Houston, TX</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6 }}><span style={{ fontSize: 13, color: '#F5A623' }}>&#9733; 4.9</span><span style={{ fontSize: 12, color: GRAY_TEXT }}>128 reviews</span></div>
              </div>
            </div>
            <div style={{ borderTop: '0.5px solid rgba(0,0,0,0.06)', paddingTop: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: INK, marginBottom: 6 }}>Bio</div>
              {editing ? <textarea value={bio} onChange={e => setBio(e.target.value)} rows={4} style={{ width: '100%', fontSize: 13, color: INK_SOFT, lineHeight: 1.6, border: `1px solid ${AMBER}`, borderRadius: 6, padding: '8px 10px', background: '#FFFDF8', outline: 'none', resize: 'none', boxSizing: 'border-box', fontFamily: FONT }} /> : <div style={{ fontSize: 13, color: GRAY_SUB, lineHeight: 1.7 }}>{bio}</div>}
            </div>
          </div>
          <div style={{ background: '#fff', border: BORDER, borderRadius: RADIUS_LG, padding: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: INK, marginBottom: 14 }}>Your QR tag</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 72, height: 72, background: '#F3F3F3', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="ti ti-qrcode" style={{ fontSize: 38, color: '#CCCCCC' }} /></div>
              <div><div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 2, color: INK, fontFamily: 'monospace' }}>#A2BC31</div><div style={{ fontSize: 12, color: GRAY_TEXT, marginTop: 4 }}>Clients scan or type this to find you</div></div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#fff', border: BORDER, borderRadius: RADIUS_LG, overflow: 'hidden' }}>
            <div style={{ padding: '14px 18px', borderBottom: '0.5px solid rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: INK }}>Photo gallery</div>
              {editing && <button style={{ fontSize: 12, background: AMBER_BG, color: AMBER, border: 'none', borderRadius: 6, padding: '4px 10px', cursor: 'pointer', fontFamily: FONT }}>+ Add photo</button>}
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                {galleryColors.map((bg, i) => (<div key={i} style={{ aspectRatio: '4/3', background: bg, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}><i className="ti ti-scissors" style={{ fontSize: 22, color: 'rgba(0,0,0,0.18)' }} />{editing && <div style={{ position: 'absolute', top: 6, right: 6, width: 20, height: 20, background: 'rgba(220,64,64,0.85)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><i className="ti ti-x" style={{ fontSize: 11, color: 'white' }} /></div>}</div>))}
              </div>
            </div>
          </div>
          <div style={{ background: AMBER_BG, border: `0.5px solid ${AMBER}22`, borderRadius: RADIUS_LG, padding: '14px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div><div style={{ fontSize: 13, fontWeight: 500, color: AMBER }}>Pro plan &middot; $25/mo</div><div style={{ fontSize: 12, color: AMBER_DARK, marginTop: 2 }}>Next billing: June 8, 2026</div></div>
              <span style={{ fontSize: 11, background: AMBER, color: 'white', padding: '3px 8px', borderRadius: 6, fontWeight: 500 }}>Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
