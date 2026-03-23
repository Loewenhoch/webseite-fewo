import { ApartmentSection } from "@/components/sections/apartment-section";
import { apartmentData } from "@/lib/site-data";

export function ApartmentSectionB4() {
  return <ApartmentSection id="wohnungen-b4" apartment={apartmentData.b4} reversed />;
}
