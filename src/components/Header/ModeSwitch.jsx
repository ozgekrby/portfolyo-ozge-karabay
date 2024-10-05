import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { retrievalData, selectLang } from '../../redux/actions/actions';

export default function ModeSwitch() {
  const dispatch=useDispatch();
  const lang =useSelector(state=>state.lang);
  const modeSwitch=useSelector(state=>state.data.modeSwitch);
  
  useEffect(() => {
    dispatch(retrievalData(lang));
  }, [dispatch, lang]);

  const handleLanguageChange = (newLang) => {
    dispatch(selectLang(newLang)); 
  };
  return (
    <div>
       <span onClick={() => handleLanguageChange(lang==="tr" ? 'en' : 'tr')} >
       {lang==="tr" ? <p>{modeSwitch.switch1} {modeSwitch.switch}</p>:<p>{modeSwitch.switch} {modeSwitch.switch1}</p>}
      </span>
    </div>
  )
}
