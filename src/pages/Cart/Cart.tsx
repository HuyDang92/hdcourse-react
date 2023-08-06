import { Input } from '@material-tailwind/react';
import Button from 'components/Button';
import CourseComponents from 'components/Course';
import { useGetCartQuery, useGetWishListQuery } from 'features/Auth/auth.service';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';

const Cart = () => {
  const user = useSelector((state: RootState) => state.auth.currentUser);
  const userId = user?.uid || 'null';
  const cart = useGetCartQuery(userId);

  useEffect(() => {
    document.title = 'Giỏ hàng';
  }, []);
  return (
    <div className="mx-auto  max-w-7xl space-y-4 py-10">
      <h1 className="text-3xl font-bold text-darkLight ">Giỏ hàng</h1>
      <p className="font-medium ">Có {cart.data && cart?.data.length} khóa học trong giỏ hàng</p>
      <div className="flex">
        <div className="w-[70%] space-y-4">
          <div className="">
            {cart.data?.map((item: any, index: any) => (
              <CourseComponents row key={index} data={item} />
            ))}
          </div>
        </div>
        <div className="w-[30%]">
          <div className="ms-10 space-y-5 rounded-xl p-4 shadow-border-full">
            <div className="text-xl font-semibold text-gray-600">Tổng:</div>
            <span className="py-3 text-3xl font-bold text-darkLight">
              {new Intl.NumberFormat('vi-VN').format(1300000)}đ
            </span>
            <Button primary rounded_md width_full>
              Thanh toán
            </Button>
            <div className="border-t-2 py-2">
              <div className="pb-2 text-xl font-semibold text-gray-600">Khuyến mãi:</div>
              <Input
                type="cupon"
                label="Nhập mã khuyến mãi"
                className="py-2"
                containerProps={{
                  className: 'min-w-0',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
