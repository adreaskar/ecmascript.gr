import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

export default function HomepageHeader() {
    return (
        <header className="hero text-center relative overflow-hidden px-3 py-20 md:p-8 md:py-20 lg:py-36">
            <div className="container flex gap-20 items-center headingContainer">
                <HeroImage />

                <div className="w-full">
                    <HeroText />
                    <HeroButtons />
                </div>
            </div>
        </header>
    );
}

function HeroImage() {
    return (
        <div className=" hidden lg:flex items-center justify-center ">
            <ThemedImage
                alt="Greek developer image"
                sources={{
                    light: useBaseUrl('/img/ecma-dev.png'),
                    dark: useBaseUrl('/img/ecma-dev.png'),
                }}
                className="w-[400px] rounded-xl"
            />
        </div>
    );
}

function HeroText() {
    return (
        <div className="text-left">
            <p className="hero__subtitle text-4xl xl:text-6xl">
                {/* {siteConfig.tagline} */}
                Οδηγός{' '}
                <span className="text-[var(--ifm-color-primary-light)] font-bold lg:font-black">
                    JavaScript
                </span>{' '}
                στα Ελληνικά.
            </p>
            <p className="mt-5 text-xl lg:text-2xl font-semibold">
                Από τις βασικές έννοιες έως και προχωρημένα θέματα, με
                λεπτομερείς εξηγήσεις και παραδείγματα.
            </p>
            <span className="text-xl lg:text-2xl">
                Χρησιμοποιούμε JavaScript για:{' '}
            </span>
            <br className="md:hidden" />
            <span className="w-full mt-7 text-[var(--ifm-color-primary-light)] font-semibold text-xl lg:text-2xl ">
                <Typewriter
                    words={[
                        'κατασκευή ιστοσελίδων',
                        'ανάπτυξη web εφαρμογών ',
                        'δημιουργία διαδραστικών διεπαφών',
                        'τη διαχείριση του DOM',
                        'επικύρωση φορμών',
                        'χειρισμό διάφορων events',
                        'ασύγχρονο προγραμματισμό',
                        'οπτικοποίηση δεδομένων',
                        'δημιουργία RESTful API',
                        'ανάπτυξη κινητών εφαρμογών',
                        'επικοινωνία σε πραγματικό χρόνο',
                        'Front-End',
                        'Back-End',
                        'Full-Stack!',
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={40}
                    deleteSpeed={30}
                    delaySpeed={1000}
                />
            </span>
        </div>
    );
}

function HeroButtons() {
    const sendToURL = (url) => {
        window.open(url, '_blank');
    };

    const [stars, setStars] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/repos/adreaskar/javascript.gr')
            .then((res) => res.json())
            .then((json) => {
                setStars(json.stargazers_count);
            });
    }, []);

    return (
        <div
            onClick={() =>
                sendToURL('https://github.com/adreaskar/javascript.gr')
            }
            className="hidden lg:flex items-center px-3 py-2 rounded-md bg-[var(--ifm-color-primary-light)] mt-7 w-max hover:cursor-pointer"
        >
            <Star
                size={17}
                className="mr-1 text-[var(--ifm-hero-background-color)] fill-[var(--ifm-hero-background-color)]"
            />
            <span className="text-[var(--ifm-hero-background-color)] text-lg xl:text-xl font-semibold">
                {stars} GitHub
            </span>
            <ArrowUpRight
                size={20}
                strokeWidth={2.5}
                className="ml-1 text-[var(--ifm-hero-background-color)]"
            />
        </div>
    );
}
