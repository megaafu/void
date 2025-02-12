"use client";

import { useState } from "react";
import AnaliticsTable from "@/components/AnaliticsTable";
import InsumosTable from "@/components/InsumosTable";

export default function Sectores() {
  const [activeTab, setActiveTab] = useState("insumos");

  return (
    <div className="container mx-auto py-6 h-screen">
      {/* Tabs Navigation */}
      <div role="tablist" className="tabs tabs-boxed flex justify-center">
        <button
          role="tab"
          className={`tab ${activeTab === "insumos" ? "tab-active bg-primary text-white" : ""}`}
          onClick={() => setActiveTab("insumos")}
        >
          Insumos
        </button>
        <button
          role="tab"
          className={`tab ${activeTab === "analitics" ? "tab-active bg-primary text-white" : ""}`}
          onClick={() => setActiveTab("analitics")}
        >
          Analitics
        </button>
      </div>

      <div className="mt-6">
        {activeTab === "insumos" && <InsumosTable />}
        {activeTab === "analitics" && <AnaliticsTable />}
      </div>
    </div>
  );
}

