// Mark the component as a Client Component
'use client';

import { useState } from 'react';
import { Container } from '@chakra-ui/react';
import InputBox from '@/components/inputbox';
import SubmitButton from '@/components/submitbutton';
import DataTable from '@/components/datatable';


// Home export
export default function MainPage() {
  const [key, setKey] = useState('');
  const [data, setData] = useState([]);

  const handleKeyChange = (value) => {
    setKey(value);
  }

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
    <Container bgColor={'White'} >
      <h1>777 Lookup</h1>
      <Container maxW='xl' color='gray.90' centerContent>
        <InputBox value={key} onChange={handleKeyChange} />
        <SubmitButton onClick={fetchData} />
        <DataTable data={data} />
      </Container>
      This is a simple POC lookup tool for the book of Quabbalistic correspondences, Liber 777 by Aleister Crowley. No warranty or terms are expressed or implied.  Do What Thou Wilt Shall be the Whole of the Law.
    </Container>
  );
}
