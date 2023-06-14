const initialState = {
  name: "Your Name",
  email: "youremail@gmail.com",
  jobTitle: "Job Title",
  phone: "7867655XXX",
  links: [
    {
      title: "Github",
      link: "xyx.com",
    },
    {
      title: "Linkedin",
      link: "xyz.com",
    },
  ],
  address: "xyz street , London",
  about: "Describe yourself iseijlsn  eoroeio;i dsofo;iofdo;siofiop eorop ieowiroio erif kdkljfkj fg jdfkgildf ilkgjk lgjlkfjlj fjfdgj kdjgkl jdfklj gkj dkljgjgklfjd kljg kljfdkl gjklfjdk lgjfdj gk ljdflj gkfk gkdjg",
  education: [
    {
      institute: "Dummy Institute",
      course: "Dummy Course",
      startYear: "2018",
      endYearL: "2019",
    },
  ],
  workExp: [
    {
      company: "Dummy company",
      field: "Dummy field",
      startYear: "2018",
      endYear: "2019",
    },
  ],
  project: [
    {
      name: "Your Project",
      github: "www.xyz.com",
      deployed: "www.xyz.com",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
    },
  ],
  skills: ["Javascipt","React","Typescript"],
  more:[]

};

export const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    default: {
      return state;
    }
  }
};
