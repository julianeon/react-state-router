import React, { useState } from 'react';


export default function App() {
  const [Page, setPage] = useState(() => Home);

  const navigateTo = component => setPage(() => component);

    return (
        <div>
          <Page />                  
          <nav>
            <button onClick={() => navigateTo(Home)}>Home</button>
            <button onClick={() => navigateTo(Email)}>Email</button>
            <button onClick={() => navigateTo(Calendar)}>Calendar</button>
          </nav>
        </div>
  )
}

function Home() { return ( <div>Home page</div> ) }
function Email() { return ( <div>Email page</div> ) }
function Calendar() { return ( <div>Calendar page</div> ) }
