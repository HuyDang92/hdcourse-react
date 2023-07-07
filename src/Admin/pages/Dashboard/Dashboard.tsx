import { useEffect, useState } from 'react';
import className from 'classnames/bind';
import React from 'react';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard'; // Thay đổi tiêu đề tại đây
  }, []);
  return (
    <div className="h-[100vh]">
      <div>Dashboard</div>
    </div>
  );
};

export default Dashboard;
