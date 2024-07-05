import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

import Heading from '@theme/Heading';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className="hero text-center relative overflow-hidden p-8 lg:py-16">
            <div className="container">
                <Heading
                    as="h1"
                    className="hero__title text-4xl font-semibold lg:text-6xl"
                >
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle mt-2 text-base lg:text-lg">
                    {siteConfig.tagline}
                </p>
                <div className="flex items-center justify-center mt-10">
                    <ThemedImage
                        alt="Greek developer image"
                        sources={{
                            light: useBaseUrl('/img/ecma-logo.png'),
                            dark: useBaseUrl('/img/ecma-logo-dark.png'),
                        }}
                        className="w-[200px]"
                    />
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout
            title="Home"
            description="The best Greek JavaScript guide around!"
        >
            <HomepageHeader />

            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
