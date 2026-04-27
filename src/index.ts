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
    // URL of the site logo shown in the header (typically a TS asset import's
    // `.src`). Empty string or undefined hides the logo.
    logo?: string;
    // Foreground brand wordmark layered on top of `heroImage` in the
    // home-page hero section. Empty string or undefined hides the image.
    heroLogo?: string;
    // Image used in Open Graph and Twitter card meta tags for link
    // previews. Empty string or undefined omits the image fields.
    openGraphImage?: string;
    // Browser-tab favicon (typically a multi-resolution .ico). Empty
    // string or undefined omits the <link rel="icon">.
    favicon?: string;
    // iOS home-screen icon (180x180 PNG). Empty string or undefined
    // omits the <link rel="apple-touch-icon">.
    appleIcon?: string;
    // URL for the "Read the user guide" CTA in the analytics detail
    // panel. Empty string or undefined hides the CTA.
    userGuideLink?: string;
    // URL for the "Read the documentation" / "Explore Source Data" CTAs in
    // the analytics detail panel. Empty string or undefined hides the CTAs.
    docsLink?: string;
    // Whether the per-state PDF-report download button is shown.
    reportsEnabled?: boolean;
};
