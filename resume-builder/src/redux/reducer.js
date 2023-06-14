const initialState = {
  name:"Your Name",
  email:"youremail@gmail.com",
  jobTitle:"Job Title",
  phone:"7867655XXX",
  links:[{
   title:"Github",
   link:"xyx.com"
  },{
    title:"Portfolio",
    link:"xyz.com"
   }],
  address:"",
  about:"Describe yourself",
  education:[{
    institute:"Dummy Institute",
    course:"Dummy Course",
    startYear:"2018",
    endYearL:"2019"
  }],
  workExp:[{
    company:"Dummy company",
    field:"Dummy field",
    startYear:"2018",
    endYear:"2019"
  }],
  project:[{
    name:"Your Project",
    github:"www.xyz.com",
    deployed:"www.xyz.com",
    startMonth:"",
    startYear:"",
    endMonth:"",
    endYear:""

  }],
  skills:[],
  achievements :[]
};

export const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    default: {
      return state;
    }
  }
};
