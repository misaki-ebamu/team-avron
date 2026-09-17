import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full flex-grow flex flex-col items-center justify-center py-24 text-center px-4">
      <h1 className="text-9xl font-black text-slate-100 mb-8">404</h1>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
      <p className="text-slate-600 max-w-md mx-auto mb-10">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>
    </div>
  );
}
