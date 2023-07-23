import { Spinner } from '@material-tailwind/react';

export default function LoadingLocal() {
  return (
    <div className="flex w-full items-center justify-center p-40">
      <Spinner className="h-16 w-16 text-blue-500/10" />
    </div>
  );
}
