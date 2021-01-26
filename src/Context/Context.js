import React,{useState, createContext} from 'react';

export const LinkContext = createContext();

export const LinkProvider = props => {
  const [links, setLinks] = useState(["cc", "sccac"]);
  
  return (
    <div>
    <LinkContext.Provider value={[links, setLinks]}>
      {props.children}
    </LinkContext.Provider>
    </div>
  )
}
