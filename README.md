# LineUp

> Two-sided marketplace connecting solo barbers with customers. Smart scheduling, ASAP waitlist queue, and instant booking.

## Stack

| Layer | Tech |
|---|---|
| Mobile / Web | React Native (Expo) + Next.js |
| Backend | Node.js + Express |
| Database | PostgreSQL + Prisma ORM |
| Auth | Clerk (barber vs. customer roles) |
| SMS | Twilio (ASAP queue alerts) |
| Payments | Stripe (subscriptions + no-show charges) |
| Hosting | Vercel (frontend) + Railway (backend) |

## Frontend Files

| File | Description |
|---|---|
| `theme.js` | Shared design tokens — colors, fonts, radii, borders |
| `LandingPage.html` | Public marketing page |
| `AuthOnboarding.jsx` | Role picker, signup/login, barber + customer onboarding |
| `ExploreCustomer.jsx` | Customer explore — search, filter, barber cards, QR scanner |
| `BookingFlow.jsx` | 3-step booking + ASAP queue modal |
| `BarberDashboard.jsx` | Barber dashboard — schedule, queue, earnings, gallery |
| `BarberProfile.jsx` | Barber profile editor |
| `AnalyticsStub.jsx` | Analytics coming-soon placeholder |

## Design System

All components import from `theme.js`. Key tokens:

```js
AMBER      = "#D4820A"   // primary accent
AMBER_DARK = "#B87A20"   // amber secondary text
GREEN      = "#2D9E6B"   // success / confirmed
PAGE_BG    = "#F7F5F2"   // warm off-white background
INK        = "#1C1C1E"   // primary text
FONT       = "'DM Sans', system-ui, sans-serif"
```

Icons: [Tabler Icons](https://tabler.io/icons)

## MVP Scope

- [x] Landing / marketing page
- [x] Auth + onboarding (barber + customer flows)
- [x] Barber dashboard + profile + photo gallery
- [x] Customer explore page + barber profile view
- [x] Booking flow + ASAP queue (frontend)
- [ ] Backend API (Node/Express)
- [ ] Database schema (PostgreSQL + Prisma)
- [ ] Twilio SMS integration
- [ ] Stripe subscriptions + no-show charges

## Contact

Built by Sebastian Gonzalez · sebastiangonzalez.atl@gmail.com
