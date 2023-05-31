import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

function List() {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRepositories = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('https://api.github.com/users/devpass-tech/repos');
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }

      setIsLoading(false);
    };

    fetchRepositories();
  }, []);

  return (
    <div>
      {isLoading}
      <ListGroup>
        {repositories.map((repo) => (
          <ListGroup.Item key={repo.id}>{repo.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default List;
