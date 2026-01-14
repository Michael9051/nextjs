import React from 'react'
import Home from '@/app/[lang]/components/Home/Home'
import {getDictionary} from '@/lib/dictionary'
import { Locale } from '@/i18n.config';

export default async function Homepage( {
  params
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params;

  const dictionary = await getDictionary(lang);

  return (
    <Home  dictionary={dictionary} />
  )
}

