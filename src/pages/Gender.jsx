import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Gender() {
  return (
    <>
      <SEO
        title="FEEM | GENDER"
        description="Learn about Gender-Based Violence (GBV), statistics, manifestations, and FEEM's community advocacy and protective interventions in Ghana."
        canonicalPath="/pages/gender.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Research &amp; Advocacy</span>
            <h1 className="mb-3">Gender Based Violence</h1>
            <p>
              Understanding the roots, manifestations, and community actions to eliminate violence against women and girls.
            </p>
          </div>
        </section>

        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <img
                  src="/assets/images/gender.webp"
                  alt="Gender-based violence awareness"
                  className="img-fluid rounded border mb-4 w-100"
                  style={{ maxHeight: '420px', objectFit: 'cover' }}
                  loading="lazy"
                />

                <span className="section-badge">Understanding GBV</span>
                <h2 className="mb-4">Definition, Global Reality &amp; Local Impact</h2>

                <div className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  <p>
                    Gender-based violence (GBV) refers to harmful acts directed at individuals based on
                    their gender. It encompasses physical, sexual, emotional, and psychological abuse
                    and is rooted in gender inequality, power imbalances, and harmful societal norms.
                  </p>

                  <p>
                    According to latest estimates from the World Health Organization (WHO) and the
                    United Nations Entity for Gender Equality and the Empowerment of Women (UN Women),
                    almost one in three women globally has experienced either physical and/or sexual
                    intimate partner or non-partner sexual violence in their lifetime (United Nations
                    Trust Fund to End Violence Against Women, 2022).
                  </p>

                  <div className="p-4 my-4 rounded feem-surface-box border-start border-4 border-accent">
                    <h3 className="h5 text-dark mb-2">The Statistics in Ghana</h3>
                    <p className="m-0 text-muted">
                      Statistics indicate that 27 percent of Ghanaian women both young and old have
                      been sexually assaulted in their lifetime, and for 20 percent of women, their
                      first sexual experience occurred against their will (Cannon LM et al., 2020).
                    </p>
                  </div>

                  <h3 className="h4 text-dark mt-4 mb-3">Manifestations of Gender-Based Violence</h3>
                  <p>
                    Gender-based violence affects women and girls disproportionately, though men and
                    boys can also be victims. Gender-based violence includes but is not limited to:
                  </p>

                  <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item px-0 py-2 bg-transparent">
                      <strong>Domestic Violence:</strong> Abuse within a household or intimate relationship,
                      ranging from physical assault to emotional coercion.
                    </li>
                    <li className="list-group-item px-0 py-2 bg-transparent">
                      <strong>Sexual Violence:</strong> Assault, harassment, or exploitation, including rape,
                      attempted rape, and sex trafficking.
                    </li>
                    <li className="list-group-item px-0 py-2 bg-transparent">
                      <strong>Economic Abuse:</strong> Denying someone financial independence, restricting
                      access to livelihood resources, or controlling employment opportunities.
                    </li>
                    <li className="list-group-item px-0 py-2 bg-transparent">
                      <strong>Psychological Abuse:</strong> Gaslighting, verbal manipulation, intimidation,
                      threats, or sustained humiliation.
                    </li>
                    <li className="list-group-item px-0 py-2 bg-transparent">
                      <strong>Harmful Cultural Practices:</strong> Child marriage, female genital mutilation
                      (FGM), and honour-based coercive punishments.
                    </li>
                  </ul>

                  <h3 className="h4 text-dark mt-4 mb-3">FEEM’s Response on the Ground</h3>
                  <p>
                    Through community dialogues with local chiefs, religious elders, mothers, and school
                    counsellors, FEEM deconstructs harmful traditions, sets up peer reporting mechanisms,
                    and supports survivors with psycho-social assistance and educational sponsorships.
                  </p>
                </div>

                {/* Download Resources Section */}
                <div className="mt-5 p-4 rounded feem-surface-box">
                  <h3 className="h5 mb-3 fw-bold">Download Educational Resources</h3>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="/assets/images/gender.webp" download className="btn btn-feem-outline btn-sm">
                      <i className="bi bi-file-earmark-pdf me-1"></i> GBV Overview Brief (PDF)
                    </a>
                    <Link to="/contact" className="btn btn-feem-primary btn-sm">
                      Request Training Toolkit
                    </Link>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top d-flex justify-content-between">
                  <Link to="/resources" className="btn btn-feem-outline">
                    <i className="bi bi-arrow-left me-1"></i> Back to Resources
                  </Link>
                  <Link to="/donate" className="btn btn-feem-accent">
                    Support Anti-Violence Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

