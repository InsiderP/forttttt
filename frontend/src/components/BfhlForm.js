import React, { useState } from 'react';
import axios from 'axios';

function BfhlForm({ setResponse }) {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedInput = JSON.parse(input);
      const res = await axios.post('http://localhost:8006/bfhl', parsedInput);
      console.log("hhheeggg")
      setResponse(res.data);
    } catch (error) {
      alert('Invalid JSON input or server errors');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter JSON input'
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BfhlForm;
