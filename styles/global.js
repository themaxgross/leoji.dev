import css from 'styled-jsx/css'

export default css`
  @import url('https://fonts.googleapis.com/css?family=DM+Serif+Display:400,400i&display=swap&subset=latin-ext');
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&display=swap&subset=latin-ext');
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .subtitle {
    font-family: 'DM Serif Display', Georgia, sans-serif;
    font-weight: 400;
  }
  h1.title {
    font-size: 5rem;
    line-height: 2rem;
  }
  h2.subtitle {
    font-weight: normal;
    font-size: 1.75rem;
    line-height: 2rem;
  }
  body {
    font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 2;
    min-height: 100vh;
    text-rendering: optimizeLegibility;
  }
  @media (min-width: 740px) {
    body {
      font-size: 18px;
    }
  }
  body strong {
    font-weight: bold;
  }
  * {
    margin: 0;
    padding: 0;
  }
  ::-moz-selection {
    background-color: #444;
    color: #f1f1f1;
  }
  ::selection {
    background-color: #444;
    color: #f1f1f1;
  }
  html {
    background-color: #6e3996;
  }
  body {
    text-align: center;
    background-color: #f1f1f1;
    color: #555;
  }
  .container {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    max-width: 680px;
    text-align: left;
  }
  .container img {
    width: 100%;
  }
  @media (min-width: 740px) {
    .container {
      width: 750px;
    }
    .container img {
      width: 750px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 900px;
    }
    .container img {
      width: 900px;
    }
  }
  h1,
  h2,
  h3 {
    color: #000;
    margin-top: 2em;
    margin-bottom: 0.2em;
    line-height: 1;
  }
  h1 {
    font-size: 3em;
    margin-top: 0.5em;
    margin-bottom: 0.25em;
    line-height: 1.25em;
  }
  @media (min-width: 740px) {
    h1 {
      font-size: 5em;
    }
  }
  @media (min-width: 1200px) {
    h1 {
      font-size: 6em;
    }
  }
  p {
    margin-top: 1em;
    margin-bottom: 1.5em;
    line-height: 1.85rem;
    text-rendering: optimizeLegibility;
    letter-spacing: -0.0075ch;
  }
  .subtitle {
    font-size: 1.2em;
    margin-top: 1.25em;
    margin-bottom: 1.25rem;
    color: #222;
    letter-spacing: 0.025ch;
  }
  ul,
  ol {
    padding-left: 1em;
  }
  a:link,
  a:visited {
    color: #444;
    text-decoration: none;
    border-bottom: solid 1px #e0e0e0;
  }
  a:hover,
  a:focus {
    color: #444;
    border-bottom: solid 1px #444;
  }
  .nav {
    padding-top: 3em;
    padding-left: 0;
  }
  .nav li {
    display: inline;
  }
  .nav a:link,
  .nav a:visited {
    display: inline-block;
    border-top: solid 1px #898989;
    border-bottom-style: none;
    padding-top: 0.8em;
    padding-bottom: 2em;
    margin-left: 0;
    margin-right: 0.7em;
    width: 8em;
    text-align: left;
    color: #676767;
    text-decoration: none;
  }
  .nav a:hover,
  .nav a:focus {
    color: #444;
    border-top: solid 1px #6e3996;
    border-bottom-style: none;
  }
  .nav small {
    display: block;
    font-size: 0.7em;
    color: #898989;
  }
  code {
    font-size: 0.8em;
    background-color: #d7ccdf;
    color: #444;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 6px;
    padding-right: 6px;
    white-space: nowrap;
  }
  .date {
    font-size: 0.8em;
    font-style: italic;
  }
  main {
    margin-top: 4em;
  }
  pre {
    margin-top: 2em;
    margin-bottom: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 2em;
    padding-right: 2em;
    line-height: 1.2;
    background-color: #e4dfe8;
    border: solid 1px #cabad6;
    overflow: auto;
  }
  pre code {
    border-style: none;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }
  footer {
    margin-top: 6em;
    padding-top: 4em;
    padding-bottom: 6em;
    border-top: solid 1px #e0e0e0;
    font-size: 0.7em;
    color: #acacac;
  }
  footer p {
    line-height: 1rem;
  }
  footer a:link,
  footer a:visited {
    color: #787878;
    border-bottom: solid 1px #9570b1;
  }
  footer a:hover,
  footer a:focus {
    color: #6e3996;
    border-bottom: solid 1px #444;
  }
`
