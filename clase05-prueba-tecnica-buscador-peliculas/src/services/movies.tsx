const API_KEY = "352ebac0";

interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
}

export interface MappedMovie {
    id: string;
    title: string;
    year: string;
    poster: string;
}

export function searchMovies(search: string): Promise<MappedMovie[]> {
    if (search === '') return Promise.resolve([]);

    return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        .then(response => response.json())
        .then(result => {
            const movies: Movie[] = result.Search || [];  // Para manejar el caso donde no hay resultados.

            // Mapea las películas a un nuevo formato
            return movies.map((movie: Movie) => ({
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster,
            }));
        })
        .catch(error => {
            throw new Error('Error searching movies: ' + error.message);
        });
}
