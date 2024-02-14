-- Lists all genres in the database hbtn_0d_tvshows_rate by their rating.
-- Each record should display: tv_genres.name - rating sum
-- Results must be sorted in descending order by their rating
-- Allowed editors: vi, vim, emacs

SELECT tv_genres.name, SUM(hbtn_0d_tvshows_rate.rating) AS rating
FROM hbtn_0d_tvshows_rate
JOIN tv_genres ON hbtn_0d_tvshows_rate.genre_id = tv_genres.id
GROUP BY tv_genres.name
ORDER BY rating DESC;
