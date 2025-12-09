import React from "react";
import { useState } from "react";
import "./BookCards.css";
import Mlbook from "../../assets/images/Mlbook.jpg";
import CreateBookModal from "./BookPopup";
export default function BooksCards() {
    const [showModal, setShowModal] = useState(false);

  const books = [
    {
      id: 1,
      title: "Anxiety Alchemy",
      author: "Alex Parker",
      image: Mlbook
    },
    {
      id: 2,
      title: "From Chaos to Clarity",
      author: "Alex Doe",
      image: Mlbook
    },
    {
      id: 3,
      title: "The Introvert’s Guide to Networking",
      author: "Alex Doe",
      image: Mlbook
    },
    {
      id: 4,
      title: "Plant-Based on a Budget",
      author: "Alex Doe",
      image: Mlbook
    },
     {
      id: 1,
      title: "Anxiety Alchemy",
      author: "Alex Parker",
      image: Mlbook
    },
    {
      id: 2,
      title: "From Chaos to Clarity",
      author: "Alex Doe",
      image: Mlbook
    },
    {
      id: 3,
      title: "The Introvert’s Guide to Networking",
      author: "Alex Doe",
      image: Mlbook
    },
    {
      id: 4,
      title: "Plant-Based on a Budget",
      author: "Alex Doe",
      image: Mlbook
    },
  ];

  return (
    <div className="books-section">

      {/* HEADER */}
      <div className="books-header">
        <h2>All eBooks</h2>
        <button className="create-btn" onClick={() => setShowModal(true)}>
  <i className="fa-solid fa-plus"></i> Create
</button>

      </div>

      {/* GRID */}
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            
            {/* Hover Icons */}
            <div className="card-icons">
              <i className="fa-solid fa-pen-to-square edit-icon"></i>
              <i className="fa-solid fa-trash delete-icon"></i>
            </div>

            {/* Book Image */}
            <img src={book.image} alt={book.title} className="book-image" />

            {/* Title and author */}
            <div className="book-info">
              <h4>{book.title}</h4>
              <p>{book.author}</p>
            </div>

          </div>
        ))}
      </div>
      <CreateBookModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
