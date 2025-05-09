import React from "react";
import bgImage from '/assets/home-background.png';


export default function Layout({ children }) {
  return (
    <div
      style={{ 
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        margin:'0px'
      }}
    >
      {children}
    </div>
  );
}
