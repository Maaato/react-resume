import React from "react";
import { Helmet } from "react-helmet";

export const SEO = ({ name, ocupation, description }) => {
  return (
    <Helmet>
      <title>{name} - {ocupation}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};
