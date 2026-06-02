import Link from 'next/link';

export default function Home() {
  return (
    <>
      <nav>
        <div className="nav-logo">Line<span>Up</span></div>
        <div className="nav-links">
          <a href="#for-barbers">For Barbers</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="nav-cta">
          <Link href="/auth" className="btn btn-ghost">Log in</Link>
          <Link href="/auth" className="btn btn-amber">Get started free</Link>
        </div>
      </nav>

      <div style={{maxWidth:'1160px',margin:'0 auto',padding:'0 5%'}}>
        <section className="hero" style={{paddingLeft:0,paddingRight:0}}>
          <div>
            <div className="hero-eyebrow">
              <i className="ti ti-bolt" style={{fontSize:'13px'}}></i>
              Now in early access
            </div>
            <h1>Your barber,<br/><em>on your schedule.</em></h1>
            <p className="hero-sub">LineUp connects you with solo barbers in your city. Book in seconds, join the ASAP waitlist when you want in sooner, and never miss a last-minute slot again.</p>
            <div className="hero-actions">
              <Link href="/explore" className="btn btn-amber btn-lg">
                <i className="ti ti-calendar" style={{fontSize:'16px'}}></i>
                Book a barber
              </Link>
              <Link href="/auth" className="btn btn-ghost btn-lg">I&apos;m a barber &rarr;</Link>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-avatars">
                <div>JK</div><div>AM</div><div>TR</div><div>DS</div><div>+</div>
              </div>
              <span>Joined by <strong>500+ barbers</strong> in beta</span>
            </div>
          </div>
          <div className="hero-visual">
            <div style={{position:'relative',maxWidth:'340px',margin:'0 auto'}}>
              <div className="phone-mockup">
                <div className="phone-status">
                  <span>9:41</span>
                  <span style={{display:'flex',gap:'6px',alignItems:'center'}}>
                    <i className="ti ti-wifi" style={{fontSize:'13px'}}></i>
                    <i className="ti ti-battery-2" style={{fontSize:'14px'}}></i>
                  </span>
                </div>
                <div className="phone-content">
                  <div style={{background:'#F3F3F3',borderRadius:'8px',padding:'9px 12px',display:'flex',alignItems:'center',gap:'8px',marginBottom:'14px'}}>
                    <i className="ti ti-search" style={{fontSize:'14px',color:'#8A8A8F'}}></i>
                    <span style={{fontSize:'13px',color:'#ABABAB'}}>Search barbers near you&hellip;</span>
                  </div>
                  <div className="phone-barber-card">
                    <div className="phone-barber-photo"><div className="phone-barber-tag">#A2BC31</div></div>
                    <div className="phone-barber-info">
                      <div className="phone-barber-name">Darius Moore</div>
                      <div className="phone-barber-meta">Houston, TX &middot; &#9733; 4.9 &middot; 128 reviews</div>
                      <div className="phone-slots">
                        <div className="phone-slot">9:00</div>
                        <div className="phone-slot active">10:30</div>
                        <div className="phone-slot">11:00</div>
                        <div className="phone-slot">12:00</div>
                        <div className="phone-slot full">Full</div>
                        <div className="phone-slot">2:00</div>
                      </div>
                    </div>
                  </div>
                  <div className="phone-asap-banner">
                    <i className="ti ti-bolt" style={{fontSize:'15px',color:'#D4820A'}}></i>
                    <span style={{fontSize:'12px',color:'#D4820A',fontWeight:'500'}}>ASAP queue available &middot; 4 waiting</span>
                  </div>
                </div>
              </div>
              <div className="hero-badge badge-left">
                <div style={{width:'28px',height:'28px',borderRadius:'50%',background:'#E8F7F0',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <i className="ti ti-check" style={{fontSize:'15px',color:'#2D9E6B'}}></i>
                </div>
                <div>
                  <div style={{fontSize:'12px',fontWeight:'600',color:'#1C1C1E'}}>Booked!</div>
                  <div style={{fontSize:'11px',color:'#8A8A8F'}}>10:30 AM &middot; Darius</div>
                </div>
              </div>
              <div className="hero-badge badge-right">
                <i className="ti ti-message" style={{fontSize:'16px',color:'#D4820A'}}></i>
                <div>
                  <div style={{fontSize:'12px',fontWeight:'600',color:'#1C1C1E'}}>Slot opened!</div>
                  <div style={{fontSize:'11px',color:'#8A8A8F'}}>Reply YES to claim</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div style={{maxWidth:'1160px',margin:'0 auto',padding:'0 5% 80px'}}>
        <div className="stats-bar">
          <div className="stat-item"><div className="stat-value">500<span>+</span></div><div className="stat-label">Barbers on platform</div></div>
          <div className="stat-item"><div className="stat-value">12<span>k</span></div><div className="stat-label">Appointments booked</div></div>
          <div className="stat-item"><div className="stat-value">4.9<span>&#9733;</span></div><div className="stat-label">Average barber rating</div></div>
          <div className="stat-item"><div className="stat-value">94<span>%</span></div><div className="stat-label">Show-up rate</div></div>
        </div>
      </div>

      <div id="for-barbers" style={{maxWidth:'1160px',margin:'0 auto',padding:'0 5% 80px'}}>
        <div className="section-header">
          <div className="section-label">Built for both sides</div>
          <h2 className="section-title">Everything you need, nothing you don&apos;t</h2>
          <p className="section-sub">LineUp is designed for solo barbers who want a smarter business, and customers who want a better booking experience.</p>
        </div>
        <div className="value-split">
          <div className="value-card">
            <div className="value-card-label barber"><i className="ti ti-scissors" style={{fontSize:'13px'}}></i> For Barbers</div>
            <h3>Run your shop like a pro &mdash; without the chaos</h3>
            <p>Your own storefront, smart scheduling, and a queue that fills your gaps automatically.</p>
            <ul className="feature-list barber">
              <li><div className="icon-wrap"><i className="ti ti-layout-dashboard"></i></div><span>Dashboard with live schedule, earnings, and queue status</span></li>
              <li><div className="icon-wrap"><i className="ti ti-photo"></i></div><span>Photo gallery to showcase your work</span></li>
              <li><div className="icon-wrap"><i className="ti ti-qrcode"></i></div><span>Unique QR tag clients scan to find you instantly</span></li>
              <li><div className="icon-wrap"><i className="ti ti-bolt"></i></div><span>ASAP queue fills cancelled slots automatically</span></li>
              <li><div className="icon-wrap"><i className="ti ti-credit-card"></i></div><span>Automatic no-show fee protection via Stripe</span></li>
            </ul>
            <div style={{marginTop:'24px'}}><Link href="/auth" className="btn btn-amber">Start free trial &rarr;</Link></div>
          </div>
          <div className="value-card">
            <div className="value-card-label customer"><i className="ti ti-user" style={{fontSize:'13px'}}></i> For Customers</div>
            <h3>Find a great barber and book in under a minute</h3>
            <p>Browse top-rated barbers near you, pick a time, or hop on the waitlist for the next open slot.</p>
            <ul className="feature-list customer">
              <li><div className="icon-wrap"><i className="ti ti-map-pin"></i></div><span>Explore barbers with photos, ratings, and real availability</span></li>
              <li><div className="icon-wrap"><i className="ti ti-calendar"></i></div><span>Book appointments in seconds &mdash; no phone calls</span></li>
              <li><div className="icon-wrap"><i className="ti ti-bolt"></i></div><span>ASAP queue &mdash; get texted the moment a slot opens</span></li>
              <li><div className="icon-wrap"><i className="ti ti-qrcode"></i></div><span>Scan a QR tag to pull up any barber instantly</span></li>
              <li><div className="icon-wrap"><i className="ti ti-message"></i></div><span>SMS confirmations &mdash; no app required to confirm</span></li>
            </ul>
            <div style={{marginTop:'24px'}}><Link href="/explore" className="btn btn-amber-outline">Find a barber &rarr;</Link></div>
          </div>
        </div>
      </div>

      <div className="how-bg" id="how-it-works">
        <div className="section" style={{paddingTop:'72px',paddingBottom:'72px'}}>
          <div className="section-header" style={{textAlign:'center'}}>
            <div className="section-label" style={{textAlign:'center'}}>Simple by design</div>
            <h2 className="section-title" style={{margin:'0 auto 14px'}}>How LineUp works</h2>
            <p className="section-sub" style={{margin:'0 auto',textAlign:'center'}}>From search to seated in four steps.</p>
          </div>
          <div className="steps-grid">
            <div className="step-card"><div className="step-num">1</div><div className="step-title">Find your barber</div><div className="step-desc">Browse, search by name, or scan a QR tag to pull up any barber&apos;s profile instantly.</div></div>
            <div className="step-card"><div className="step-num">2</div><div className="step-title">Pick a service &amp; time</div><div className="step-desc">See live availability and book a slot &mdash; or join the ASAP queue for fully-booked barbers.</div></div>
            <div className="step-card"><div className="step-num">3</div><div className="step-title">Get confirmed</div><div className="step-desc">Receive an SMS confirmation. Cancel anytime with 1 hour notice, no penalty.</div></div>
            <div className="step-card"><div className="step-num">4</div><div className="step-title">Show up &amp; get fresh</div><div className="step-desc">Walk in at your time, pay at the shop. Rate your barber after.</div></div>
          </div>
        </div>
      </div>

      <div style={{maxWidth:'1160px',margin:'0 auto',padding:'80px 5%'}}>
        <div className="asap-section">
          <div>
            <div className="asap-eyebrow"><i className="ti ti-bolt" style={{fontSize:'12px'}}></i> The ASAP Queue</div>
            <h2 className="asap-title">Never miss a last-minute slot again</h2>
            <p className="asap-desc">When your barber is fully booked, join the ASAP queue. The moment a slot opens, everyone gets a text. First to reply YES gets it.</p>
            <div className="asap-steps">
              <div className="asap-step"><div className="asap-step-icon"><i className="ti ti-user-plus"></i></div><div className="asap-step-text"><strong>Join the queue</strong> &mdash; opt in with your phone number.</div></div>
              <div className="asap-step"><div className="asap-step-icon"><i className="ti ti-message"></i></div><div className="asap-step-text"><strong>Get an SMS</strong> the moment a slot opens.</div></div>
              <div className="asap-step"><div className="asap-step-icon"><i className="ti ti-check"></i></div><div className="asap-step-text"><strong>Reply YES</strong> within 5 minutes to claim the slot.</div></div>
            </div>
          </div>
          <div className="asap-visual">
            <div className="asap-card">
              <div className="asap-card-title">ASAP queue &middot; Darius Moore</div>
              <div className="asap-queue-item"><div className="asap-queue-num">1</div><div className="asap-queue-name">Alex R.</div><div className="asap-queue-time">Waiting 22 min</div></div>
              <div className="asap-queue-item"><div className="asap-queue-num">2</div><div className="asap-queue-name">Ben C.</div><div className="asap-queue-time">Waiting 35 min</div></div>
              <div className="asap-queue-item"><div className="asap-queue-num">3</div><div className="asap-queue-name">Malik S.</div><div className="asap-queue-time">Waiting 41 min</div></div>
            </div>
            <div className="asap-sms-card">
              <div className="asap-sms-header"><i className="ti ti-message" style={{fontSize:'12px'}}></i> SMS from LineUp</div>
              <div className="sms-bubble">Hey Alex! A slot just opened with Darius Moore &mdash; 11:30 AM today. Reply <strong>YES</strong> within 5 min to claim it.</div>
              <div style={{overflow:'hidden'}}><div className="sms-reply">YES</div></div>
              <div style={{clear:'both',marginTop:'10px',fontSize:'12px',color:'rgba(255,255,255,0.4)'}}>&#10003; Slot confirmed &middot; 11:30 AM &middot; Darius Moore</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{maxWidth:'1160px',margin:'0 auto',padding:'0 5% 80px'}}>
        <div className="section-header"><div className="section-label">Real feedback</div><h2 className="section-title">Loved by barbers and clients</h2></div>
        <div className="reviews-grid">
          <div className="review-card"><div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p className="review-text">&ldquo;The ASAP queue is a game changer. Now that slot fills itself within minutes.&rdquo;</p><div className="review-author"><div className="review-avatar" style={{background:'linear-gradient(135deg,#D4820A,#F5C542)'}}>DM</div><div><div className="review-name">Darius M.</div><div className="review-role">Solo barber &middot; Houston, TX</div></div></div></div>
          <div className="review-card"><div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p className="review-text">&ldquo;I got a text at 11am saying a slot opened at 11:30. Showed up, got a fresh cut. LineUp is nuts.&rdquo;</p><div className="review-author"><div className="review-avatar" style={{background:'linear-gradient(135deg,#2D9E6B,#4AC88A)'}}>AR</div><div><div className="review-name">Alex R.</div><div className="review-role">Customer &middot; Houston, TX</div></div></div></div>
          <div className="review-card"><div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p className="review-text">&ldquo;Half my new clients come from scanning my QR tag. I put it on my mirror.&rdquo;</p><div className="review-author"><div className="review-avatar" style={{background:'linear-gradient(135deg,#5A5A9A,#8080C0)'}}>JW</div><div><div className="review-name">Jordan W.</div><div className="review-role">Solo barber &middot; Atlanta, GA</div></div></div></div>
        </div>
      </div>

      <div className="how-bg" id="pricing">
        <div className="section" style={{paddingTop:'72px',paddingBottom:'72px'}}>
          <div className="section-header" style={{textAlign:'center'}}>
            <div className="section-label" style={{textAlign:'center'}}>Simple pricing</div>
            <h2 className="section-title" style={{margin:'0 auto 14px'}}>One plan. No surprises.</h2>
            <p className="section-sub" style={{margin:'0 auto',textAlign:'center'}}>Everything a solo barber needs. Cancel anytime.</p>
          </div>
          <div className="pricing-card">
            <div className="pricing-badge">For Barbers</div>
            <div className="pricing-price"><sup>$</sup>25<sub>/mo</sub></div>
            <div className="pricing-trial">30-day free trial &middot; No credit card required</div>
            <ul className="pricing-features">
              <li><i className="ti ti-check"></i> Public barber profile + photo gallery</li>
              <li><i className="ti ti-check"></i> Smart scheduling &amp; calendar</li>
              <li><i className="ti ti-check"></i> ASAP queue &mdash; auto-fills cancelled slots</li>
              <li><i className="ti ti-check"></i> Unique QR tag for instant client lookup</li>
              <li><i className="ti ti-check"></i> Stripe no-show fee protection</li>
              <li><i className="ti ti-check"></i> SMS notifications via Twilio</li>
              <li><i className="ti ti-check"></i> Analytics dashboard (coming soon)</li>
            </ul>
            <Link href="/auth" className="btn btn-amber" style={{width:'100%',justifyContent:'center',padding:'13px',fontSize:'15px',display:'flex'}}>Start free trial &rarr;</Link>
            <div style={{marginTop:'12px',fontSize:'12px',color:'var(--gray-text)',textAlign:'center'}}>Customer app is always free</div>
          </div>
        </div>
      </div>

      <div style={{maxWidth:'1160px',margin:'0 auto',padding:'80px 5%'}}>
        <div className="cta-banner">
          <h2>Ready to <em>level up</em> your shop?</h2>
          <p>Join hundreds of barbers already using LineUp to fill their books, reduce no-shows, and grow their clientele.</p>
          <div className="cta-actions">
            <button className="app-store-btn"><i className="ti ti-brand-apple" style={{fontSize:'22px'}}></i><div className="store-info"><span className="store-label">Download on the</span><span className="store-name">App Store</span></div></button>
            <button className="app-store-btn"><i className="ti ti-brand-google-play" style={{fontSize:'22px'}}></i><div className="store-info"><span className="store-label">Get it on</span><span className="store-name">Google Play</span></div></button>
            <Link href="/explore" className="btn btn-amber-outline btn-lg">Start on web &rarr;</Link>
          </div>
        </div>
      </div>

      <div style={{maxWidth:'1160px',margin:'0 auto',padding:'0 5%'}}>
        <footer>
          <div className="footer-logo">Line<span>Up</span></div>
          <div className="footer-links">
            <a href="#for-barbers">For Barbers</a>
            <a href="#">For Customers</a>
            <a href="#pricing">Pricing</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
          <div className="footer-copy">&copy; 2026 LineUp. All rights reserved.</div>
        </footer>
      </div>
    </>
  );
}
