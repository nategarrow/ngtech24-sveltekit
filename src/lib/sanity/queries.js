import groq from 'groq';

export const jobQuery = groq`*[_type == "Job"] | order(startDate desc)`;
export const testimonialQuery = groq`*[_type == "Testimonial"]`;
