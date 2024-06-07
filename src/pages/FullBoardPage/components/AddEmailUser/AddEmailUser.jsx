import { useState } from 'react';

const AddEmailUser = () => {
  const [email, setEmail] = useState('');

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddEmailUser;
