import { ApplicationCard } from "../../_components/ApplicationCard";
import { OfferCard } from "../../_components/OfferCard";
import { ProcessCard } from "../../_components/ProcessCard";
import { Timeline } from "../../_components/TimeLine";


export default function Page() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Cards principales */}
      <div className="flex flex-col md:flex-row gap-4 flex-1">
        <OfferCard />


        <ApplicationCard />
        <ProcessCard />
      </div>

      {/* Timeline historique */}
      <div className="hidden xl:flex w-[250px]">
        <Timeline />
      </div>
    </div>
  )
}
