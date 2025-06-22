import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormControl, InputGroup, ListGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const allItems = JSON.parse(localStorage.getItem('allItems')) || [];

    if (searchTerm.trim() === '') {
      setSuggestions([]);
    } else {
      const query = searchTerm.toLowerCase();

      const filtered = allItems.filter(item => {
        const fieldsToSearch = [
          item.name,
          item.title,
          item.category,
          item.occasion,
          item.city,
          item.sentiment
        ];
        return fieldsToSearch.some(field =>
          field?.toLowerCase().includes(query)
        );
      });

      // Remove duplicates based on name/title (case-insensitive)
      const uniqueItems = Array.from(
        new Map(
          filtered.map(item => [
            (item.name || item.title || '').toLowerCase(),
            item
          ])
        ).values()
      );

      setSuggestions(uniqueItems);
    }
  }, [searchTerm]);

  const handleSelect = (item) => {
    navigate(`/product/${item.id}`);
    setSearchTerm('');
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (trimmed) {
      navigate(`/search?query=${encodeURIComponent(trimmed)}`);
      setSuggestions([]);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroup.Text><FaSearch /></InputGroup.Text>
          <FormControl
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </Form>

      {suggestions.length > 0 && (
        <ListGroup style={{
          position: 'absolute',
          zIndex: 1000,
          width: '100%',
          maxHeight: '300px',
          overflowY: 'auto',
          backgroundColor: 'white'
        }}>
          {suggestions.map(item => (
            <ListGroup.Item
              key={item.id}
              action
              onClick={() => handleSelect(item)}
            >
              {item.name || item.title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
}
