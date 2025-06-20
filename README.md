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

The application uses OAuth2 for authentication with Qlik Cloud. Make sure your Qlik client ID and redirect URI are properly configured in the application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally
