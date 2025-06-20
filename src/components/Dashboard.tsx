import React from 'react';
import { QlikEmbed } from '@qlik/embed-react';

interface KPIItem {
  label: string;
  value: string;
}

const kpiData: KPIItem[] = [
  { label: 'Optimal Blend Ratio', value: '75:25 (Diesel:Biofuel)' },
  { label: 'Emissions Offset Potential', value: '420K tons CO₂/year' },
  { label: 'Cost per Gallon', value: '$3.78' },
  { label: 'Projected Yield Efficiency', value: '92%' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white text-black p-6 flex flex-col gap-6 overflow-x-hidden relative dashboard-container">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-[#ccc] pb-4">
        <div className="flex items-center gap-2">
          <img src="/shell-pecten.svg" alt="Shell Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-bold">Fuel Mixing Insight Center</h1>
        </div>
        <div className="text-sm text-[#555]">Facility: Springfield | Updated: Today</div>
      </div>

      {/* KPI Tiles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpiData.map((kpi) => (
          <div key={kpi.label} className="bg-[#fff9db] border border-[#ffe680] rounded-xl shadow p-4">
            <div className="text-sm text-[#555]">{kpi.label}</div>
            <div className="text-xl font-semibold text-[#ED1C24]">{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Embedded Qlik Visualizations */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl shadow border border-[#ccc] p-4 flex flex-col gap-2">
          <h2 className="font-semibold">Production vs Consumption</h2>
          <div className="qlik-embed-container">
            <div>
              <QlikEmbed
                appId="b18f8d96-6afe-478f-a7e0-3877f1f8768e"
                objectId="af73d41b-0d46-4a64-bce5-f710f9b77155"
                ui="analytics/chart"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow border border-[#ccc] p-4 flex flex-col gap-2">
          <h2 className="font-semibold">Energy Source Comparison</h2>
          <div className="qlik-embed-container">
            <div>
              <QlikEmbed
                appId="b18f8d96-6afe-478f-a7e0-3877f1f8768e"
                objectId="95a5314d-be25-411f-bd3e-a335523f4a2b"
                ui="analytics/chart"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Full-width Historical Cost Chart */}
      <div className="col-span-full w-full rounded-xl shadow border border-[#ccc] p-4 flex flex-col gap-2">
        <h2 className="font-semibold">Historical Cost</h2>
        <div className="qlik-embed-container" style={{ height: '300px' }}>
          <div>
            <QlikEmbed
              appId="b18f8d96-6afe-478f-a7e0-3877f1f8768e"
              objectId="yHMmxz"
              ui="analytics/chart"
            />
          </div>
        </div>
      </div>

      {/* Bottom Simulation and AI Insight */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl shadow border border-[#ccc] p-4 flex flex-col gap-2">
          <h2 className="font-semibold">Blend Scenario Simulation</h2>
          <div className="flex gap-2">
            <select className="border border-[#ccc] rounded px-2 py-1">
              <option>Fuel A</option>
              <option value="diesel">Diesel</option>
              <option value="ethanol">Ethanol</option>
            </select>
            <select className="border border-[#ccc] rounded px-2 py-1">
              <option>Fuel B</option>
              <option value="bio">Biofuel</option>
              <option value="gasoline">Gasoline</option>
            </select>
          </div>
          <button className="mt-2 bg-[#ED1C24] text-white px-4 py-2 rounded">Simulate</button>
        </div>

        <div className="bg-[#fff9db] border border-[#ffe680] rounded-xl shadow p-4">
          <h2 className="font-semibold">AI Optimization Tip of the Day</h2>
          <p className="text-sm text-[#333] mt-2">
            Switching to 10% more ethanol at Site B saves $15K/month under current rates.
          </p>
        </div>
      </div>
    </div>
  );
}
