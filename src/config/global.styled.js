import { createGlobalStyle } from 'styled-components';
import { lighten, darken } from 'polished';

export default createGlobalStyle`

/**
*   BEGIN CSS Normalize
*/

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

button,
input {
  /* 1 */
  overflow: visible;
}

button,
select {
  /* 1 */
  text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type='checkbox'],
[type='radio'] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

/**
*   Hide scroll with keep functionality
*/

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/**
    BEGIN STYLING
 */

body {
  font-family: 'Inter', sans-serif;
  background-color: ${(props) => props.theme.body.low};
  color: ${(props) => props.theme.text.default};

  outline: solid;
  outline-color: ${(props) => props.theme.line}
}

header {
  background-color: ${(props) =>
    props.theme.dark ? props.theme.body.high : props.theme.colors.primary};
  color: ${(props) => props.theme.contrast}
}

nav {
  background-color: ${(props) => props.theme.body.default}
}

/**
    Table styling
*/

.table-responsive {
  overflow-x: auto;
  overflow-y: hidden;
}

.table {
  display: table;
  box-sizing: border-box;
  width: 100%;
  border-radius: 8px 8px 0 0;
  border-color: ${(props) =>
    props.dark
      ? lighten(0.05, props.theme.body.high)
      : props.theme.colors.primary};
  border-width: 1px;
  border-style: solid;

  .row {
    display: table-row;

    .cell {
      display: table-cell;
      padding: 1rem;
    }
  }

  .header {
      
      .cell {
        background-color: ${(props) =>
          props.dark
            ? lighten(0.01, props.theme.body.high)
            : props.theme.colors.primary};
        color: ${(props) => props.theme.contrast};
        padding: 1rem 2rem;
        font-weight: 600;
        
        :first-child {
        border-radius: 8px 0 0 0;
        }

        :last-child {
        border-radius: 0 8px 0 0;
        }
      }
    }
}


/**
    DIV Sytling and within className
*/

div {

  &.input-group {
    display: flex;
    flex-direction: column;

    margin: 1rem 0;
  }

  & > label {
    margin-bottom: 0.125rem;
  }

  & span {
    &.error {
      margin-top: 0.25rem;
      color: red;
      font-size: 0.9rem;
    }
  }

  & .footer {
    background-color: ${(props) => props.theme.body.default};
    color: ${(props) => darken(0.5, props.theme.contrast)};
    padding: 0.25rem 0;
    font-size: 0.8rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/**
    Typography
*/
h1,h2,h3,h4,h5,h6 {
  color: ${(props) => props.theme.text.default}
}

a,p,span,li {
  color: ${(props) => props.theme.text.default}
}


/**
    Anchor
*/
a {
&:hover, &.active {
  background-color: ${(props) => {
    if (props.theme.dark) return lighten(0.15, props.theme.body.low);

    return darken(0.15, props.theme.body.low);
  }};
  color: ${(props) => props.theme.text.active}
}
}

/**
    Form related styling
*/
/* input {
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  font-size: 1rem;
  border: none;
  background-color: ${(props) => props.theme.body.low};
  color: ${(props) => props.theme.text.default};

  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.15) inset;
  -webkit-box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.15) inset;
  -moz-box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.15) inset;

  &:focus {
    background-color: ${(props) => props.theme.body.default};
    
  }

  &:focus-visible {
    outline-style: solid;
    outline-color: ${(props) => props.theme.colors.primary};

    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.15) inset;
  -webkit-box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.15) inset;
  -moz-box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.15) inset;
  }

  &.error {
    border: 1px solid red;
  }
}

select {
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  font-size: 1rem;
  border: none;
  background-color: ${(props) => props.theme.body.low};
  color: ${(props) => props.theme.text.default};

  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.15) inset;
  -webkit-box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.15) inset;
  -moz-box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.15) inset;

  &:focus {
    background-color: ${(props) => props.theme.body.default};
    
  }

  &:focus-visible {
    outline-style: solid;
    outline-color: ${(props) => props.theme.colors.primary};

    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.15) inset;
  -webkit-box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.15) inset;
  -moz-box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.15) inset;
  }

  &.error {
    border: 1px solid red;
  }
}

option {
  height: 3rem;
}

button {
  display: block;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.contrast};  
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.3rem;

  &:hover {
    background-color: ${(props) => darken(0.2, props.theme.colors.primary)};
  }
} */

* {
  transition: all 0.25s ease-in;
}

header nav {
  transition: none; 
}
`;
