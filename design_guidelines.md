# AI Legal Advisor - Comprehensive Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional legal platforms, modern SaaS applications (Linear, Stripe), and trustworthy service providers. The design emphasizes credibility, professionalism, and modern interactivity while maintaining accessibility for legal consultation.

## Typography System

### Font Families
- **Primary Font**: Inter or Poppins (Google Fonts) - for body text and general UI
- **Heading Font**: Montserrat or DM Sans (Google Fonts) - for headlines and emphasis

### Typography Scale
- **Hero Headline**: text-5xl md:text-6xl lg:text-7xl, font-bold
- **Section Headers**: text-3xl md:text-4xl lg:text-5xl, font-bold
- **Subsection Headers**: text-2xl md:text-3xl, font-semibold
- **Card Titles**: text-xl md:text-2xl, font-semibold
- **Body Text**: text-base md:text-lg, font-normal
- **Chat Query (User)**: text-lg md:text-xl, font-bold (dark/emphasized)
- **Chat Response**: text-base, font-normal
- **Button Text**: text-base md:text-lg, font-semibold
- **Small Text/Captions**: text-sm, font-normal

## Layout System

### Spacing Primitives
Use Tailwind spacing units: **2, 4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Gaps: gap-4, gap-6, gap-8
- Padding: p-4, p-6, p-8, p-12, p-16, p-20
- Margins: m-4, m-6, m-8, m-12
- Section spacing: py-16 md:py-20 lg:py-24

### Container Widths
- **Full-width sections**: w-full with max-w-7xl mx-auto px-4 md:px-6
- **Content sections**: max-w-6xl mx-auto
- **Text content**: max-w-4xl mx-auto
- **Chat interface**: max-w-5xl mx-auto

### Grid Systems
- **Features Grid**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- **How It Works**: grid-cols-1 md:grid-cols-3
- **FAQ**: Single column with max-w-3xl
- **Footer**: grid-cols-1 md:grid-cols-2 lg:grid-cols-4

## Component Library

### Navigation Bar
- Fixed position with backdrop blur effect
- Height: h-16 md:h-20
- Contains: Logo (left), Navigation links (center), User info + Logout button (right when logged in)
- Shadow: shadow-lg on scroll
- Background: Semi-transparent with backdrop-blur

### Hero Section
- Height: min-h-screen with content vertically centered
- Background: Purple to blue gradient overlay on legal imagery (scales of justice, law books)
- Content: Centered headline, subheadline, primary CTA button
- CTA button: Large size with blurred background, shadow-xl, prominent positioning

### Feature Cards
- Border radius: rounded-xl or rounded-2xl
- Padding: p-6 md:p-8
- Hover effects: transform scale-105, shadow-2xl transition
- Icon size: w-12 h-12 md:w-16 h-16
- Structure: Icon → Title → Description

### Chat Interface
- Container: max-w-5xl with rounded-2xl, shadow-2xl
- Message bubbles: User (right-aligned, distinct style) vs AI (left-aligned)
- User query: **Bold/dark heading** followed by timestamp
- AI response structure: Next Steps section → Relevant Articles/Laws section
- Input area: Fixed bottom with backdrop blur, rounded full input field
- Send button: Icon button with hover shadow effect

### Authentication Pages (Login/Register)
- Centered card layout: max-w-md
- Background: Gradient or subtle pattern
- Form fields: Rounded-lg inputs with focus ring effects
- Validation: Real-time feedback with icons
- Password strength indicator for registration
- Remember me checkbox for login

### About Constitution Page
- Hero section with constitution imagery
- Grid layout showcasing constitutional bodies
- Cards for High Court, Supreme Court info
- Download button prominently featured with icon

### About Us Section
- Two-column layout (content + team visual)
- Mission statement emphasized
- Team member cards if applicable
- Padding: py-20 md:py-24

### FAQ Section
- Accordion-style collapsible items
- Question: font-semibold with expand/collapse icon
- Answer: Hidden/revealed with smooth transition
- Hover: Background color change
- Max width: max-w-3xl

### Footer
- Background: Dark gradient or solid dark color
- Grid: 4 columns on desktop (About, Quick Links, Legal, Contact)
- Privacy Policy and Terms links prominently displayed
- Social media icons
- Copyright notice centered at bottom
- Padding: py-12 md:py-16

## Interactive Effects

### Hover States
- **Cards**: scale-105, shadow-xl, border color change
- **Buttons**: brightness-110, scale-105, shadow-lg
- **Links**: text color change, underline decoration
- **Feature icons**: rotate slightly or scale

### Scroll Animations
- **Fade-in**: opacity-0 to opacity-100 on viewport entry
- **Slide-up**: translate-y-8 to translate-y-0
- **Stagger**: Sequential animation for card grids (100ms delay between items)
- Apply to: Feature cards, FAQ items, About Us content, Footer sections

### Transitions
- Duration: transition-all duration-300 ease-in-out (standard)
- Button interactions: duration-200
- Page transitions: duration-500

## Images

### Hero Image
- **Large hero background image**: Scales of justice, law books, or Indian legal symbolism
- Treatment: Dark gradient overlay (opacity-60 to opacity-80) for text readability
- Position: Background with bg-cover bg-center
- Alt approach: Split hero with image on one side

### Feature Section Images
- Icons or illustrations representing AI capabilities
- Constitutional imagery for About Constitution page
- Professional team photos for About Us (if applicable)

### Chat Interface
- Avatar icons for user and AI assistant
- Document icons for downloadable constitution

## Design Principles

1. **Trust & Credibility**: Professional aesthetics with legal imagery, authoritative typography
2. **Clarity**: Clear information hierarchy, well-spaced content, readable font sizes
3. **Interactivity**: Engaging hover effects and scroll animations without overwhelming
4. **Accessibility**: Sufficient contrast, focus states, semantic HTML structure
5. **Consistency**: Unified spacing system, consistent component patterns throughout
6. **Modern Polish**: Subtle shadows, smooth transitions, contemporary gradient treatments

## Protected Route Behavior
- Unauthorized access redirects to login page
- Post-logout automatically redirects to homepage
- Logged-in state shows user info in navbar with logout option

This comprehensive design creates a professional, trustworthy, and modern AI Legal Advisor platform with engaging interactions and clear information architecture.