import React from 'react'
import {LoginButton, loginButton} from '@inrupt/solid-ui-react'

const authOptions = {
  clientName: 'Solid ToDo App'
};

function App(){
  const[oidIssuer, setOidcIssuer] = useState("");

  const handleChange = (event) => {
    setOidIssuer(event.target.value);
  };

  return (
    <div className='app-container'>
      <span>
        Log in with:
        <input
          className='oidc-issuer-input'
          type='text'
          name={oidcIssuer}
          list='providers'
          value={oidcIssuer}
          onChange={handleChange}
        />
        <datalist id='providers'>
          <option value='https://broker.pod.inrupt.com/' />
          <option value='https://inrupt.net' />
        </datalist>
      </span>
      <LoginButton 
        oidcIssuer={oidcIssuer}
        redirectUrl={window.location.href}
        authOptions={authOptions}
      />
    </div>
  );
}

export default App;