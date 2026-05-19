# Crochet Pattern Tracker

A mobile-friendly crochet companion app designed to help crocheters organize patterns, track progress, and save completed projects.

---

# Project Goal

Build an app that allows users to:

- Store crochet patterns
- Track crochet progress in real time
- Organize finished crochet outputs
- Resume crochet sessions easily
- Use the app comfortably on mobile devices

---

# Tech Stack

## Frontend

- React
- Vite
- TypeScript
- TailwindCSS

## State Management

- Context API + useReducer
OR
- Zustand

## Additional Libraries

- React Router
- React Hot Toast
- Lucide React
- UUID

---

# Project Structure

```txt
src/
├── components/
├── features/
│   ├── patterns/
│   ├── tracking/
│   ├── gallery/
│   └── categories/
├── hooks/
├── services/
├── context/
├── types/
├── utils/
└── pages/
```

---

# Development Roadmap

# Phase 1 — Project Setup

## Goal

Prepare the development environment and establish the project architecture.

## Tasks

### Initial Setup

- [ ] Create React + Vite + TypeScript project
- [ ] Install TailwindCSS
- [ ] Configure ESLint + Prettier
- [ ] Setup folder structure
- [ ] Setup routing

### Dependencies

- [ ] Install React Router
- [ ] Install React Hot Toast
- [ ] Install Zustand OR setup Context API
- [ ] Install UUID package
- [ ] Install icon library

---

# Phase 2 — Pattern Management

## Goal

Allow users to create and manage crochet patterns.

## Tasks

### Pattern Data Model

- [ ] Create TypeScript interfaces/types
- [ ] Define pattern structure
- [ ] Define pattern step structure

### Pattern CRUD

#### Create Pattern

- [ ] Build add pattern form
- [ ] Add form validation
- [ ] Add image upload support
- [ ] Save pattern to state

#### Read Patterns

- [ ] Display all patterns
- [ ] Create responsive grid/list view
- [ ] Show preview image
- [ ] Show categories and difficulty

#### Update Pattern

- [ ] Edit existing patterns
- [ ] Preserve existing progress data

#### Delete Pattern

- [ ] Add delete confirmation modal
- [ ] Remove associated progress data

---

## Pattern Categorization

### Features

- [ ] Create category tags
- [ ] Filter patterns by category
- [ ] Search patterns by title

### Suggested Categories

- Plushies
- Flowers
- Bags
- Wearables
- Home Decor

---

# Phase 3 — Crochet Progress Tracking

## Goal

Create the core crochet-tracking experience.

## Tasks

### Step Tracking

- [ ] Display pattern steps
- [ ] Add step completion toggle
- [ ] Highlight current step

### Row Counter

- [ ] Add increment/decrement buttons
- [ ] Track current row count
- [ ] Prevent negative values

### Repeat Counter

- [ ] Track repeated instructions
- [ ] Display repetition progress

Example:

```txt
Repeat x6
Completed: 2/6
```

---

## Session Persistence

### Features

- [ ] Save active pattern
- [ ] Save current step
- [ ] Save counter values
- [ ] Restore session after refresh

### Persistence Strategy

- [ ] Setup localStorage persistence
- [ ] Auto-save progress changes

---

# Phase 4 — Output Gallery

## Goal

Allow users to save completed crochet projects.

## Tasks

### Output CRUD

- [ ] Add completed project entry
- [ ] Upload output image
- [ ] Add completion date
- [ ] Add notes section

### Gallery View

- [ ] Display completed projects
- [ ] Create responsive image gallery
- [ ] Link outputs to patterns

---

# Phase 5 — UI/UX Improvements

## Goal

Improve usability and mobile experience.

## Tasks

### Mobile Optimization

- [ ] Optimize layout for phones
- [ ] Increase button sizes
- [ ] Improve one-handed usability

### Accessibility

- [ ] Improve color contrast
- [ ] Add keyboard support
- [ ] Add ARIA labels

### User Feedback

- [ ] Add toast notifications
- [ ] Add loading states
- [ ] Add empty states

### Animations

- [ ] Add micro animations
- [ ] Add smooth transitions
- [ ] Animate counter interactions

---

# Phase 6 — Advanced Features

## Goal

Add quality-of-life improvements.

## Tasks

### Favorites

- [ ] Favorite/unfavorite patterns
- [ ] Create favorites page

### Dark Mode

- [ ] Add theme toggle
- [ ] Persist selected theme

### Crochet Utilities

- [ ] Add stitch abbreviation helper
- [ ] Add crochet timer
- [ ] Add yarn inventory tracker

---

# Phase 7 — Backend Integration

## Goal

Enable cloud sync and user accounts.

## Recommended Backend

- Supabase

## Tasks

### Authentication

- [ ] Setup authentication
- [ ] Add login/register pages
- [ ] Protect private routes

### Database

- [ ] Create patterns table
- [ ] Create outputs table
- [ ] Create progress table

### Cloud Sync

- [ ] Sync patterns across devices
- [ ] Sync tracking progress
- [ ] Sync uploaded images

---

# Phase 8 — Progressive Web App (Optional)

## Goal

Make the app installable and offline-friendly.

## Tasks

- [ ] Add PWA support
- [ ] Add offline caching
- [ ] Add install prompt
- [ ] Enable offline progress tracking

---

# Future Features

## Smart Features

- [ ] Voice-controlled row counter
- [ ] AI pattern parser
- [ ] Pattern import from text/PDF
- [ ] Crochet statistics dashboard

## Community Features

- [ ] Share patterns publicly
- [ ] Community gallery
- [ ] Comments and likes

---

# Recommended Development Priority

## Highest Priority

1. Pattern CRUD
2. Step tracking
3. Row counters
4. Session persistence

These features provide the core value of the application.

---

# MVP Definition

The app is considered MVP-complete when users can:

- Create patterns
- Track crochet progress
- Resume previous sessions
- Save finished outputs
- Use the app comfortably on mobile devices

---

# Notes

The primary focus of the project is usability during actual crochet sessions.

The app should prioritize:

- Fast interactions
- Large touch targets
- Minimal typing
- Mobile-first experience
- Comfortable session tracking

