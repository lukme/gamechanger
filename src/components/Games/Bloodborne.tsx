import React from 'react';
import { Card } from '../Card/Card';
import { ArticleHeader } from '../ArticleHeader/ArticleHeader';
import '../Article/Article.style.scss';
import { ArticleImage } from '../Image/Image';

export const Bloodborne = () => {
    const gameTitle = 'Bloodborne'

    return (
        <>
            <ArticleHeader gameTitle={gameTitle} />
            <Card postDate='10 maj 2020' />
            <div className="post__content">
                <h2>
                    Assertively orchestrate timely technology and
                </h2>
                <p>
                Dynamically mesh covalent bandwidth whereas out-of-the-box catalysts for change. Globally negotiate enterprise relationships rather than ethical web-readiness. Assertively procrastinate cost effective systems after principle-centered supply chains. Distinctively e-enable pandemic manufactured products with integrated results. Seamlessly aggregate cutting-edge growth strategies after high-payoff collaboration.
                </p>
                <h2>
                    Dynamically negotiate process-centric niches without multimedia
                </h2>
                <p>
                    Phosfluorescently innovate economically sound paradigms without vertical growth strategies. Dynamically strategize interoperable resources before magnetic benefits. Holisticly leverage existing integrated niches with compelling e-commerce. Interactively parallel task seamless channels without cross-media bandwidth. Assertively re-engineer open-source e-markets rather than scalable results. Rapidiously administrate cross functional opportunities for ubiquitous e-services. Interactively transition market positioning supply chains vis-a-vis premier leadership. Continually actualize revolutionary synergy via go forward best practices. Assertively embrace extensive ROI after just in time scenarios.
                </p>
                <ArticleImage
                    imagePath='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    tagline='- To jest tagline z propsów'
                    secondTagline='- To jest drugi wiersz taglina'
                />
                <p>
                Quickly embrace emerging deliverables vis-a-vis ubiquitous innovation. Collaboratively revolutionize backend content vis-a-vis web-enabled platforms. Compellingly harness market positioning initiatives and multidisciplinary relationships. Seamlessly impact premium models after principle-centered innovation. Quickly empower parallel e-markets whereas sustainable innovation. Completely foster resource sucking sources for B2C deliverables. Synergistically productivate seamless interfaces via customer directed web services. Rapidiously strategize flexible testing procedures before interdependent niche markets. Efficiently syndicate compelling sources and user-centric core competencies. Efficiently strategize client-focused sources for integrated results. Dynamically administrate client-focused.
                </p>
            </div>
        </>
    )
}