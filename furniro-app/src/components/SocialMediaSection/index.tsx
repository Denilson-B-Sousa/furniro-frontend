import facebook from '@assets/footer/facebook.svg';
import instagram from '@assets/footer/instagram.svg';
import linkedin from '@assets/footer/linkedin.svg';
import twitter from '@assets/footer/twitter.svg';

export function SocialMediaSection() {
  return (
    <ul className='flex justify-center laptop:justify-start laptop:px-6'>
      <li>
        <a href='#'>
          <img
            src={facebook}
            alt='Fundo branco com a letra F representando a logo da rede social Facebook'
          />
        </a>
      </li>

      <li>
        <a href='#'>
          <img
            src={instagram}
            alt='Fundo branco com uma camera representando a logo da rede social Instagram'
          />
        </a>
      </li>

      <li>
        <a href='#'>
          <img src={twitter} alt='fundo' />
        </a>
      </li>

      <li>
        <a href='#'>
          <img src={linkedin} alt='' />
        </a>
      </li>
    </ul>
  );
}
