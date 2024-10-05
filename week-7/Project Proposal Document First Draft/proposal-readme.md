# Data Visualization Project

## Data

The data I propose to visualize for my project is a
[Pokémon Base Stats Dataset](https://www.kaggle.com/datasets/crinklybrain2003/pokmon-base-stats-dataset),
which consists of most (if not all) Pokémon. Each Pokémon
has an associated list of attributes, which includes a:

- Name
- Type
- Species
- Height
- Weight
- Abilities
- Catch Rate
- Base Friendship
- Base Exp.
- Growth Rate
- Gender
- HP (Hit Points)
- Attack
- Defense
- Sp. Atk
- Sp. Def
- Speed

The reason I really like this dataset is because of the
number of features for each Pokémon, and gives me a creative
outlet for visualizing this data in a unique way. **Who is
this for? What will it enable them to do?** Well, this
visualization can be for gamers and game
developers/designers alike. The data can help gamers pick
out a good lineup, depending on what kind of Pokémon they
prefer. On the other hand, game developers may want to study
the balance in character design. After all, it's rare for a
Pokémon to have all of the best abilities. **My project** in
particular will primarily facilitate the visualization of
speed and attack vectors, while also including Pokémon type
and HP attributes as well. So far, I have come to the
conclusion to present this data in a scatterplot, though I
have gone through some other iterations such as a bubble
chart and a radar chart.

## Questions & Tasks

The following tasks and questions will drive the
visualization and interaction decisions for this project:

- How does the Pokémon's speed correlate with its offensive
  stats?
- Is there a correlation between a Pokémon's HP and Speed?
- What can the Pokémon type tell us about the Speed of that
  type compared to all other Pokémon (if anything)?
- What can the Pokémon type tell us about the HP of that
  type compared to all other Pokémon (if anything)?
- What can each quadrant of the scatterplot tell us about
  all Pokémon? Are they evenly distributed? Are there any
  outliers?

The ultimate aim of these questions is to unravel any
answers as to how the Pokémon are distributed so that gamers
and game developers alike can benefit from this design or
game strategy.

## Sketches

The following is my first iteration of a scatterplot sketch
with respect to the Pokémon dataset, which precedes my
digital iteration of a scatterplot.

![scatter-plot-matrix-revised](https://private-user-images.githubusercontent.com/76920895/373905953-b6b5b9ba-a227-41a4-9436-b045eeabd3fc.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgxNjA2ODUsIm5iZiI6MTcyODE2MDM4NSwicGF0aCI6Ii83NjkyMDg5NS8zNzM5MDU5NTMtYjZiNWI5YmEtYTIyNy00MWE0LTk0MzYtYjA0NWVlYWJkM2ZjLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA1VDIwMzMwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFmN2U2NTFiYTI5YzI4Y2ZiZTc0MTM4OGI4MjFmOTQ0YTc2MDYxZGZiMDYwYWVkNTE3NGU0ZDFmZmFiMGQxZGEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.nXcYHYf9zCoxBthHZQRTOthHHDpq_bX0dZXgDycIbEw)

- This original sketch of the scatterplot was focused on
  visualizing the offensive/defensive and speed attributes
  of Pokémon. This sketch also visualizes an onClick feature
  in which an end-user could interact with each of the
  points on the graph. It was at this point when I realized
  the scatterplot showed much potential in terms of
  visualizing more attributes, which could benefit gamers
  and game developers

![scatterplot](https://private-user-images.githubusercontent.com/76920895/373906733-b6ac8c2c-3022-49dd-bfba-8bbc9efc2bf4.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgxNjEyMzgsIm5iZiI6MTcyODE2MDkzOCwicGF0aCI6Ii83NjkyMDg5NS8zNzM5MDY3MzMtYjZhYzhjMmMtMzAyMi00OWRkLWJmYmEtOGJiYzllZmMyYmY0LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA1VDIwNDIxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRiY2RiNTU5YjQwNDUyYzhiMWY0NmZhNDgxMmMyNDk3MzcwNWY5ZDJkMDU4Njg3YzZjYzJkYzcwZmE5ZDE4NmImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.A5z49ZD-lVtyqsqo8B48yEpC-ne31GhGUpV8X9Ti8bU)

- Shortly after creating this first sketch and receiving
  feedback from classmates, I was able to enhance it by
  creating a digital iteration, which includes the
  visualization of a couple of more attributes (HP and
  Pokémon type)

## Prototypes

Starting from when I first discovered this dataset, I was
able to produce the following VizHub projects
(visualizations):

![vizhub projects for pokemon dataset up to week 7](https://private-user-images.githubusercontent.com/76920895/373907156-056dcf29-cf20-4418-921a-27cbfa9798cf.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgxNjE4NjgsIm5iZiI6MTcyODE2MTU2OCwicGF0aCI6Ii83NjkyMDg5NS8zNzM5MDcxNTYtMDU2ZGNmMjktY2YyMC00NDE4LTkyMWEtMjdjYmZhOTc5OGNmLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA1VDIwNTI0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgwZjU2N2NjZmJmOTU2NDUzNWFhNzlmZDcxYWZjZTVkMmQ4NjBhN2E4ODhjN2FjMjk5NGIzNzFjODlmZjFmM2EmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.YzDt2MZ6Hos2liF2talRgoE_pA7ilcMyCIrsJbdn60k)

- **Week 2** First, I imported the base stats dataset into
  my own repository, where I changed all numerical strings
  into numbers

![vizhub projects for pokemon dataset up to week 7](https://private-user-images.githubusercontent.com/76920895/373907157-da9ef71b-9490-405a-a293-d4aacef1be60.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgxNjE4NjgsIm5iZiI6MTcyODE2MTU2OCwicGF0aCI6Ii83NjkyMDg5NS8zNzM5MDcxNTctZGE5ZWY3MWItOTQ5MC00MDVhLWEyOTMtZDRhYWNlZjFiZTYwLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA1VDIwNTI0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUwZTIxZTI4ZDBjNGQ0NmM1N2VmYWJlODA4MjQ0YmI4MjI0MjlhZjE1NDcwZDQyOGU5MDAzZDI2MmVkODI2MGUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.OzvE23hh7C4v7cv9qeNhwlA9oJ8RqhHxHGOowIOQvZI)

- **Week 4** Then, I used that dataset with the numerical
  values from week 2 to create a simple scatterplot, with a
  background, hue, and axis

![vizhub projects for pokemon dataset up to week 7](https://private-user-images.githubusercontent.com/76920895/373907158-b75cb820-83f0-48b2-b63c-ec9d8a02f1af.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgxNjE4NjgsIm5iZiI6MTcyODE2MTU2OCwicGF0aCI6Ii83NjkyMDg5NS8zNzM5MDcxNTgtYjc1Y2I4MjAtODNmMC00OGIyLWI2M2MtZWM5ZDhhMDJmMWFmLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA1VDIwNTI0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVjMjE2MTE4MzFiOGZlYWJiY2M0Zjg5NTdlOGM1Nzk0NjVjOGE1YzQ1NTk0NmMxYmY2YTZmNzljZDA3MzZmMzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.1_KSstl-akgYoDBtrE3lzY8Kv2KtP3hvqDtI2pUmxZQ)

- **Week 5** Finally, I utilized what I had from week 4 to
  expand my axis, and change the hue/size of the points on
  the graph based on the attributes of the pokemon (although
  no dataset was introduced quite yet)

## Open Questions

Some thoughts or concerns I have about the project:

- I want to continue the work from the Pesudo-Visualization
  (week 5) by implementing the csv dataset
- I received a recommendation to enable exploration of
  multiple quantitative attributes: X and Y, and even color
  which could be controllable with menus. I do like this
  idea, so I may try to implement that, though I'm not 100%
  sure where I want to start with that.

## Milestones

- Week 8 (after break): I want to implement the csv dataset
  into the graph comfortably. I want to see the dataset in
  its entirety
- Week 9: Once csv is implemented/loaded properly, I'll
  likely run into a density/volume issue. I will attempt to
  try either a forced directed layout to spread them out, or
  a 2D binning to show density (though I might lose color
  with this approach, so I will look for alternatives)
- Week 10: Once I can comfortably visualize the graph as
  intended, I would like to go back to Week 6 to implement a
  mouse follower (not sure what for yet, but I want to find
  something cool to do with it). I also want to create a
  **responsive** viz container and **responsive** axis!
- Week 11: TBD... I will add more milestones as the weeks go
  on, and will also take feedback from classmates to help
  with the milestone creation
