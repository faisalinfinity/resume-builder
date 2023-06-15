import {
  DELETE_EDU,
  DELETE_EXP,
  DELETE_SKILLS,
  DELETE_SOCIAL,
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
      id: 1,
      title: "Github",
      link: "xyx.com",
    },
    {
      id: 2,
      title: "Linkedin",
      link: "xyz.com",
    },
  ],
  address: "xyz street , London",
  about:
    "Describe yourself iseijlsn  eoroeio;i dsofo;iofdo;siofiop eorop ieowiroio erif kdkljfkj fg jdfkgildf ilkgjk lgjlkfjlj fjfdgj kdjgkl jdfklj gkj dkljgjgklfjd kljg kljfdkl gjklfjdk lgjfdj gk ljdflj gkfk gkdjg",
  education: [
    {id:1,
      institute: "Dummy Institute",
      course: "Dummy Course",
      startYear: "2018",
      endYear: "2019",
    },
  ],
  workExp: [
    {
      id:1,
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
  skills: [{ id: 1, title: "Javascript" }],
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
      let flag = false;

      let updated = state.links.map((el) => {
        if (el.id == payload.id) {
          flag = true;
          return payload;
        }
        return el;
      });

      if (flag) {
        return {
          ...state,
          links: updated,
        };
      }
      return {
        ...state,
        links: [...state.links, payload],
      };
    }
    case SET_SKILLS: {
      let flag = false;

      let updated = state.skills.map((el) => {
        if (el.id == payload.id) {
          flag = true;
          return payload;
        }
        return el;
      });

      if (flag) {
        return {
          ...state,
          skills: updated,
        };
      }
      return {
        ...state,
        skills: [...state.skills, payload],
      };
    }
    case SET_EDUCATION: {
      let flag = false;

      let updated = state.education.map((el) => {
        if (el.id == payload.id) {
          flag = true;
          return payload;
        }
        return el;
      });

      if (flag) {
        return {
          ...state,
          education: updated,
        };
      }
      return {
        ...state,
        education: [...state.education, payload],
      };
    }
    case SET_EXP: {
      let flag = false;

      let updated = state.workExp.map((el) => {
        if (el.id == payload.id) {
          flag = true;
          return payload;
        }
        return el;
      });

      if (flag) {
        return {
          ...state,
          workExp: updated,
        };
      }
      return {
        ...state,
        workExp: [...state.workExp, payload],
      };
    }
    case DELETE_SKILLS: {
      return {
        ...state,
        skills: state.skills.filter((el) => el.id != payload),
      };
    }
    case DELETE_SOCIAL: {
      return {
        ...state,
        links: state.links.filter((el) => el.id != payload),
      };
    }
    case DELETE_EDU: {
      return {
        ...state,
        education: state.education.filter((el) => el.id != payload),
      };
    }
    case DELETE_EXP: {
      return {
        ...state,
        workExp: state.workExp.filter((el) => el.id != payload),
      };
    }
    default: {
      return state;
    }
  }
};
