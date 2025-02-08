import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHeader from '@site/src/components/HomepageHeader';

export default function Home() {
    return (
        <Layout
            title="Home"
            description="Οδηγός για την JavaScript στα Ελληνικά"
        >
            <HomepageHeader />

            <div className="fade-stripe h-[7px]"></div>

            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
