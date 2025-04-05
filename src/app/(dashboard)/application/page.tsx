import { ApplicationCardV2 } from "../../_components/JobApplication/ApplicationCardV2";
import { OfferCard } from "../../_components/JobApplication/OfferCard";
import { ProcessCard } from "../../_components/JobApplication/ProcessCard";
import { Timeline } from "../../_components/JobApplication/TimeLine";


export default function Page() {
  return (
    <div className="flex flex-col md:flex-row gap-4 px-4">
      {/* Cards principales */}
      <div className="flex flex-col md:flex-row gap-4 flex-1">
        <OfferCard />


        <ApplicationCardV2 />
        <ProcessCard />
      </div>

      {/* Timeline historique */}
      <div className="hidden xl:flex w-[250px]">
        <Timeline />
      </div>
    </div>
  )
}
