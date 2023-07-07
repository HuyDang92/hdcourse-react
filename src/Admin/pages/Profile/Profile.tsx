import { useEffect, useState } from 'react';
import className from 'classnames/bind';
import React from 'react';

const Profile = () => {
  useEffect(() => {
    document.title = 'Profile'; // Thay đổi tiêu đề tại đây
  }, []);
  return (
    <div className="h-[100vh]">
      <div>Profile</div>
    </div>
  );
};

export default Profile;
