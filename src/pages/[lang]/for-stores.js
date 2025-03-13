import Head from "next/head";
import ForStores from "@/components/ForStores";

export default function ForStoresPage({ translations }) {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{translations.ForStores.meta.title}</title>
                <meta name="description" content={translations.ForStores.meta.description} />
                <meta name="keywords" content={translations.ForStores.meta.keywords} />

                <meta property="og:title" content={translations.ForStores.meta.og.title} />
                <meta property="og:description" content={translations.ForStores.meta.og.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://invoicepay.fi" />
            </Head>
            <ForStores translations={translations} />
        </>
    );
}

export async function getStaticProps({ params }) {
    const lang = params.lang || 'fi';
    try {
        const translations = require(`../../locales/${lang}.json`)
        return { props: { translations } }
    } catch {
        return { props: { translations: require('../../locales/fi.json') } }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { lang: 'en' } },
            { params: { lang: 'fi' } },
            { params: { lang: 'sv' } },
        ],
        fallback: false
    }
}
