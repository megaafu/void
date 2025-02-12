"use client";

import { Package } from "@/entities/Insumos";
import { useAnalitics } from "@/hooks/useAnalitics";

const AnaliticsTable = () => {
  const { analiticsQuery } = useAnalitics();

  if (analiticsQuery.isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-3 p-6 bg-base-200 rounded-lg shadow-md">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <span className="text-gray-600">Loading sectors...</span>
        </div>
      </div>
    );

  if (analiticsQuery.isError)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="alert alert-error shadow-lg w-fit">
          <span> Failed to fetch data. Please try again.</span>
        </div>
      </div>
    );

  const weeks = analiticsQuery.data?.weeksList || [];
  const technicians = analiticsQuery.data?.technicians || [];

  return (
    <div className="container mx-auto h-screen flex flex-col justify-center gap-8">
      <h3 className="text-3xl font-bold text-gray-800">Analises-Progresso</h3>

      <div className="overflow-x-auto">
        <table className="table w-full border rounded-lg shadow-md">
          <thead>
            <tr className="bg-primary text-white text-left">
              <th className="p-4 text-center"> Sector</th>
              <th className="p-4 text-center"> Area</th>
              <th className="p-4 text-center" >Tecnico</th>
              {weeks.map((week, index) => (
                <th className="p-4 text-center" colSpan={2}>Semana {index}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {technicians.length > 0 ? (
              technicians.map((technician) => (
                <tr key={technician.technician_name} className="hover:bg-base-200 transition">
                  <td className="p-4 text-center">{technician.sector}</td>
                  <td className="p-4 text-center">{technician.area_name}</td>
                  <td className="p-4 font-medium">{technician.technician_name}</td>
                  {(() => {
                    let accumulatedTotal = 0; // Initialize accumulator
                    return technician.weeks.map((record) => {
                      accumulatedTotal += record.total_records; // Add current week's records to accumulator
                      return (
                        <>
                          <td className="p-4 text-center">{record.total_records}</td>
                          <td className="p-4 text-center">{accumulatedTotal}</td>
                        </>
                      );
                    });
                  })()}
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

export default AnaliticsTable;

