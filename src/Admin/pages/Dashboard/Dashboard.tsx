import { useEffect, useState } from 'react';
import { storage } from '../../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
const Dashboard = () => {
  const [upload, setUpload] = useState<File | null>(null);
  useEffect(() => {
    document.title = 'Dashboard'; // Thay đổi tiêu đề tại đây
  }, []);
  const handleSubmit = () => {
    if (upload === null) return;
    const imageRef = ref(storage, `courses/${upload.name}`);
    uploadBytes(imageRef, upload).then(() => {
      getDownloadURL(imageRef).then((downloadURL) => {
        console.log('Đường dẫn URL của ảnh:', downloadURL);
        alert('Thành công');
      });
    });
  };
  return (
    <div className="h-[100vh]">
      <div>Dashboard</div>
      <div>
        <input
          type="file"
          onChange={(event) => {
            const selectedFile = event.target.files?.[0];
            if (selectedFile) {
              setUpload(selectedFile);
            }
          }}
        />
        <button onClick={handleSubmit}>Upload</button>
      </div>
    </div>
  );
};

export default Dashboard;
