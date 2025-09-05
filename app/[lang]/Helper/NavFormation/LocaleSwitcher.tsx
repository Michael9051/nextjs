'use client';
 import Link from 'next/link';
 import { usePathname } from 'next/navigation';
 import styles from './LocalSwitcher.module.css';

 import { i18n } from '@/i18n.config';

 export default function LocaleSwitcher() {
    const pathname = usePathname();

    const redirectedPathName = (locale: string) => {
        if (!pathname) return `/`;
        const segments = pathname.split('/');
        segments[1] = locale;
        return segments.join('/');
    }
    return (
        <ul className={styles.switcher}>
                {i18n.locales.map((locale) => {
                    return (
                        <li key={locale} className={styles.switcherItemContainer}>
                            <Link
                                href={redirectedPathName(locale)}
                                className={`${styles.switcherItem} ${pathname.split('/')[1] === locale ? styles.active : ''}`}
                            >
                                {locale}
                            </Link>
                        </li>
                    )
                })}
           
        </ul>
    )
}

