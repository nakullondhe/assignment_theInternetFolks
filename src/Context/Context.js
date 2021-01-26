import React,{useState, createContext} from 'react';

export const LinkContext = createContext();

export const LinkProvider = props => {
  const [links, setLinks] = useState([{
    code: "nc",
    short_link: "jvnsd",
    original_link: "ascas",
    copied: false,
  }]);
  
  return (
    <div>
    <LinkContext.Provider value={[links, setLinks]}>
      {props.children}
    </LinkContext.Provider>
    </div>
  )
}

export default LinkProvider;