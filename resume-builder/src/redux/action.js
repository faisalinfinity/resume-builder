import { DELETE_EDU, DELETE_EXP, DELETE_SKILLS, DELETE_SOCIAL, SET_ABOUT, SET_ADDRESS, SET_EDUCATION, SET_EMAIL, SET_EXP, SET_JOB, SET_NAME, SET_PHONE, SET_SKILLS, SET_SOCIAL } from "./actioonType"

export const setName=(payload)=>{
    return {
        type:SET_NAME,
        payload:payload
    }
}
export const setEmail=(payload)=>{
    return {
        type:SET_EMAIL,
        payload:payload
    }
}

export const setPhone=(payload)=>{
    return {
        type:SET_PHONE,
        payload:payload
    }
}

export const setAdress=(payload)=>{
    return {
        type:SET_ADDRESS,
        payload:payload
    }
}

export const setJob=(payload)=>{
    return {
        type:SET_JOB,
        payload:payload
    }
}

export const setAbout=(payload)=>{
    return {
        type:SET_ABOUT,
        payload:payload
    }
}

export const setSocial=(payload)=>{
    return {
        type:SET_SOCIAL,
        payload:payload
    }
}

export const setSkills=(payload)=>{
    return {
        type:SET_SKILLS,
        payload:payload
    }
}

export const setEducation=(payload)=>{
    return {
        type:SET_EDUCATION,
        payload:payload
    }
}
export const setExp=(payload)=>{
    return {
        type:SET_EXP,
        payload:payload
    }
}

export const deleteSkills=(id)=>{
       return{
        type:DELETE_SKILLS,
        payload:id
       }
}

export const deleteEdu=(id)=>{
    return{
     type:DELETE_EDU,
     payload:id
    }
}

export const deleteExp=(id)=>{
    return{
     type:DELETE_EXP,
     payload:id
    }
}

export const deleteSocial=(id)=>{
    return{
     type:DELETE_SOCIAL,
     payload:id
    }
}