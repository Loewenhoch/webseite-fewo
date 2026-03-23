import { ApartmentSection } from "@/components/sections/apartment-section";
import { apartmentData } from "@/lib/site-data";

export function ApartmentSectionB14() {
  return <ApartmentSection id="wohnungen" apartment={apartmentData.b14} />;
}
