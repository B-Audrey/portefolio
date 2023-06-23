import './Autotext.scss';
import { TypeAnimation } from 'react-type-animation';
 
const Autotext = () => {
  return (
    <div className='autotext'>
        <TypeAnimation
        sequence={[
            'Bonjour, je suis Audrey. Bienvenue sur ma page web. Que souhaitez vous faire ?',
        ]}
        wrapper="span"
        cursor={true}
        style={{ display: 'inline-block' }}
        />
    </div>
  );
};

export default Autotext