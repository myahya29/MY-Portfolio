import { LINKS, EXPERIENCES, EDUCATION } from '../database/content-registry';

const BASE_URL = 'https://muhammadyahya.com';

export function generatePersonSchema() {
  const zaryonixExperience = EXPERIENCES.find(exp => exp.id === 'zaryonix-tech');
  const uobEducation = EDUCATION.find(edu => edu.id === 'uob-bachelors');

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhammad Yahya',
    jobTitle: 'Full-Stack MERN Developer',
    url: BASE_URL,
    image: `${BASE_URL}/thumbnail.png`,
    description: 'Founder of Zaryonix Tech and Full-Stack MERN Developer specializing in building modern, scalable, and high-performance web applications using the MERN Stack.',
    sameAs: [
      LINKS.linkedin,
      LINKS.github,
      LINKS.x,
    ],
    email: LINKS.email,
    worksFor: zaryonixExperience
      ? {
          '@type': 'Organization',
          name: zaryonixExperience.company,
          url: zaryonixExperience.link,
        }
      : undefined,
    alumniOf: [
      uobEducation
        ? {
            '@type': 'EducationalOrganization',
            name: uobEducation.institution,
            url: 'https://www.uob.edu.pk',
          }
        : null,
    ].filter(Boolean),
  };
}

