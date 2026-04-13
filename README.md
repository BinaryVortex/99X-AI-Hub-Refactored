![Your Image](https://drive.google.com/uc?export=view&id=1bQbsGnsEQhjvxv8HuHHw0VWiW0wfuhzu)

# 99X AI Hub - AI Agent Management System

A comprehensive, modern dashboard application for AI agent management built with Next.js, featuring a beautiful Nordic-inspired UI design with teal accents. This project provides a complete interface for managing AI agents, monitoring performance metrics, team collaboration, and real-time analytics.

## 🚀 Features

- **Agent Management**: View, filter, and manage AI agents with detailed inline information
- **Interactive Agent Details**: Click on agent cards to view comprehensive details including performance charts, configuration, and execution history - all on the same page
- **Real-time Metrics Dashboard**: Monitor agent performance with interactive charts and analytics
- **Team Collaboration**: User management and team insights
- **Advanced Filtering**: Filter agents by team, environment, model, and status
- **Responsive Design**: Modern UI with Nordic color palette and teal accents
- **TypeScript Support**: Full type safety throughout the application
- **Component Library**: Built with Radix UI and Tailwind CSS
- **Dark Mode Support**: Theme switching capability

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.0
- **UI Components**: Radix UI
- **Charts**: Recharts
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Theme**: Custom CSS variables with dark/light mode

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

You can check your versions with:
```bash
node --version
npm --version
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/DisanduP/99X-AI-HUB-Final-Repo-Push.git
cd 99X-AI-HUB-Final-Repo-Push
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required dependencies including Next.js, React, TypeScript, Tailwind CSS, and other UI libraries.

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 4. Build for Production

```bash
npm run build
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router directory
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page (Dashboard)
│   │   ├── globals.css        # Global styles
│   │   ├── providers.tsx      # Context providers
│   │   ├── types.ts           # TypeScript type definitions
│   │   ├── agents/            # Agents management routes
│   │   │   ├── page.tsx       # Agents list page
│   │   │   └── [id]/          # Dynamic agent detail routes
│   │   │       └── page.tsx
│   │   ├── components/        # Reusable UI components
│   │   │   ├── ui/           # Base UI components (buttons, inputs, etc.)
│   │   │   ├── Sidebar.tsx    # Navigation sidebar
│   │   │   ├── MetricCard.tsx # Metric display cards
│   │   │   ├── StatusBadge.tsx # Status indicator component
│   │   │   └── ErrorBoundary.tsx # Error boundary component
│   │   ├── data/             # Mock data and utilities
│   │   │   └── mockData.ts    # Sample data and filtering functions
│   │   ├── metrics/           # Metrics dashboard page
│   │   │   └── page.tsx
│   │   ├── pages/            # Page components
│   │   │   ├── Agents.tsx     # Agents management page (with inline details)
│   │   │   ├── Dashboard.tsx  # Main dashboard with metrics
│   │   │   ├── AgentDetail.tsx # Agent detail component
│   │   │   ├── Metrics.tsx    # Metrics page
│   │   │   ├── Settings.tsx   # Settings page
│   │   │   └── Team.tsx       # Team management page
│   │   ├── services/         # API service functions
│   │   │   ├── agentService.ts # Agent-related API calls
│   │   │   ├── teamService.ts  # Team-related API calls
│   │   │   └── adminaccessservice.ts # Admin services
│   │   ├── settings/         # Settings page route
│   │   │   └── page.tsx
│   │   └── team/             # Team management route
│   │       └── page.tsx
│   └── styles/               # Styling files
│       ├── fonts.css         # Font definitions
│       ├── index.css         # Main CSS file
│       ├── tailwind.css      # Tailwind CSS imports
│       └── theme.css         # Theme variables and colors
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
├── postcss.config.js         # PostCSS configuration
└── README.md                 # This file
```

## 🎨 Key Features Explained

### Inline Agent Details View
Unlike traditional navigation that redirects to separate pages, this application features an innovative inline details system:
- Click on any agent card to view comprehensive details below the agent grid
- No page navigation required - everything stays on the same page
- Includes performance charts, configuration details, and execution history
- Easy "Back to agents" functionality to return to the grid view

### Advanced Agent Management
- **Real-time Filtering**: Filter agents by team, environment, model, and status
- **Search Functionality**: Search agents by name or description
- **Status Monitoring**: Visual status badges with color coding
- **Performance Metrics**: Success rates, execution times, and usage statistics

### Interactive Dashboard
- **Metric Cards**: Clean, informative cards showing key statistics
- **Performance Charts**: Interactive line charts using Recharts
- **Responsive Grid Layout**: Adapts to different screen sizes
- **Real-time Updates**: Dynamic data with proper loading states

## 🎨 Customization

### Color Theme

The application uses a Nordic-inspired color palette with teal accents:
- **Primary**: Teal (#0891B2)
- **Background**: Light gray (#FAFBFC) / Dark (#111827)
- **Accent**: Light blue (#E0F2FE)

You can customize the theme by modifying the CSS variables in `src/styles/theme.css`.

### Adding New Pages

1. Create a new directory in `src/app/` with a `page.tsx` file
2. Add navigation links in `src/app/components/Sidebar.tsx`
3. Update any routing logic as needed

### UI Components

The project uses Radix UI primitives with Tailwind CSS. All components are located in `src/app/components/ui/` and can be customized or extended as needed.

## 📱 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/DisanduP/99X-AI-HUB-Final-Repo-Push/issues) page
2. Create a new issue with detailed information about your problem
3. Include your Node.js version, npm version, and any error messages

---

**Built with ❤️ for AI Agent Management**

**Happy coding! 🚀**
  
