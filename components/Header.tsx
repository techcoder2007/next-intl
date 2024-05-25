import { Link, type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "../components/LocaleSwiccher";

export default function Header() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Header");
  return (
    <header className="...">
      <nav>
        <ul className="...">
          <li>
            <Link href="/" className="...">
              Next.js Weather
            </Link>
          </li>
          <li>
            <Link href="/about/inside" className="...">
              Inside
            </Link>
          </li>
          <li>
            <Link href="/week" className="...">
              This week
            </Link>
          </li>
          <li>
            <Link href="/about" className="...">
              About
            </Link>
          </li>
        </ul>
        <LocaleSwitcher locale={locale} />
      </nav>
    </header>
  );
}
