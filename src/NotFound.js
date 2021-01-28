import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='not-found'>
      <h2>Sorry!</h2>
      <p>
        We couldn't find the page you've been looking for... I will ask Aditya to design it for you.... Take Care until
        then!
      </p>
      <button>
        <Link to='/'>Shall We ?</Link>
      </button>
    </div>
  );
}
