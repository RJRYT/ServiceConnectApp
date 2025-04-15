import React from "react";

function InvoiceTable({ items }) {
  const grandTotal = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return (
    <div className="overflow-x-auto my-2">
      <table className="min-w-full rounded-lg">
        <thead className="border-b ">
          <tr>
            <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold text-gray-700">
              Sl. No
            </th>
            <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold text-gray-700">
              Description
            </th>
            <th className="px-2 sm:px-4 py-2 text-right text-xs sm:text-sm font-semibold text-gray-700">
              Quantity
            </th>
            <th className="px-2 sm:px-4 py-2 text-right text-xs sm:text-sm font-semibold text-gray-700">
              Price
            </th>
            <th className="px-2 sm:px-4 py-2 text-right text-xs sm:text-sm font-semibold text-gray-700">
              Total
            </th>
          </tr>
        </thead>
        <tbody className="">
          {items.map((item, index) => (
            <tr key={index}>
              <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-700">
                {index + 1}
              </td>
              <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-700">
                {item.description}
              </td>
              <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-right text-gray-700">
                {item.quantity}
              </td>
              <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-right text-gray-700">
                ₹{item.price.toFixed(2)}
              </td>
              <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-right text-gray-700">
                ₹{(item.quantity * item.price).toFixed(2)}
              </td>
            </tr>
          ))}
          <tr className="bg-gray-50 font-semibold">
            <td
              colSpan={4}
              className="px-4 py-2 text-right text-sm text-gray-800"
            >
              Grand Total
            </td>
            <td className="px-4 py-2 text-right text-sm text-gray-900">
              ₹{grandTotal.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InvoiceTable;
