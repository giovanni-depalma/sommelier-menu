import type { WineItem } from '../types';

export type RegionMap = Record<string, WineItem[]>;
export type CountryMap = Record<string, { wines: WineItem[]; regions: RegionMap }>;
export type CategoryMap = Record<string, CountryMap>;

/**
 * Groups wines by Type -> Country -> Region
 */
export function groupWinesByTypeCountryRegion(wines: WineItem[]): CategoryMap {
    const categories: CategoryMap = {
        Bollicine: {},
        Bianchi: {},
        Rosati: {},
        Rossi: {},
        "Passiti/Distillati": {},
    };

    const ensureCountry = (typeCtx: CountryMap, country: string) => {
        if (!typeCtx[country]) {
            typeCtx[country] = { wines: [], regions: {} };
        }
        return typeCtx[country];
    };

    wines.forEach((wine) => {
        if (categories[wine.type]) {
            const countryCtx = ensureCountry(categories[wine.type], wine.country);

            // Group ALL wines by region
            if (!countryCtx.regions[wine.region]) {
                countryCtx.regions[wine.region] = [];
            }
            countryCtx.regions[wine.region].push(wine);
        }
    });

    return categories;
}

/**
 * Returns countries in the preferred order: Italia, Spagna, Francia, then others alphabetically
 */
export function getSortedCountries(countryMap: CountryMap): string[] {
    const countryOrder = ["Italia", "Spagna", "Francia"];
    const presentCountries = Object.keys(countryMap);

    return countryOrder
        .filter(c => presentCountries.includes(c))
        .concat(presentCountries.filter(c => !countryOrder.includes(c)).sort());
}

/**
 * Returns region names sorted alphabetically
 */
export function getSortedRegions(regionMap: RegionMap): string[] {
    return Object.keys(regionMap).sort();
}
