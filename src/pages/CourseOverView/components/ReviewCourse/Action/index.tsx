import { Menu, MenuHandler, MenuList, MenuItem, Button } from '@material-tailwind/react';

export function Action({ children }: any) {
  return (
    <Menu>
      <MenuHandler>{children}</MenuHandler>
      <MenuList>
        <MenuItem>Sửa bình luận</MenuItem>
        <MenuItem>Xóa bình luận</MenuItem>
      </MenuList>
    </Menu>
  );
}
