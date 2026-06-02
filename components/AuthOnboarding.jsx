'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AMBER, AMBER_BG, GREEN, GREEN_BG, INK, INK_SOFT, GRAY_TEXT, GRAY_SUB, GRAY_MUTED, GRAY_BG, PAGE_BG, CARD_BG, FONT, BORDER, BORDER_MED, RADIUS_MD, RADIUS_LG, RADIUS_XL } from '@/components/theme';

const inputStyle = { width: '100%', padding: '11px 14px', fontSize: 14, border: '1px solid rgba(0,0,0,0.12)', borderRadius: RADIUS_MD, outline: 'none', boxSizing: 'border-box', color: INK, background: CARD_BG, fontFamily: FONT, transition: 'border-color 0.15s' };
const labelStyle = { fontSize: 12, fontWeight: 500, color: INK, display: 'block', marginBottom: 6 };

function PrimaryBtn({ children, onClick, disabled }) {
  return <button onClick={onClick} disabled={disabled} style={{ width: '100%', padding: '13px 0', fontSize: 14, fontWeight: 500, background: disabled ? GRAY_BG : AMBER, color: disabled ? GRAY_MUTED : 'white', border: 'none', borderRadius: RADIUS_LG, cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: FONT, transition: 'background 0.2s' }}>{children}</button>;
}

function OnboardingHeader({ step, total, title, sub, accent, accentBg }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: 'flex', gap: 5, marginBottom: 20 }}>
        {Array.from({ length: total }, (_, i) => (<div key={i} style={{ height: 4, flex: 1, borderRadius: 2, background: i < step ? accent : GRAY_BG, transition: 'background 0.2s' }} />))}
      </div>
      <div style={{ fontSize: 11, color: accent, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 6 }}>Step {step} of {total}</div>
      <div style={{ fontSize: 20, fontWeight: 700, color: INK, marginBottom: 6, letterSpacing: -0.3 }}>{title}</div>
      <div style={{ fontSize: 13, color: GRAY_TEXT }}>{sub}</div>
    </div>
  );
}

export default function AuthOnboarding() {
  const router = useRouter();
  const [screen, setScreen] = useState('pick');
  const [role, setRole] = useState(null);
  const [onboardStep, setOnboardStep] = useState(1);
  const totalOnboardSteps = role === 'barber' ? 3 : 2;

  function handleOnboardNext() {
    if (onboardStep < totalOnboardSteps) setOnboardStep(s => s + 1);
    else setScreen('done');
  }

  function handleDone() {
    if (role === 'barber') router.push('/dashboard');
    else router.push('/explore');
  }

  return (
    <div style={{ fontFamily: FONT, background: PAGE_BG, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 16px' }}>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <div style={{ textAlign: 'center', fontSize: 22, fontWeight: 700, letterSpacing: -0.5, color: INK, marginBottom: 28 }}>Line<span style={{ color: AMBER }}>Up</span></div>
        <div style={{ background: CARD_BG, border: BORDER, borderRadius: RADIUS_XL, padding: '32px 28px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
          {screen === 'pick' && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.5, color: INK, marginBottom: 6 }}>Welcome to Line<span style={{ color: AMBER }}>Up</span></div>
              <div style={{ fontSize: 14, color: GRAY_TEXT, marginBottom: 36 }}>How are you joining us?</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[{ role:'barber', icon:'ti-scissors', title:"I'm a Barber", sub:'Set up your storefront, manage schedule, fill your book', accent:AMBER, accentBg:AMBER_BG },{ role:'customer', icon:'ti-user', title:"I'm a Customer", sub:'Find barbers, book appointments, join the ASAP queue', accent:GREEN, accentBg:GREEN_BG }].map(item => (
                  <div key={item.role} onClick={() => { setRole(item.role); setScreen('signup'); }}
                    style={{ background: CARD_BG, border: `1.5px solid rgba(0,0,0,0.1)`, borderRadius: RADIUS_LG, padding: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16, textAlign: 'left', transition: 'all 0.15s' }}>
                    <div style={{ width: 48, height: 48, borderRadius: RADIUS_MD, flexShrink: 0, background: item.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className={`ti ${item.icon}`} style={{ fontSize: 22, color: item.accent }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: INK, marginBottom: 3 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: GRAY_TEXT }}>{item.sub}</div>
                    </div>
                    <i className="ti ti-chevron-right" style={{ fontSize: 16, color: GRAY_MUTED, marginLeft: 'auto' }} />
                  </div>
                ))}
              </div>
            </div>
          )}
          {screen === 'signup' && (
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: INK, marginBottom: 6, letterSpacing: -0.3 }}>Create your account</div>
              <div style={{ fontSize: 13, color: GRAY_TEXT, marginBottom: 24 }}>{role === 'barber' ? 'Start your 30-day free trial.' : "It's free. Book in minutes."}</div>
              <PrimaryBtn onClick={() => { setOnboardStep(1); setScreen('onboard'); }}>Continue with Google</PrimaryBtn>
              <div style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: GRAY_TEXT }}>Already have an account?{' '}<span onClick={() => setScreen('login')} style={{ color: AMBER, cursor: 'pointer', fontWeight: 500 }}>Log in</span></div>
            </div>
          )}
          {screen === 'login' && (
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: INK, marginBottom: 6 }}>Welcome back</div>
              <div style={{ fontSize: 13, color: GRAY_TEXT, marginBottom: 24 }}>Log in to your {role} account</div>
              <PrimaryBtn onClick={handleDone}>Log in</PrimaryBtn>
              <div style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: GRAY_TEXT }}><span onClick={() => setScreen('signup')} style={{ color: AMBER, cursor: 'pointer' }}>&larr; Sign up instead</span></div>
            </div>
          )}
          {screen === 'onboard' && (
            <div>
              <OnboardingHeader step={onboardStep} total={totalOnboardSteps} title={onboardStep === 1 ? 'Tell us about your shop' : onboardStep === 2 ? 'Add your services' : 'Set your hours'} sub="You can edit this anytime" accent={role === 'barber' ? AMBER : GREEN} accentBg={role === 'barber' ? AMBER_BG : GREEN_BG} />
              <PrimaryBtn onClick={handleOnboardNext}>{onboardStep < totalOnboardSteps ? 'Continue →' : 'Finish setup →'}</PrimaryBtn>
            </div>
          )}
          {screen === 'done' && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: role === 'barber' ? AMBER_BG : GREEN_BG, border: `2px solid ${role === 'barber' ? AMBER : GREEN}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                <i className={`ti ${role === 'barber' ? 'ti-scissors' : 'ti-check'}`} style={{ fontSize: 28, color: role === 'barber' ? AMBER : GREEN }} />
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, color: INK, marginBottom: 8 }}>{role === 'barber' ? 'Your shop is live!' : "You're all set!"}</div>
              <div style={{ fontSize: 14, color: GRAY_TEXT, marginBottom: 24 }}>{role === 'barber' ? 'Share your QR tag to start getting bookings.' : 'Start exploring barbers near you.'}</div>
              <PrimaryBtn onClick={handleDone}>{role === 'barber' ? 'Go to dashboard →' : 'Explore barbers →'}</PrimaryBtn>
            </div>
          )}
        </div>
        {(screen === 'signup' || screen === 'login') && (
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <span onClick={() => setScreen('pick')} style={{ fontSize: 12, color: GRAY_TEXT, cursor: 'pointer' }}>&larr; Change account type</span>
          </div>
        )}
      </div>
    </div>
  );
}
