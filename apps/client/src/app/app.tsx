
import { useEffect, useState } from 'react';
import { Book } from '@prisma/client';

export function App() {

  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/api')
      .then( result => result.json())
      .then( data => {
        setBooks(data)
      })
  }, [])

  return (
    <>
      {
        books.map( book => (
          <div style={{ border: '1px solid black', padding: '2rem'}}>
            <p>{book.id}</p>
            <p>{book.title}</p>
            <p>{book.authorName}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;