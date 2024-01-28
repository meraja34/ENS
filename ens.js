const express = require('express');
const app = express();

app.use(express.json());

const custom_image_url = "https://vision.io/name/alphacaster";

app.get("/", (req, res) => {
  const body = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta property="og:title" content="Pup Frame" />
      <meta property='og:image' content=${custom_image_url} />
      <meta property="fc:frame" content="vNext" />
      <style>
        .iframe-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 75%; /* 4:3 aspect ratio */
        }
        .iframe-container iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          border: none;
        }
      </style>
    </head>
    <body>
      <div class="iframe-container">
        <iframe src=${custom_image_url}></iframe>
      </div>
    </body>
  </html>
  `;
  res.status(200).send(body);
});

app.post("/grow", (req, res) => {
  const body = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta property="og:title" content="Pup Frame" />
      <meta property='og:image' content=${custom_image_url} />
      <meta property="fc:frame" content="vNext" />
      <style>
        .iframe-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 75%; /* 4:3 aspect ratio */
        }
        .iframe-container iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          border: none;
        }
      </style>
    </head>
    <body>
      <h1>Pup Frame</h1>
      <div class="iframe-container">
        <iframe src=${custom_image_url}></iframe>
      </div>
    </body>
  </html>
  `;
  res.status(200).send(body);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

