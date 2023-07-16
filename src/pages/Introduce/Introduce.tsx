import { useEffect } from 'react';

const Introduce = () => {
  useEffect(() => {
    document.title = 'Giới thiệu'; // Thay đổi tiêu đề tại đây
  }, []);
  return (
    <div className="h-[100vh]">
      <div>Giới thiệu</div>
    </div>
  );
};

export default Introduce;
