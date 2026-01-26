# WorkWave



<p>WorkWave is a modern freelance platform built with Next.js 15, tailored to connect clients with skilled freelancers. It provides a seamless experience for managing projects, offers, and real-time communication.</p>

---

## Table of Contents
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Linting & Formatting](#linting--formatting)
- [Features](#features)
- [Security & Validation](#security--validation)
- [License](#license)

## Project Structure
```
src/
├── api/             # REST and WebSocket API services
├── app/             # Next.js App Router pages and layouts
│   ├── (auth)/      # Authentication routes (login, signup)
│   ├── (landing)/   # Landing page routes
│   └── (main)/      # Protected application routes
├── components/      # Reusable UI components
│   ├── Auth/        # Authentication forms
│   ├── inbox/       # Chat interfaces
│   ├── profile/     # User profile components
│   └── user-space/  # Dashboards for Clients and Freelancers
├── hooks/           # Custom React hooks
├── store/           # Zustand state management
└── utils/           # Helper functions and types
    └── types/
        └── validation/ # Zod schemas
```

## Technologies

- **Framework:** Next.js 16 (App Router), React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **State Management:** Zustand
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Networking:** Axios (REST), Socket.io-client (Real-time)
- **Linting & Formatting:** ESLint, Prettier

---

## Installation

**1. Clone the repository**

```bash
git clone <repository-url>
cd workwave/frontend
```

**2. Install dependencies**:

```bash
npm install
```



## Running the Project

| Environment | Command | Description |
|---|---|---|
| Development | `npm run dev` | Start the project in development mode using Turbopack |
| Production | `npm run build` | Build the application for production |
| Production | `npm run start` | Start the built application |

## Linting & Formatting

| Task | Command | Description |
|---|---|---|
| Linting | `npm run lint` | Check code quality using ESLint |
| Formatting | `npm run format` | Format code using Prettier |

## Features

### Authentication & Roles
- **Secure Authentication**: Login and Signup flows with JWT.
- **Role-Based Access**: Specialized dashboards for Clients and Freelancers.
- **Persistent State**: User session management using Zustand.

### Client Space
- **Project Needs**: Post and manage project requirements (`my-needs`).
- **Discovery**: browse freelancer profiles and categories.
- **Management**: Track pending and active projects.

### Freelancer Space
- **Portfolio**: Showcase work and manage services (`my-services`).
- **Dashboard**: Track working projects and history.
- **Profile**: Customizable profile settings.

### Real-Time Communication
- **Instant Messaging**: Real-time chat system powered by Socket.io.
- **Inbox**: Centralized hub for all client-freelancer conversations.

### UI/UX
- **Responsive Design**: Fully responsive interface built with Tailwind CSS.
- **Component Library**: Modular component architecture.

## Security & Validation

#### 1. Form Validation
- Implements **Zod** schemas for robust client-side validation.
- Integreated with **React Hook Form** for performant form handling and error management.

#### 2. Type Safety
- Built entirely with **TypeScript** to ensure type safety and reduce runtime errors.
- Shared type definitions for API responses and component props.

#### 3. Secure Networking
- **Axios** interceptors for centralized error handling and response processing.
- Secure WebSocket connections for chat functionality.
