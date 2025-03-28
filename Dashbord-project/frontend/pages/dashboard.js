import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@/components/Table';

export default function Dashboard() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.get('/api/data/google-sheets', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Table data={data} />;
}