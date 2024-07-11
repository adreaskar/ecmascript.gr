import { Pin, Globe, Rss } from 'lucide-react';

const FeatureList = [
    {
        title: 'Ξεκινήστε απο εδώ',
        Icon: <Pin strokeWidth={2.25} />,
        description: (
            <>
                Η εισαγωγή στην γλώσσα με παραδείγματα και οδηγίες για την
                καλύτερη κατανόηση και εκμάθηση της.
            </>
        ),
        link: '/docs-language/intro',
    },
    {
        title: 'Επόμενο βήμα, ο Browser',
        Icon: <Globe strokeWidth={2.25} />,
        description: (
            <>
                Μάθετε πως να χρησιμοποιείτε τις λειτουργικότητες του Βrowser
                στην JavaScript, όπως το DOM, τα events και τα cookies.
            </>
        ),
        link: '/docs-browser/intro',
    },
    {
        title: 'Περισσότερα κεφάλαια σύντομα',
        Icon: <Rss strokeWidth={2.25} />,
        description: (
            <>
                Περισσότερα κεφάλαια και θέματα έρχονται σύντομα. Μείνετε
                συντονισμένοι!
            </>
        ),
        link: '#',
    },
];

function Feature({ Icon, title, description, link }) {
    return (
        <a
            href={link}
            className="w-full flex-1 p-5 bg-[var(--ifm-color-grey)] rounded-lg text-[var(--ifm-hero-text-color)] hover:no-underline"
        >
            <div className="text-left text-[var(--ifm-color-primary-light)] mb-2">
                {Icon}
            </div>
            <div className="text-left">
                <h3>{title}</h3>
                <p className="mb-0">{description}</p>
            </div>
        </a>
    );
}

export default function HomepageFeatures() {
    return (
        <section className="items-center py-20 px-0 w-full">
            <div className="container">
                <div className="row gap-10">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
