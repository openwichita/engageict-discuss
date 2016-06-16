/*
The original Logo components is defined using React's
functional stateless component syntax, so we redefine
it the same way. 
*/

import React from 'react';

const CustomLogo = ({logoUrl, siteTitle}) => {
  if (!logoUrl) {
    return (
      <h1 className="logo-text"><a href="/">⭐{siteTitle}⭐</a></h1>
    );
  }

  return (
    <h1 className="logo-image">
      <a href="/"><img alt={siteTitle} src={logoUrl} /></a>
    </h1>
  );
}

export default CustomLogo;
