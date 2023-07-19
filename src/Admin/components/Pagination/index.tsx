import React, { useEffect } from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
interface PaginationAdminProps {
  totalPages: number;
  goToPreviousPage: () => void;
  goToNextPage: () => void;
}

const PaginationAdmin: React.FC<PaginationAdminProps> = ({
  totalPages,
  goToPreviousPage,
  goToNextPage,
}) => {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index: any) =>
    ({
      variant: active === index ? 'filled' : 'text',
      color: active === index ? 'orange' : 'blue-gray',
      onClick: () => setActive(index),
    } as any);

  const next = () => {
    if (active === totalPages) return;
    setActive(active + 1);
    goToNextPage();
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
    goToPreviousPage();
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <IconButton key={index} {...getItemProps(index + 1)}>
            {index + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};
export default PaginationAdmin;
