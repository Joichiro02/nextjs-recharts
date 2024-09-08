import { AreaChartComponent } from "@/components/AreaChart";
import CustomPieChart from "@/components/CustomPieChart";
import LineBarChart from "@/components/LineBarChart";

export default function Home() {
  return (
    <div className="h-screen flex items-start justify-start w-full gap-3 bg-white p-5">
      <AreaChartComponent/>
      <CustomPieChart/>
      <LineBarChart/>
    </div>
  )
}