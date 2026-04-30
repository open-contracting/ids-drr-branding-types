import type { ComponentType } from "react";

// A type that is structurally compatible with Next.js's `StaticImageData`.
export type StaticImageAsset = {
    src: string;
    width: number;
    height: number;
};

export type State = {
    name: string;
    slug: string;
    // Icon shown on the state card in the Analytics Dashboard carousel.
    icon: StaticImageAsset;
    status: "active" | "inactive";
    // GeoJSON loader rendered as an overlay on this state's analytics map.
    overlay?: () => Promise<{ default: unknown }>;
    // Fallback Leaflet zoom level for the state's analytics map.
    zoom?: number;
    // Minimum/maximum allowed zoom level for the state's analytics map.
    minZoom?: number;
    maxZoom?: number;
};

export type Resource = {
    title: string;
    source: string;
    lastUpdated: string;
    updateFrequency: string;
    referencePeriod: string;
    url: string;
    tags: string[];
};

export type Language = {
    // Display string in the language picker.
    label: string;
    // Google Translate language code.
    value: string;
};

export type DeploymentConfig = {
    // States shown in the Analytics Dashboard carousel on the home page.
    states?: State[];
    // Cards prepended to the Resources carousel before the API-fetched datasets.
    resources?: Resource[];
    // Languages offered in the Google Translate dropdown.
    // Empty array hides the dropdown.
    languages?: Language[];
    // next-intl locale codes for which the deployment ships UI translations,
    // and which are exposed as routes. Defaults to ["en"].
    locales?: string[];
    // The locale used for unprefixed paths. Must be one of `locales`.
    // Defaults to the first entry in `locales`.
    defaultLocale?: string;
    // next-intl message overrides, keyed by locale code. The frontend
    // ships English defaults only (locales/en.json); for English, this
    // is deep-merged on top of those defaults. For any other locale,
    // these messages are the deployment's full translation set, with
    // any missing keys falling back to the English defaults.
    messages?: Record<string, Record<string, unknown>>;
    // Site logo shown in the header. Pass a TS-imported asset directly
    // (e.g. `import logo from './logo.png'). Undefined hides the logo.
    logo?: StaticImageAsset;
    // Foreground image on top of `heroBackground` in the home-page hero section.
    // Pass a TS-imported asset directly. Undefined hides the image.
    heroForeground?: StaticImageAsset;
    // Home-page hero background image URL (typically a TS asset import's `.src`).
    // Occupies a 560px-tall section. Empty string omits the image.
    heroBackground?: string;
    // Browser-tab favicon (typically a multi-resolution .ico). Empty
    // string or undefined omits the <link rel="icon">.
    favicon?: string;
    // iOS home-screen icon (180x180 PNG). Empty string or undefined
    // omits the <link rel="apple-touch-icon">.
    appleIcon?: string;
    // Image used in Open Graph and Twitter card meta tags for link
    // previews. Empty string or undefined omits the image fields.
    openGraphImage?: string;
    // URL for the "Read the user guide" CTA in the analytics detail
    // panel. Empty string or undefined hides the CTA.
    userGuideLink?: string;
    // URL for the "Read the documentation" / "Explore Source Data" CTAs in
    // the analytics detail panel. Empty string or undefined hides the CTAs.
    docsLink?: string;
    // Whether the About Us feature is enabled.
    // Requires the branding package to implement an `AboutPage` component.
    aboutUsEnabled?: boolean;
    // Whether the PDF report feature is enabled.
    // Requires the backend plugin to implement a GET /report endpoint.
    reportsEnabled?: boolean;
};

// The full surface that a branding package exports.
export type Exports = {
    config: DeploymentConfig;
    AboutPage?: ComponentType;
    About?: ComponentType;
    Partners?: ComponentType;
    DataStories?: ComponentType;
    Footer?: ComponentType;
    Credits?: ComponentType;
    PartnerLogos?: ComponentType;
};
