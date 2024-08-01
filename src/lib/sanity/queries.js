import groq from 'groq';

export const testimonialQuery = groq`*[_type == "Testimonial"]`;
export const jobQuery = groq`*[_type == "Job"] | order(startDate desc)`;
export const skillsQuery = groq`*[_type == "Skills"] | order(index asc)`;
