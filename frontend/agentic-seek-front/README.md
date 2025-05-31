# Agentic Seek Frontend

A Next.js-based frontend for Agentic Seek, featuring a modern chat interface with file upload capabilities.

## Features

- Real-time chat interface with AI assistant
- File upload and processing
- Dark mode UI
- Responsive design
- Toast notifications for user feedback

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file with the following variables:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

3. Run the development server:
```bash
npm run dev
```

## Development

The application is built with:
- Next.js 14
- TypeScript
- Tailwind CSS
- Heroicons
- Axios for API communication

### Project Structure

```
src/
  ├── app/              # Next.js app directory
  ├── components/       # React components
  ├── services/         # API services
  └── styles/          # Global styles
```

### API Integration

The frontend communicates with the backend through the API service (`src/services/api.ts`). 
All API calls are centralized in this service for easier maintenance.

## Building for Production

```bash
npm run build
npm start
```

## Environment Variables

- `NEXT_PUBLIC_API_URL`: Backend API URL
- `NEXT_PUBLIC_ENABLE_FILE_UPLOAD`: Enable/disable file upload feature
- `NEXT_PUBLIC_ENABLE_SPEECH`: Enable/disable speech features
- `NEXT_PUBLIC_MAX_MESSAGE_LENGTH`: Maximum message length
