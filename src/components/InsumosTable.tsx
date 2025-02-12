"use client";

import { Package } from "@/entities/Insumos";
import { useInsumos } from "@/hooks/useInsumos";

const InsumosTable = () => {
  const { insumosQuery } = useInsumos();

  if (insumosQuery.isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-3 p-6 bg-base-200 rounded-lg shadow-md">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <span className="text-gray-600">Loading sectors...</span>
        </div>
      </div>
    );

  if (insumosQuery.isError)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="alert alert-error shadow-lg w-fit">
          <span> Failed to fetch data. Please try again.</span>
        </div>
      </div>
    );

  const sectors = insumosQuery.data?.sectors || [];
  const inputColumns = insumosQuery.data?.inputsColumns || [];

  const calculatePackage = (packages: Package[], column: string, filter: "received" | "sent"): number => {

    var total = 0;
    packages.forEach((value) => {
      if (value.name == column) {
        filter == "received" ? total += Number(value.received) : total += value.sent;
      }
    });
    return total;
  }

  return (
    <div className="container mx-auto flex flex-col gap-8">
      <h3 className="text-3xl font-bold text-gray-200">Insumos</h3>

      <div className="overflow-x-auto">
        <table className="table w-full border rounded-lg shadow-md">
          <thead>
            <tr className="bg-primary text-white text-left">
              <th className="p-4" rowSpan={2}>Sector</th>
              <th className="p-4 text-center" rowSpan={2}>Produtores</th>
              {inputColumns.map((input) => (
                <th className="p-4 text-center" colSpan={2} key={input}>{input}</th>
              ))}
            </tr>            <tr className="bg-primary text-white text-left">
              {inputColumns.map((input) => (
                <>
                  <th className="p-3 text-center">Sent</th>
                  <th className="p-3 text-center">Received</th>
                </>
              ))}
            </tr>
          </thead>

          <tbody>
            {sectors.length > 0 ? (
              sectors.map((sector) => (
                <tr key={sector.name} className="hover:bg-base-200 transition">
                  <td className="p-4 font-medium">{sector.name}</td>
                  <td className="p-4 text-center">{sector.totalFarmers}</td>
                  {inputColumns.map((input) => (
                    <>
                      <td className="p-4 text-center">{calculatePackage(sector.packages, input, 'sent')}</td>
                      <td className="p-4 text-center">{calculatePackage(sector.packages, input, 'received')}</td>
                    </>
                  ))}
                </tr>))
            ) : (
              <tr>
                <td colSpan={2} className="p-4 text-center text-gray-500">
                  No sectors available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InsumosTable;

