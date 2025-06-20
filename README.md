# Shell AI Dashboard POC

![Shell Logo](/public/shell-pecten.svg)

## Overview

The Shell AI Dashboard POC is a hackathon project developed for the 2025 Qlik Hackathon. This proof-of-concept application demonstrates how AI-driven analytics can optimize fuel mixing operations and provide actionable insights for Shell facilities.

The dashboard integrates with Qlik's embedded analytics platform to visualize production data, consumption patterns, energy source comparisons, and historical cost trends. It also features an AI-powered optimization recommendation system.

## Features

- **Interactive Dashboards**: Embedded Qlik visualizations for real-time data analysis
- **KPI Monitoring**: At-a-glance metrics for blend ratios, emissions offsets, costs, and yield efficiency
- **Blend Scenario Simulation**: Tool to simulate different fuel blending scenarios (concept)
- **AI-Driven Insights**: Automated optimization recommendations based on operational data (concept)

## Technology Stack

- React 19 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Qlik Embed React for analytics integration
- OAuth2 authentication for secure access

## Getting Started

### Qlik Setup

1. Upload the included QVF file to your Qlik Sense tenant:
   - Log in to your Qlik Cloud tenant
   - Navigate to the Content section
   - Click on "Add new" and select "Upload app"
   - Select the QVF file from the `deps/Hackathon.qvf` file
   - Note the generated App ID after upload

2. Create an OAuth client in your Qlik Cloud tenant:
   - Go to Settings > Integration > OAuth clients
   - Create a new OAuth client
   - Set the redirect URI to `https://localhost:5173/auth/callback`
   - Copy the generated Client ID

3. Update the configuration in the code:
   - Open `src/App.tsx`
   - Update the `hostConfig` object with:
     - Your Qlik tenant hostname
     - Your OAuth Client ID
   - Open `src/components/Dashboard.tsx` 
   - Update all `appId` properties with your uploaded app's ID

### Run the Application

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open https://localhost:5173 in your browser

## Authentication

The application uses OAuth2 for authentication with Qlik Cloud. The redirect URI is configured to `https://localhost:5173/auth/callback`. Make sure this matches the redirect URI in your OAuth client settings.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally
