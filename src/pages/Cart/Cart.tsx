import { Input } from '@material-tailwind/react';
import Button from 'components/Button';
import CourseComponents from 'components/Course';
import { useGetCartQuery } from 'features/Auth/auth.service';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'stores/store';
import { ICourse } from 'types/Home';

const Cart = () => {
  const user = useSelector((state: RootState) => state.auth.currentUser);
  const userId = user?.uid || 'null';
  const cart = useGetCartQuery(userId);
  const [totalCart, setTotalCart] = useState<number>(0);

  useEffect(() => {
    document.title = 'Giỏ hàng';
    if (cart?.data) {
      const sum = cart.data.reduce(
        (accumulator: number, item: ICourse) => accumulator + item.price,
        0
      );
      setTotalCart(sum);
      // if (totalCart === 0) {
      //   setTotalCart(0);
      // }
    }
  }, [cart.isFetching]);

  return (
    <div className="mx-auto  max-w-7xl space-y-4 py-10">
      <h1 className="text-3xl font-bold text-darkLight ">Giỏ hàng</h1>
      <p className="font-medium ">Có {cart.data && cart?.data.length} khóa học trong giỏ hàng</p>
      <div className="flex">
        {totalCart === 0 ? (
          <div className="w-full rounded-3xl border-2 p-16 text-center">
            <div className="">
              <h1 className="py-3 text-2xl font-bold text-gray-400">Giỏ hàng trống</h1>
              <Link to="/">
                <Button primary rounded_md>
                  Khám phá ngay
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="w-[70%] space-y-4">
            <div className="">
              {cart.data?.map((item: any, index: any) => (
                <CourseComponents cart row key={index} data={item} />
              ))}
            </div>
          </div>
        )}
        {totalCart !== 0 && (
          <div className="w-[30%]">
            <div className="ms-10 space-y-5 rounded-xl p-4 shadow-border-full">
              <div className="text-xl font-semibold text-gray-600">Tổng:</div>
              <span className="py-3 text-3xl font-bold text-darkLight">
                {new Intl.NumberFormat('vi-VN').format(totalCart)}đ
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
        )}
      </div>
    </div>
  );
};

export default Cart;
