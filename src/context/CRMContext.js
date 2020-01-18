import React, {useState} from 'react'; 

const CRMContext = React.createContext([{}, ()=>{}]);

const CRMProvider = props =>{

    const [auth, guardarAuth] = useState({
        token:'',
        auth: false,

    });
    return(
        <CRMContext.Provider value={[auth, guardarAuth]}>
            {props.children}
        </CRMContext.Provider>
    )
}
export {CRMContext, CRMProvider};