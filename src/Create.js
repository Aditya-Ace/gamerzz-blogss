import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Aditya');
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsLoading(true);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    })
      .then(() => {
        console.log('New Blog Added');
        setIsLoading(false);
        // history.go(-1);  ----- Go a step back
        history.push('/');
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className='create'>
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Blog body:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='Aditya'>Aditya</option>
          <option value='Akash'>Akash</option>
          <option value='Sneha'>Sneha</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding Blog ...</button>}
      </form>
    </div>
  );
}
