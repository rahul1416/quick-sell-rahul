import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Board from './components/Board';

import './App.css';

function App() {
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');
  const [sortedTickets, setSortedTickets] = useState([]);
  const [setUsers] = useState([]);

  // Save view state to localStorage
  useEffect(() => {
    const savedGroupBy = localStorage.getItem('groupBy');
    const savedSortBy = localStorage.getItem('sortBy');
    if (savedGroupBy) setGroupBy(savedGroupBy);
    if (savedSortBy) setSortBy(savedSortBy);
  }, []);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment', {
          headers: {
            'Authorization': 'Bearer YOUR_API_KEY', // Replace with your actual API key
          }
        });
        const data = await response.json();

        let sorted = data.tickets;

        // Sort tickets based on the selected sort option
        if (sortBy === 'priority') {
          sorted.sort((a, b) => b.priority - a.priority);
        } else if (sortBy === 'title') {
          sorted.sort((a, b) => a.title.localeCompare(b.title));
        }

        setSortedTickets(sorted);
        setUsers(data.users); // Store users data if needed
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Save changes to localStorage
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);

    // Re-sort tickets when groupBy or sortBy changes
    let sorted = [...sortedTickets];

    if (sortBy === 'priority') {
      sorted.sort((a, b) => b.priority - a.priority);
    } else if (sortBy === 'title') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }

    setSortedTickets(sorted);
  }, [groupBy, sortBy]);

  return (
    <div className="App">
      <Header groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />
      <Board tickets={sortedTickets} groupBy={groupBy} />
    </div>
  );
}

export default App;
