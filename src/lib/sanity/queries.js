import groq from 'groq';

export const jobQuery = groq`*[_type == "Job"]`;
export const testimonialQuery = groq`*[_type == "Testimonial"]`;
