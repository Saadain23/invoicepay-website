import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LocaleSwitcher() {
  const router = useRouter()
  const currentLang = router.query.lang || 'fi'

  return (
    <div className="locale-switcher">
      {['en', 'fi'].map((lang) => (
        currentLang !== lang && (
          <Link 
            key={lang} 
            href={`/${lang}${router.pathname.replace('[lang]', '').replace(/^\/+/, '')}`}
            className="locale-link"
          >
            <img 
              src={`/images/${lang}.png`}
              alt={`Switch to ${lang}`}
              width={26}
              height={26}
            />
          </Link>
        )
      ))}
      <style jsx>{`
        .locale-switcher {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          background-color: #f5f5f5;
        }
        .locale-link {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px;
          transition: all 0.2s ease;
          line-height: 0;
        }
        .locale-link:hover {
          background-color: #e0e0e0;
        }
        .locale-link img {
          display: block;
        }
      `}</style>
    </div>
  )
}