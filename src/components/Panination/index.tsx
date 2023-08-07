import React from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
interface PaginationAdminProps {
  totalPages: number;
  setCurrentPage: any;
  currentPage: number;
}

const PaginationAdmin: React.FC<PaginationAdminProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index: any) =>
    ({
      variant: currentPage === index ? 'filled' : 'text',
      color: currentPage === index ? 'orange' : 'blue-gray',
      onClick: () => setCurrentPage(index),
    } as any);

  const next = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={currentPage === 1}
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
        disabled={currentPage === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};
export default PaginationAdmin;
