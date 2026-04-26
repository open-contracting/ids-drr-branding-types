export type State = {
    name: string;
    slug: string;
    icon: string;
    status: "active" | "coming_soon";
    // GeoJSON loader rendered as an overlay on this state's analytics map.
    overlay?: () => Promise<{ default: unknown }>;
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
    // Home-page hero background image URL (typically a TS asset import's `.src`).
    // Empty string omits the image.
    heroImage?: string;
    // States shown in the Analytics Dashboard carousel on the home page.
    states?: State[];
    // Cards prepended to the Resources carousel before the API-fetched datasets.
    resources?: Resource[];
    // Languages offered in the Google Translate dropdown.
    // Empty array hides the dropdown.
    languages?: Language[];
    // BCP 47 locale used for Intl.NumberFormat (e.g. "en-IN" for lakh/crore grouping).
    // Empty string falls back to the runtime default.
    numberLocale?: string;
    // Whether the per-state PDF-report download button is shown.
    reportsEnabled?: boolean;
};
