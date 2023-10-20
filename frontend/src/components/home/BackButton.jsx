import { Link } from 'react-router-dom';


const BackButton = ({ destination = '/' }) => {
  return (
    <div >
      <Link to={destination}>Back Button</Link>
    </div>
  );
};

export default BackButton;