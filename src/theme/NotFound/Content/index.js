import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
export default function NotFoundContent({ className }) {
    return (
        <main className={clsx('container margin-vert--xl', className)}>
            <div className="row">
                <div className="col col--6 col--offset-3">
                    <Heading as="h1" className="hero__title">
                        <Translate
                            id="theme.NotFound.title"
                            description="The title of the 404 page"
                        >
                            Η σελίδα δεν βρέθηκε
                        </Translate>
                    </Heading>
                    <p>
                        <Translate
                            id="theme.NotFound.p1"
                            description="The first paragraph of the 404 page"
                        >
                            Μήπως προσπαθήσατε να ανοίξετε μια σελίδα που δεν
                            υπάρχει;
                        </Translate>
                    </p>
                    <p>
                        <Translate
                            id="theme.NotFound.p2"
                            description="The 2nd paragraph of the 404 page"
                        >
                            Εάν ο σύνδεσμος που ακολουθήσατε είναι από τον
                            ιστότοπο μας, παρακαλούμε επικοινωνήστε μαζί μας για
                            να διορθώσουμε το πρόβλημα.
                        </Translate>
                        <br />
                        <br />
                        Στείλτε μας ένα email στο{' '}
                        <a href="mailto:hey@javascript.gr">hey@javascript.gr</a>
                    </p>
                </div>
            </div>
        </main>
    );
}
