import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('https://api.themoviedb.org/3/discover/movie?api_key=e682208bc22c8eeb0c8f450fe55da9c0&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', () => {
        return HttpResponse.json({
                "page": 1,
                "results": [
                {
                "adult": false,
                "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
                "genre_ids": [
                878,
                28,
                12
                ],
                "id": 912649,
                "original_language": "en",
                "original_title": "Venom: The Last Dance",
                "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
                "popularity": 4533.723,
                "poster_path": "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
                "release_date": "2024-10-22",
                "title": "Venom: The Last Dance",
                "video": false,
                "vote_average": 6.4,
                "vote_count": 633
                },
                {
                "adult": false,
                "backdrop_path": "/18TSJF1WLA4CkymvVUcKDBwUJ9F.jpg",
                "genre_ids": [
                27,
                53,
                9648
                ],
                "id": 1034541,
                "original_language": "en",
                "original_title": "Terrifier 3",
                "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
                "popularity": 4174.554,
                "poster_path": "/l1175hgL5DoXnqeZQCcU3eZIdhX.jpg",
                "release_date": "2024-10-09",
                "title": "Terrifier 3",
                "video": false,
                "vote_average": 7,
                "vote_count": 856
                },
            ],
        })
    })
]