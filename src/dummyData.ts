export const sources:Source[] = [
  {
    id: 1,
    name: 'Integral Chart',
    sourceType: 'image',
    link: 'https://www.google.com',
    description: 'Formula Chart for Integrals',
    tags: ['calculus, integral, mathematics']
  },
  {
    id: 2,
    name: 'Video: How to Start Welding',
    sourceType: 'video',
    link: 'https://www.google.com',
    description: 'Good guide for those wanting to get into welding',
    tags: ['welding', 'beginner']
  },
  {
    id: 3,
    name: 'Trigonometry Derivative Chart',
    sourceType: 'image',
    link: 'https://www.google.com',
    description: 'Chart for deriving sine, cosine, etc.',
    tags: ['calculus', 'derivatives', 'mathematics']
  },
  {
    id: 4,
    name: 'Basic Geometry Formulas',
    sourceType: 'text',
    link: 'https://www.google.com',
    description: 'Geometry formulas for reference',
    tags: ['math', 'geometry']
  },
  {
    id: 5,
    name: 'How to build a pc and not break it',
    sourceType: 'website',
    link: 'https://www.google.com',
    description: 'Quick guide about making a PC',
    tags: ['basic', 'building', 'computers']
  },
  {
    id: 6,
    name: 'Martial Arts List',
    sourceType: 'text',
    link: 'https://www.google.com',
    description: 'Comprehensive list of different martial arts',
    tags: ['martial-arts', 'list']
  },
];

export const curriculums:Curriculum[] = [
  {
    id: 1,
    name: 'Calculus Guide',
    sources: [1, 3],
    //tabs: ['Intro', 'Materials', 'Derivatives'],
    tabs: [
      {
        name: 'Intro',
        content: 'Lores the god bla the dace jing jong jong eerr dsc slavioka fros tle pa padarad nawras moif kun la la dingus poopie',
      },
      {
        name: 'Materials',
        content: 'Lores the god bla the dace jing jong jong eerr dsc slavioka fros tle pa padarad nawras moif',
      },
      {
        name: 'Derivatives',
        content: 'L bla the dace jing jong jong eerr dsc slavioka fros tle pa padarad nawras moif kun la la dingus poopie',
      }
    ],
    tags: ['calculus, derivatives, integrals, mathematics']
  }
];