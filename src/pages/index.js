import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageCodeText from '@site/src/components/HomepageCodeText';
import CodeAnimation from '@site/src/animations/CodeAnimation';

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

                <div className="fade-stripe h-[2px]"></div>

                <section className="items-center py-20 lg:py-28 px-5 lg:px-2 w-full">
                    <div className="container">
                        <div className="row gap-10 items-center lg: justify-around xl:justify-between">
                            <HomepageCodeText />
                            <CodeAnimation />
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
