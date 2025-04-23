import ProfilePicture from '@/assets/images/ProfilePicture.jpg';
import '@/SCSS/AboutMe/AboutMe.scss';
import Bio from '@/components/About/Bio';

export default function About() {
  return (

    <>

      <div>

        <div className="profilePictureContainer">
          <img className='profilePicture' src={ProfilePicture} alt='Profile Picture' />
        </div>

        <Bio />

      </div>

    </>

  );
}
