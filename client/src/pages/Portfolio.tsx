import Cards from "@/components/Portfolio/PortfolioCards";
import Data from "@/components/Portfolio/PortfolioData";
// import WorkInProgress from "@/components/Portfolio/WorkInProgressAlert";

export default function Portfolio() {
    return (
        <>

            <h1 className='pageHeader'>Portfolio</h1>

            <div>
                {/* <WorkInProgress /> */}
            </div>


            <div className="cardContainer">
                <div className="row">

                    {Data.map((project, index) => (
                        <Cards
                            key={project.name + index}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            gitHubRepo={project.gitHubRepo}
                            deployment={project.deployment}

                        />
                    ))}

                </div>
            </div>

        </>
    )
}
