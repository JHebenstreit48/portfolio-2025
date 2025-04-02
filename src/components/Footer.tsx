import '@/SCSS/HeaderNavAndFooter/Footer.scss';

export default function Footer() {
    return (

        <>

            <footer className="footer">

                <div className='createdBy'>

                    <p>Created by Justin Hebenstreit</p>

                </div>

                <div className="GitHub-link">

                    <a className='GitHub' href="https://github.com/JHebenstreit48" target="_blank"><i className="fa-brands fa-github"></i></a>
                </div>

                <div className="LinkedIn-link">
                    <a className='LinkedIn' href="https://www.linkedin.com/in/justin-hebenstreit-6ba22920/" target="_blank" ><i className="fa-brands fa-linkedin"></i></a>
                </div>

            </footer>
        </>

    );

};
