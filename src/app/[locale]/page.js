import Link from "next/link";
import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";
import Presentation from "../components/presentation/Presentation";

export default function Home({locale}) {
  unstable_setRequestLocale(locale);
 
  return (
    <div>
      <Presentation/>
    </div>
  );
}
