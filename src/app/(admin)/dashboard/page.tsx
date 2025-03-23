import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function Ecommerce() {
  return (
    <>
      <PageTitle title="Dashboard" />
      <h1 className="text-lg font-semibold mb-4">We can show here any dynamic data.</h1>
      {/* <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8 space-y-6">
          <EcommerceMetrics />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <StatisticsChart />
            <MonthlySalesChart />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4 space-y-6">
          <MonthlyTarget />
        </div>
      </div> */}
    </>
  );
}
