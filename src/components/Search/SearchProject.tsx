import IonIcon from '@reacticons/ionicons';

const SearchProject = () => {
  return (
    <div className="flex max-h-[3.125rem] w-3/4 overflow-hidden rounded-xl bg-white shadow-border-full">
      <button className="flex items-center justify-center bg-button-primary p-4 hover:opacity-80">
        <IonIcon name="search" className="text-base text-white duration-300" />
      </button>
      <input
        type="text"
        placeholder="Tìm kiếm dự án FPT Polytechnic"
        className="flex-1 border-none pl-[1.125rem] text-black outline-none"
      />
    </div>
  );
};

export default SearchProject;
