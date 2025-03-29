import { ApplicationCard } from "../../_components/JobApplication/ApplicationCard";
import { OfferCard } from "../../_components/JobApplication/OfferCard";
import { ProcessCard } from "../../_components/JobApplication/ProcessCard";
import { Timeline } from "../../_components/JobApplication/TimeLine";


export default function Page() {
  return (
    <div className="flex flex-col md:flex-row gap-4 px-4">
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
