//import Image from "next/image";
import GetPortfolio from "./utility/getPortfolio";

export const metadata = {
  title: "Portfolio",
};
export default function Home() {

  return (
    <div className="flex items-center justify-center px-5">
      <GetPortfolio />
    </div>
  )
}
