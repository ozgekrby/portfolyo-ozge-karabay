import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrievalData, selectLang } from '../../redux/actions/actions';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { getSystemLanguage } from '../../hooks/getLanguage';

export default function ModeSwitch() {
  const dispatch = useDispatch();
  const [lang, updateLang] = useLocalStorage("lang", getSystemLanguage()); 
  const modeSwitch = useSelector(state => state.data.modeSwitch);
  
  useEffect(() => {
    dispatch(retrievalData(lang));
  }, [dispatch, lang]);

  const handleLanguageChange = () => {
    const newLang = lang === "tr" ? "en" : "tr"; 
    updateLang(newLang); 
    dispatch(selectLang(newLang)); 
  };

  return (
    <div>
       <span onClick={handleLanguageChange}>
       {lang === "tr" ? <p>{modeSwitch.switch1} {modeSwitch.switch}</p> : <p>{modeSwitch.switch} {modeSwitch.switch1}</p>}
      </span>
    </div>
  );
}
