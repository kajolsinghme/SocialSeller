const StatCard = ({title, value, description, icon}) => {
  return (
    <div className="w-full bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm text-gray-600">{title}</h2>

        <div className="p-2 rounded-lg bg-purple-50">
          {icon}
        </div>
      </div>

      <h1 className="text-2xl font-bold">{value}</h1>

      <p className="text-xs mt-2 text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default StatCard