/**
 * Site chrome, shared by every page.
 *
 * ```tsx
 * import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
 * ```
 *
 * There's no shared inner layout, so each page composes these itself — render
 * them in this order to match the rest of the site.
 */
export { default as HeaderTop } from "./HeaderTop";
export { default as SiteHeader } from "./SiteHeader";
export { default as SiteFooter } from "./SiteFooter";
export { default as SpecialtiesMegaMenu } from "./SpecialtiesMegaMenu";
export { default as ClinicalExcellenceDropdown } from "./ClinicalExcellenceDropdown";
export { default as DoctorsDropdown } from "./DoctorsDropdown";
