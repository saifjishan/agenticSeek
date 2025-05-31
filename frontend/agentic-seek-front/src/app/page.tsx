import Chat from '@/components/Chat';
import { DocumentTextIcon, PresentationChartBarIcon, TableCellsIcon } from '@heroicons/react/24/outline';

const tools = [
  { name: 'Spreadsheet', icon: TableCellsIcon },
  { name: 'Documentation', icon: DocumentTextIcon },
  { name: 'Presentation', icon: PresentationChartBarIcon },
  { name: 'OmniDox', icon: DocumentTextIcon },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          How can I help today?
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Type a command or ask a question
        </p>
        
        <div className="mb-8">
          <Chat />
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {tools.map((tool) => (
            <button
              key={tool.name}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors p-2"
            >
              <tool.icon className="w-5 h-5" />
              <span>{tool.name}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
