import 'server-only';
import type { Locale } from '@/i18n.config';

export async function dictionaries() {
    return {
        it: () => import('@/dictionaries/it.json').then((module) => module.default),
        de: () => import('@/dictionaries/de.json').then((module) => module.default),
    };
}

export async function getDictionary(locale: Locale) {
    const dictionariesMap = await dictionaries();
    const dictionary = await dictionariesMap[locale]();
    return dictionary;
}