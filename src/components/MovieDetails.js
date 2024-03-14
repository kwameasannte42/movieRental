import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Container,
} from "@mui/material";

function MovieDetail() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = "b7893bd3"; // Your API key
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <Container maxWidth="md">
      {movieDetails ? (
        <div>
        <br />
          <div style={{ textAlign: "center" }}>
            <img
              src={movieDetails.Poster}
              alt={movieDetails.Title}
              style={{
                maxWidth: "100%",
                border: "2px solid #ccc",
                borderRadius: "5px",
                padding: "5px",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>

          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Title
                  </TableCell>
                  <TableCell>{movieDetails.Title}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Year
                  </TableCell>
                  <TableCell>{movieDetails.Year}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Runtime
                  </TableCell>
                  <TableCell>{movieDetails.Runtime}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Genre
                  </TableCell>
                  <TableCell>{movieDetails.Genre}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Director
                  </TableCell>
                  <TableCell>{movieDetails.Director}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Writer
                  </TableCell>
                  <TableCell>{movieDetails.Writer}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Actors
                  </TableCell>
                  <TableCell>{movieDetails.Actors}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Plot
                  </TableCell>
                  <TableCell>{movieDetails.Plot}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Language
                  </TableCell>
                  <TableCell>{movieDetails.Language}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Country
                  </TableCell>
                  <TableCell>{movieDetails.Country}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Awards
                  </TableCell>
                  <TableCell>{movieDetails.Awards}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Ratings
                  </TableCell>
                  <TableCell>
                    {movieDetails.Ratings.map(
                      (rating) => `${rating.Source}: ${rating.Value}`
                    ).join(", ")}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Votes
                  </TableCell>
                  <TableCell>{movieDetails.imdbVotes}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Type
                  </TableCell>
                  <TableCell>{movieDetails.Type}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Box Office
                  </TableCell>
                  <TableCell>{movieDetails.BoxOffice}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <Typography variant="body1">Loading...</Typography>
      )}
    </Container>
  );
}

export default MovieDetail;
