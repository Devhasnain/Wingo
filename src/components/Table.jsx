const Table = () => {
  return (
    <table className="sm:text-sm md:text-md w-11/12 mx-auto sm:mx-auto xl:mx-3 xl:w-auto mt-4 text-left text-gray-500 dark:text-gray-400 shadow-xl">
      <thead className="text-[12px] sm:text-[14px] md:text-[17px] text-bold text-white bg-[#ff9901] dark:bg-gray-700 dark:text-gray-400 overflow-hidden rounded-tl-xl rounded-tr-xl">
        <tr>
          <th scope="col" className="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-tl-xl">
            Period
          </th>
          <th scope="col" className="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6 lg:py-5">
            Number
          </th>
          <th scope="col" className="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6 lg:py-5">
            Big Small
          </th>
          <th scope="col" className="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6 lg:py-5  rounded-tr-xl">
            Color
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-2 py-1 sm:px-6 sm:py-4 text-sm sm:font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            20240418010204
          </th>
          <td className="px-2 py-1 sm:px-6 sm:py-4 text-center">
            <span className="text-[20px] md:text-[40px] font-bold text-center">8</span>
          </td>
          <td className="px-2 py-1 sm:px-6 sm:py-4">Big</td>
          <td className="px-2 py-1 sm:px-6 sm:py-4">
            <div className="h-5 w-5 rounded-full bg-red-600"></div>
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-2 py-1 sm:px-6 sm:py-4 text-sm sm:font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            20240418010204
          </th>
          <td className="px-2 py-1 sm:px-6 sm:py-4 text-center">
            <span className="text-[20px] md:text-[40px] font-bold text-center">8</span>
          </td>
          <td className="px-2 py-1 sm:px-6 sm:py-4">Big</td>
          <td className="px-2 py-1 sm:px-6 sm:py-4">
            <div className="h-5 w-5 rounded-full bg-red-600"></div>
          </td>
        </tr>
        <tr className="bg-white dark:bg-gray-800">
          <th
            scope="row"
            className="px-2 py-1 sm:px-6 sm:py-4 text-sm md:text-sm sm:font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            20240418010204
          </th>
          <td className="px-2 py-1 sm:px-6 sm:py-4 text-center">
            <span className="text-[20px] md:text-[40px] font-bold text-center">8</span>
          </td>
          <td className="px-2 py-1 sm:px-6 sm:py-4">Small</td>
          <td className="px-2 py-1 sm:px-6 sm:py-4">
            <div className="h-5 w-5 rounded-full bg-red-600"></div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
