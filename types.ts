import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string; // Main image for card/hero
  gallery?: string[]; // Optional gallery images
  challenge: string;
  solution: {
    intro: string;
    points: string[];
  };
  result: string;
}


export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Stat {
  value: string;
  label: string;
}