import { ApplicationsTooltip } from "./ApplicationsTooltip";
import { ApplyFlowLink } from "./ApplyFlowLink";
import { AutomationTooltip } from "./AutomationTooltip";
import { CVBuilderTooltip } from "./CVBuilderTooltip";
import { DashboardTooltip } from "./DashboardTooltip";
import { InterviewPrepTooltip } from "./InterviewPrepTooltip";
import { NewApplicationTooltip } from "./NewApplicationTooltip";

export const TopNavMenu = () => {

  return (
    <nav className="flex flex-col items-center md:pt-0 gap-4 px-2 sm:py-5">

      <ApplyFlowLink className="justify-center" />


      <DashboardTooltip />
      <CVBuilderTooltip />
      <NewApplicationTooltip />
      <AutomationTooltip />
      <ApplicationsTooltip />
      <InterviewPrepTooltip />

    </nav>
  );
};