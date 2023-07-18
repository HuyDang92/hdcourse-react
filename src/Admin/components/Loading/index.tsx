import { Spinner } from '@material-tailwind/react';

export default function Skeleton() {
  return (
    <div className="flex p-40 w-full items-center justify-center">
      <Spinner className="h-16 w-16 text-blue-500/10" />
    </div>
  );
}
