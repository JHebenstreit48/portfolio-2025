import { IPortfolioCard } from "@/components/Portfolio/PortfolioData";
import '@/SCSS/Portfolio/PortfolioCards.scss';

export default function Cards(project: IPortfolioCard) {
    return (
        <div className="card text-bg-dark">
            <h5 className="cardTitle">{project.name}</h5>

            <div className="imageWrapper">
                <img className="cardImg" src={project.image} alt={project.description} />
            </div>

            <div className="liveAndDeploy">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubIcon fa-brands fa-github icon"
                    href={project.gitHubRepo}
                ></a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="deploymentIcon fa-solid fa-globe icon"
                    href={project.deployment}
                ></a>
            </div>
        </div>

    );
}
