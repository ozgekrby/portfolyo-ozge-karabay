import axios from "axios";
import data from '../../data/data.json';

export const selectLang = (lang) => {
  return {
    type: 'SELECT_LANG',
    payload: lang,
  };
};

export const retrievalData = (lang) => {
  return (dispatch) => {
    dispatch(selectLang(lang));

    axios.post('https://reqres.in/api/workintech', data[lang])
      .then(function (response) {
        console.log(response);
        const modeSwitchData = response.data.modeSwitch;
        const headerData = response.data.header;
        const heroData = response.data.hero;
        const skillsData = response.data.skills;
        const profileData = response.data.profile;
        const projectsData = response.data.projects;
        const footerData = response.data.footer;
        const titlesData = response.data.titles;

        dispatch({ type: 'SET_DATA', payload: { section: 'modeSwitch', data: modeSwitchData } });
        dispatch({ type: 'SET_DATA', payload: { section: 'header', data: headerData } });
        dispatch({ type: 'SET_DATA', payload: { section: 'hero', data: heroData } });
        dispatch({ type: 'SET_DATA', payload: { section: 'skills', data: skillsData } });
        dispatch({ type: 'SET_DATA', payload: { section: 'profile', data: profileData } });
        dispatch({ type: 'SET_DATA', payload: { section: 'projects', data: projectsData } });
        dispatch({ type: 'SET_DATA', payload: { section: 'footer', data: footerData } });
        dispatch({ type: 'SET_DATA', payload: { section: 'titles', data: titlesData } });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
