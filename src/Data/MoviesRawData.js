const movieRawData = [
    {
      id: 1,
      title: "Inception",
      description: "A thief who enters the dreams of others to obtain information finds himself involved in a complex heist.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      rating: 4.8,
      type: ["thriller", "science fiction"],
      trailerURL: `"<iframe width="1904" height="762" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception (2010) Official Trailer #1 - Christopher Nolan Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"`
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      rating: 3.3,
      type: ["drama"],
      trailerURL: `<iframe width="1904" height="762" src="https://www.youtube.com/embed/NmzuHjWmXOc" title="The Shawshank Redemption (1994) Official Trailer #1 - Morgan Freeman Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

    },
    {
        id: 3,
        title: "The Godfather",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/b/b7/TheGodfatherAlPacinoMarlonBrando.jpg",
        rating: 2.2,
        type: ["crime", "drama"],
        trailerURL: `"<iframe width="1904" height="762" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception (2010) Official Trailer #1 - Christopher Nolan Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"`
    },
    {
        id: 4,
        title: "Pulp Fiction",
        description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        posterURL: "https://resizing.flixster.com/CQ-37RY0T4l_bp46NJV6xyIPFYQ=/206x305/v2/https://flxt.tmsimg.com/assets/p15684_p_v8_af.jpg",
        rating: 1.9,
        type: ["crime", "drama"],
        trailerURL: `"<iframe width="1904" height="762" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception (2010) Official Trailer #1 - Christopher Nolan Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"`
    },
    {
        id: 5,
        title: "The Dark Knight",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        posterURL: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL5PRK/image?locale=en-us&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg",
        rating: 4.0,
        type: ["action", "crime", "drama"],
        trailerURL: `"<iframe width="1904" height="762" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception (2010) Official Trailer #1 - Christopher Nolan Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"`
    },
    {
        id: 6,
        title: "The Matrix",
        description: "A computer programmer discovers a dystopian world within the Matrix, a simulated reality created by machines to subdue humanity.",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        rating: 5.0,
        type: ["action", "science fiction"],
        trailerURL: `"<iframe width="1904" height="762" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception (2010) Official Trailer #1 - Christopher Nolan Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"`
    },
    {
        id: 7,
        title: "A Quiet Place",
        description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from creatures that hunt by sound.",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/a/a0/A_Quiet_Place_film_poster.png",
        rating: 4.5,
        type: ["horror", "thriller"],
        trailerURL: `"<iframe width="1904" height="762" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception (2010) Official Trailer #1 - Christopher Nolan Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"`
    },
    {
        id: 8,
        title: "The Notebook",
        description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg",
        rating: 3.7,
        type: ["romance", "drama"],
        trailerURL: `"<iframe width="1904" height="762" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception (2010) Official Trailer #1 - Christopher Nolan Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"`
    },
    {
        id: 9,
        title: "Jurassic Park",
        description: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/9/93/Jurassic_Park_%28franchise_logo%29.png",
        rating: 4.4,
        type: ["action", "adventure", "science fiction"],
        trailerURL: `"<iframe width="1904" height="762" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception (2010) Official Trailer #1 - Christopher Nolan Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"`
    },
    {
        id: 10,
        title: "Toy Story",
        description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
        rating: 4.9,
        type: ["animation", "comedy", "family"],
        trailerURL: `"<iframe width="1904" height="762" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception (2010) Official Trailer #1 - Christopher Nolan Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"`
    },
    {
        id: 11,
        title: "The Conjuring",
        description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Conjuring_poster.jpg",
        rating: 4.2,
        type: ["horror", "mystery", "thriller"],
        trailerURL: `"<iframe width="1904" height="762" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception (2010) Official Trailer #1 - Christopher Nolan Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"`
    },
    {
        id: 12,
        title: "Forrest Gump",
        description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        rating: 4.7,
        type: ["drama", "romance"],
        trailerURL: `"<iframe width="1904" height="762" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception (2010) Official Trailer #1 - Christopher Nolan Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"`
    },
    {
        id: 13,
        title: "The Lion King",
        description: "A young lion returns to reclaim the throne from his evil uncle and restore peace to the Pride Lands.",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/0/0e/The_Lion_King_%28soundtrack%29.jpg",
        rating: 4.6,
        type: ["animation", "adventure", "drama"],
        trailerURL: `"<iframe width="1904" height="762" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception (2010) Official Trailer #1 - Christopher Nolan Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"`
    },
    {
        id: 14,
        title: "Avatar",
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png",
        rating: 4.3,
        type: ["action", "adventure", "science fiction"],
        trailerURL: `"<iframe width="1904" height="762" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception (2010) Official Trailer #1 - Christopher Nolan Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"`
    },
    {
        id: 15,
        title: "The Social Network",
        description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png",
        rating: 4.1,
        type: ["drama"],
        trailerURL: `"<iframe width="1904" height="762" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception (2010) Official Trailer #1 - Christopher Nolan Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"`
    }
    
];

export default movieRawData