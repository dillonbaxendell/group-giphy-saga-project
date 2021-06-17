CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- name = url

--RANDOM PSEUDO
CREATE TABLE "favorites"(
    "id" SERIAL PRIMARY KEY,
    "category_id" INT REFERENCES "category",
    "favorite" BOOLEAN DEFAULT TRUE,
    "url" VARCHAR (200) NOT NULL
);
INSERT INTO "favorites" ("favorite", "url")
VALUES (TRUE, 'https://giphy.com/gifs/looking-looney-tunes-searching-26n6WywJyh39n1pBu');