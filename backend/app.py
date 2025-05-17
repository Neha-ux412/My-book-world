from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='../build')
CORS(app)

# API Routes
@app.route('/api/books', methods=['GET'])
def get_books():
    books = [
        {
            "id": 1,
            "title": "Haunting Adeline",
            "author": "H. D. Carlton",
            "genre": "Dark Romance, Triller, Enemies to lovers, Horror, Fantasy",
            "description": (
                "Haunting Adeline by H.D. Carlton is a dark romance about Adeline, "
                "who is stalked by an obsessive man after moving into her grandmother's mansion. "
                "The story explores themes of obsession, fear, and intense, morally complex love. "
                "Adeline has a stalker. Yet, she quickly discovers she's not the first person in her family "
                "to fall victim to a shadow in pursuit. Left behind are her great-grandmother's haunting journals "
                "detailing the story of her own phantom, and subsequently, her brutal murder."
            ),
            "coverImage": "/book1.jpg",
            "volumes": [
                {"title": "Haunting Adeline", "filename": "haunting-adeline.pdf"},
                {"title": "Hunting Adeline", "filename": "hunting-adeline.pdf"}
            ]
        },
        {
            "id": 2,
            "title": "Twisted Series",
            "author": "Ana Huang",
            "genre": "Contemporary Romance, New Adult, Dark Romance",
            "description": (
                "The Twisted series by Ana Huang is a steamy, emotional romance collection featuring four interconnected books "
                "with intense love stories, morally grey heroes, and strong heroines. Each book explores passion, betrayal, "
                "and redemption in a gripping, addictive style. The Twisted book series is a tetralogy with the following titles: "
                "Twisted Love, Twisted Games, Twisted Hate, and Twisted Lies."
            ),
            "coverImage": "/book2.jpg",
            "volumes": [
                {"title": "Twisted Love", "filename": "twisted-love.pdf"},
                {"title": "Twisted Games", "filename": "twisted-games.pdf"},
                {"title": "Twisted Hate", "filename": "twisted-hate.pdf"},
                {"title": "Twisted Lies", "filename": "twisted-lies.pdf"}
            ]
        },
        {
            "id": 3,
            "title": "Ice Breaker",
            "author": "Hannah Grace",
            "genre": "Sports Romance, New Adult, Contemporary Romance",
            "description": (
                "Icebreaker by Hannah Grace is a college romance that follows Anastasia, a figure skater, "
                "and Nathan, a hockey player, who are forced to work together. Their chemistry grows as they navigate rivalry, "
                "romance, and personal struggles."
            ),
            "coverImage": "/book3.jpg",
            "volumes": [
                {"title": "Ice Breaker", "filename": "ice-breaker.pdf"}
            ]
        },
        {
            "id": 4,
            "title": "It Ends With Us",
            "author": "Colleen Hoover",
            "genre": "Contemporary Romance, Emotional Drama, Domestic Fiction, Abuse",
            "description": (
                "It Ends with Us is a romance novel by Colleen Hoover. The story follows florist Lily Bloom, "
                "whose abusive relationship with neurosurgeon Ryle Kincaid is compounded when her high school boyfriend Atlas Corrigan re-enters her life. "
                "It explores themes of domestic violence and emotional abuse."
            ),
            "coverImage": "/book4.jpg",
            "volumes": [
                {"title": "It Ends with Us", "filename": "it-ends-with-us.pdf"}
            ]
        },
        {
            "id": 5,
            "title": "King of Wrath",
            "author": "Ana Huang",
            "genre": "Billionaire Romance, Enemies to Lovers, Contemporary Romance",
            "description": (
                "King of Wrath by Ana Huang is a passionate enemies-to-lovers romance about Billionaire CEO Dante Russo, "
                "who is blackmailed into an engagement with Vivian Lau, a sophisticated jewelry heiress. "
                "What begins as a strategic arrangement becomes complicated by unexpected passion."
            ),
            "coverImage": "/book5.png",
            "volumes": [
                {"title": "King of Wrath", "filename": "king-of-wrath.pdf"}
            ]
        },
        {
            "id": 6,
            "title": "Shatter Me Series",
            "author": "Tahereh Mafi",
            "genre": "Dystopian, Young Adult, Fantasy Romance",
            "description": (
                "The Shatter Me series by Tahereh Mafi is a six-book dystopian saga that follows Juliette, "
                "a teenage girl whose touch causes excruciating pain. Set in a broken world ruled by a corrupt organisation, "
                "the story explores Juliette's journey of survival, rebellion, and self-discovery."
            ),
            "coverImage": "/book6.jpg",
            "volumes": [
                {"title": "Shatter Me", "filename": "shatter-me.pdf"}
            ]
        },
        {
            "id": 7,
            "title": "Legacy of Gods",
            "author": "Rina Kent",
            "genre": "Dark Fantasy, Mythology-Inspired Fantasy, Romance",
            "description": (
                "The Legacy of Gods series by Rina Kent is a dark, intense romance spin-off of the Royal Elite series. "
                "It follows the next generation of characters as they navigate intense love, emotional trauma, and dangerous legacies."
            ),
            "coverImage": "/book7.jpg",
            "volumes": [
                {"title": "God of Malice", "filename": "god-of-malice.pdf"},
                {"title": "God of Pain", "filename": "god-of-pain.pdf"},
                {"title": "God of Wrath", "filename": "god-of-wrath.pdf"},
                {"title": "God of Ruin", "filename": "god-of-ruin.pdf"},
                {"title": "God of Fury", "filename": "god-of-fury.pdf"},
                {"title": "God of War", "filename": "god-of-war.pdf"}
            ]
        },
        {
            "id": 8,
            "title": "Dreamland Billionaires",
            "author": "Lauren Asher",
            "genre": "Billionaire Romance, Contemporary Romance, Sibling Series",
            "description": (
                "The Dreamland Billionaires series by Lauren Asher follows the Kane brothers as they tackle love and inheritance. "
                "Set around a Disney-like empire, each book explores a unique romance filled with witty banter, emotional depth, and billionaire drama."
            ),
            "coverImage": "/book8.jpg",
            "volumes": [
                {"title": "The Fine Print", "filename": "the-fine-print.pdf"},
                {"title": "Terms and Conditions", "filename": "terms-and-conditions.pdf"},
                {"title": "Final Offer", "filename": "final-offer.pdf"}
            ]
        }
    ]

    return jsonify(books)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(debug=True)
