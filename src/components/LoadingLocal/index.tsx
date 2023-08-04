import { Spinner } from '@material-tailwind/react';

export default function LoadingLocal() {
  return (
    <div className="relative z-[100] flex w-full items-center justify-center p-40">
      <Spinner color="orange" className="h-16 w-16 text-gray-200" />
    </div>
  );
}
