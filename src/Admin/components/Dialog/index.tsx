import { Fragment, cloneElement, useState } from 'react';
import { PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/solid';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Tooltip,
  IconButton,
} from '@material-tailwind/react';
import { UserPlusIcon } from '@heroicons/react/24/solid';

export default function DiaLog({ children, add, detail, remove }: any) {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(!open);
  };
  // Chuyển setOpen và open cho children
  const childrenWithProps = children ? cloneElement(children, { setOpen }) : null;

  return (
    <Fragment>
      {add && (
        <Button
          onClick={handleOpenDialog}
          className="flex items-center gap-3"
          color="orange"
          size={`sm`}
        >
          <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Thêm người dùng
        </Button>
      )}
      {detail && (
        <Tooltip content="Xem chi tiết">
          <IconButton onClick={handleOpenDialog} variant="text" color="blue-gray">
            <EyeIcon className="h-4 w-4" />
          </IconButton>
        </Tooltip>
      )}
      {remove && (
        <Tooltip content="Xóa người dùng">
          <IconButton onClick={handleOpenDialog} variant="text" color="blue-gray">
            <TrashIcon className="h-4 w-4" />
          </IconButton>
        </Tooltip>
      )}
      <Dialog className="rounded-2xl p-3" open={open} handler={() => setOpen(true)}>
        <DialogBody>{childrenWithProps}</DialogBody>
      </Dialog>
    </Fragment>
  );
}
