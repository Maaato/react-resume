import { Data } from '../Schemas/Data';
import { BoxIcon } from './BoxIcon';
import { Options } from "./Options";


const { socialMedia } = Data;
const { social } = socialMedia;

export const Profile = ({
  name,
  ocupation,
  location,
  email,
  telephone,
  image,
}) => {
  return (
    <section className="home" id="home">
      <Options />
      <div className="home__container section bd-grid">
        <div className="home__data bd-grid">
          <img src={image} alt="profile_image" className="home__img" />
          <h1 className="home__title">{name}</h1>
          <h3 className="home__profession">{ocupation}</h3>
          <div className="home__address bd-grid">
            <span className="home__information">
              <i className="bx bx-map home__icon" /> {location}
            </span>
          </div>
        </div>
        <div className='home__contact bd-grid'>
          <BoxIcon className="home__icon bx-envelope" label={`Enviar un correo electrónico a ${name}`} url={`mailto:${email}`} />
          <BoxIcon className="home__icon bx-phone" label={`Llamar por teléfono a ${name}`} url={`tel:${telephone}`} />
          {social.map((social) => <BoxIcon key={social.name} {...social} />)}
        </div>
      </div>
    </section>
  );
};
