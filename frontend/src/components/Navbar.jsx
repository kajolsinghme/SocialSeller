const Navbar = () => {
  return (
    <div className="border flex justify-between items-center px-4 py-2">
      <h1 className="font-semibold text-sm">Dashboard</h1>
      <div className="flex gap-2">
        <div className="rounded-full border-gray-800 bg-gray-100 flex p-2 justify-center items-center">
          <p className="text-xs text-violet-950 font-semibold">RS</p>
        </div>
        <div className="pr-12">
          <h2 className="text-xs font-semibold">rahulseller</h2>
          <p className="text-gray-600 text-xs">rahul@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
