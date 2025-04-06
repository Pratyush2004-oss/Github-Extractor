import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  );
};

export default LoadingSpinner;