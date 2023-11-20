// Mark the component as a Client Component
'use client';

import { useState } from 'react';

// Home export
export default function MainPage() {
  const [key, setKey] = useState('');
  const [data, setData] = useState([]);

  const fetchData = async () => {
    console.log('fetching data for key: ' + key );
    const query = `
      query GetDataByKey($key: Int!) {
        getDataByKey(key: $key) {
          columnNumber
          columnName
          data
        }
      }
    `;

    const response = await fetch('/api/graphql', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ query, variables: { key: parseInt(key) }}),
    });

    const result = await response.json();
    console.log(result);
    setData(result.data.getDataByKey);
  };

  return (
    <div>
      <input
        type="number"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Enter Key Number"
      />
      <button onClick={fetchData}>Get Data</button>
      <table>
        {/* Render table rows based on data */}
      </table>
    </div>
  );
}
