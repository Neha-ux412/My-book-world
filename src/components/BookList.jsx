import React, { useState } from 'react';
import BookCard from './BookCard';

const BookList = () => {
  const [books] = useState([
    {
      id: 1,
      title: "Haunting Adeline",
      author: "H. D. Carlton",
      genre: "Dark Romance, Triller, Enemies to lovers, Horror, Fantasy",
      description: "Haunting Adeline by H.D. Carlton is a dark romance about Adeline, who is stalked by an obsessive man after moving into her grandmother's mansion. The story explores themes of obsession, fear, and intense, morally complex love.Adeline has a stalker. Yet, she quickly discovers she's not the first person in her family to fall victim to a shadow in pursuit. Left behind are her great-grandmother's haunting journals detailing the story of her own phantom, and subsequently, her brutal murder.",
      coverImage: "/book1.jpg",
      volumes: [
        { title: "Haunting Adeline", filename: "haunting-adeline.pdf" },
        { title: "Hunting Adeline", filename: "hunting-adeline.pdf" }
      ]
    },
    {
      id: 2,
      title: "Twisted Series",
      author: "Ana Huang",
      genre: "Contemporary Romance, New Adult, Dark Romance",
      description: "The Twisted series by Ana Huang is a steamy, emotional romance collection featuring four interconnected books with intense love stories, morally grey heroes, and strong heroines. Each book explores passion, betrayal, and redemption in a gripping, addictive style.The Twisted book series is a tetralogy with the following titles: Twisted Love, Twisted Games, Twisted Hate, and Twisted Lies. It was written by New York Times Best-Selling romance author Ana Huang, who has written several thrilling romances, including the King of Sin and If Love series.",
      coverImage: "/book2.jpg",
      volumes: [
        { title: "Twisted Love", filename: "twisted-love.pdf" },
        { title: "Twisted Games", filename: "twisted-games.pdf" },
        { title: "Twisted Hate", filename: "twisted-hate.pdf" },
        { title: "Twisted Lies", filename: "twisted-lies.pdf" }
      ]
    },
    {
      id: 3,
      title: "Ice Breaker",
      author: "Hannah Grace",
      genre: "Sports Romance, New Adult, Contemporary Romance",
      description: "Icebreaker by Hannah Grace is a college romance that follows Anastasia, a figure skater, and Nathan, a hockey player, who are forced to work together. Their chemistry grows as they navigate rivalry, romance, and personal struggles.Anastasia Allen has worked her entire life for a shot at Team USA. It looks like everything is going according to plan when she gets a full scholarship to the University of California, Maple Hills and lands a place on their competitive figure skating team.",
      coverImage: "/book3.jpg",
      volumes: [
        { title: "Ice Breaker", filename: "ice-breaker.pdf" }
      ]
    },
    {
      id: 4,
      title: "It Ends With Us",
      author: "Colleen Hoover",
      genre: "Contemporary Romance, Emotional Drama, Domestic Fiction, Abuse",
      description: "It Ends with Us is a romance novel by Colleen Hoover, published by Atria Books on August 2, 2016. The story follows florist Lily Bloom, whose abusive relationship with neurosurgeon Ryle Kincaid is compounded when her high school boyfriend Atlas Corrigan re-enters her life. It explores themes of domestic violence and emotional abuse. Based on the relationship between her mother and father, Hoover described it as the hardest book I've ever written",
      coverImage: "/book4.jpg",
      volumes: [
        { title: "It Ends with Us", filename: "it-ends-with-us.pdf" }
      ]
    },
    {
      id: 5,
      title: "King of Wrath",
      author: "Ana Huang",
      genre: "Billionaire Romance, Enemies to Lovers, Contemporary Romance",
      description: "King of Wrath by Ana Huang is a passionate enemies-to-lovers romance about Billionaire CEO Dante Russo is cold, controlling, and determined never to marry—until blackmail forces him into an engagement with Vivian Lau, a sophisticated jewelry heiress and the daughter of his enemy. Though Dante initially plans to destroy the engagement and the blackmail evidence, he unexpectedly finds himself unable to let Vivian go. Vivian,raised to be the perfect daughter, agrees to the marriage for her family's social advancement, despite Dante's arrogance. What begins as a strategic arrangement soon becomes complicated by unexpected passion—and the dangerous risk of falling in love.",
      coverImage: "/book5.png",
      volumes: [
        { title: "King of Wrath", filename: "king-of-wrath.pdf" }
      ]
    },
    {
      id: 6,
      title: "Shatter Me Series",
      author: "Tahereh Mafi",
      genre: "Dystopian, Young Adult, Fantasy Romance",
      description: "The Shatter Me series by Tahereh Mafi is a six-book dystopian saga that follows Juliette, a teenage girl whose touch causes excruciating pain. Set in a broken world ruled by a corrupt organisation called the Reestablishment, the story explores Juliette's journey of survival, rebellion, and self-discovery alongside her allies. The fast-paced narrative delves into themes of power, resistance, and emotional growth. After reading all six novels, I've shared individual critiques and reflections on each book.",
      coverImage: "/book6.jpg",
      volumes: [
        { title: "Shatter Me", filename: "shatter-me.pdf" }
      ]
    },
    {
      id: 7,
      title: "Legacy of Gods",
      author: "Rina Kent",
      genre: "Dark Fantasy, Mythology-Inspired Fantasy, Romance",
      description: "The Legacy of Gods series by Rina Kent is a dark, intense romance spin-off of the Royal Elite series. It follows a new generation of characters entangled in love, power, and secrets. With gripping tension and emotional depth, it explores the struggles of legacy and desire.It is a dark romance series set in an elite world of power, secrets, and passion. It follows the next generation from the Royal Elite universe as they navigate intense love, emotional trauma, and dangerous legacies.",
      coverImage: "/book7.jpg",
      volumes: [
        { title: "God of Malice", filename: "god-of-malice.pdf" },
        { title: "God of Pain", filename: "god-of-pain.pdf" },
        { title: "God of Wrath", filename: "god-of-wrath.pdf" },
        { title: "God of Ruin", filename: "god-of-ruin.pdf" },
        { title: "God of Fury", filename: "god-of-fury.pdf" },
        { title: "God of War", filename: "god-of-war.pdf" }
      ]
    },
    {
      id: 8,
      title: "Dreamland Billionaires",
      author: "Lauren Asher",
      genre: "Billionaire Romance, Contemporary Romance, Sibling Series",
      description: "The Dreamland Billionaires series by Lauren Asher follows the Kane brothers as they tackle love and inheritance. Rowan clashes with Zahra in The Fine Print, Declan fakes a marriage in Terms and Conditions, and Cal faces his past love in Final Offer.It is a contemporary romance series following the powerful Kane brothers as they face challenges in love, life, and legacy. Set around a Disney-like empire, each book explores a unique romance filled with witty banter, emotional depth, and billionaire drama.",
      coverImage: "/book8.jpg",
      volumes: [
        { title: "The Fine Print", filename: "the-fine-print.pdf" },
        { title: "Terms and Conditions", filename: "terms-and-conditions.pdf" },
        { title: "Final Offer", filename: "final-offer.pdf" }
      ]
    }
  ]);

  return (
    <div className="container mx-auto px-8">
      <div className="flex flex-col gap-4">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;