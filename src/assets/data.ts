interface ProjectDataProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const projectsData: ProjectDataProps[] = [
  {
    title: 'IB Group Vietnam Website',
    description: 'Web Design / Frontend Development',
    imageSrc: '/ib-group-desktop.webp',
    link: 'https://musical-stroopwafel-1c2327.netlify.app/landing.html',
  },
  {
    title: 'Memento Studio Landing Page',
    description: 'Web Design / Frontend Development',
    imageSrc: '/memento-desktop.webp',
    link: 'https://mementostudio.netlify.app/',
  },
  {
    title: 'Real Business Accountants',
    description: 'Web Design / Frontend Development',
    imageSrc: '/acc-square.webp',
    link: 'https://realbusinessaccountants.netlify.app',
  },
  {
    title: 'GoDaddy Landing Page Clone',
    description: 'Web Design / Frontend Development',
    imageSrc: '/godaddy-desktop.webp',
    link: 'https://godaddyuiclone.netlify.app',
  },
  {
    title: 'Sunnyside Landing Page',
    description: 'Web Design / Frontend Development',
    imageSrc: '/sunny-side-square.webp',
    link: 'https://sunnysidechallenge.netlify.app',
  },
];

export default projectsData;
