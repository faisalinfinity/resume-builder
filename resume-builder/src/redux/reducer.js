import {
  SET_ABOUT,
  SET_ADDRESS,
  SET_EDUCATION,
  SET_EMAIL,
  SET_EXP,
  SET_JOB,
  SET_NAME,
  SET_PHONE,
  SET_SKILLS,
  SET_SOCIAL,
} from "./actioonType";

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
  about:
    "Describe yourself iseijlsn  eoroeio;i dsofo;iofdo;siofiop eorop ieowiroio erif kdkljfkj fg jdfkgildf ilkgjk lgjlkfjlj fjfdgj kdjgkl jdfklj gkj dkljgjgklfjd kljg kljfdkl gjklfjdk lgjfdj gk ljdflj gkfk gkdjg",
  education: [
    {
      institute: "Dummy Institute",
      course: "Dummy Course",
      startYear: "2018",
      endYear: "2019",
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
  skills: ["Javascipt", "React", "Typescript"],
  more: [{ title: "Interest", items: ["Cricket", "Tech"] }],
};

export const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_NAME: {
      return {
        ...state,
        name: payload,
      };
    }
    case SET_EMAIL: {
      return {
        ...state,
        email: payload,
      };
    }

    case SET_PHONE: {
      return {
        ...state,
        phone: payload,
      };
    }

    case SET_ADDRESS: {
      return {
        ...state,
        address: payload,
      };
    }
    case SET_JOB: {
      return {
        ...state,
        jobTitle: payload,
      };
    }

    case SET_ABOUT: {
      return {
        ...state,
        about: payload,
      };
    }
    case SET_SOCIAL: {
      return {
        ...state,
        links: [...state.links, payload],
      };
    }
    case SET_SKILLS: {
      return {
        ...state,
        skills: [...state.skills, payload],
      };
    }
    case SET_EDUCATION: {
      return {
        ...state,
        education: [...state.education, payload],
      };
    }
    case SET_EXP: {
      return {
        ...state,
        workExp: [...state.workExp, payload],
      };
    }
    default: {
      return state;
    }
  }
};
