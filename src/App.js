import React, { useState } from 'react';
import styled from 'styled-components';

const Spacer = styled.div`
margin-left: 1vw;
`

const OneColumn=styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1em;
`

const Block = styled.div`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid darkgray;
  margin-left: 1em;
  margin-right: 1em;
  padding: 0.25em 1em;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;

const Title = styled.h1`
  transition: 0.3s all ease-out;
  &:hover {
    color: red;
  }

`

const Amazon = () => (
    <Block>
      <Title>Amazon</Title>        
      <p>This is Amazon. It started off as an online bookstore.</p> <p>Amazon is the owner of AWS, the host this tutorial is targeting.</p>
    </Block>

);

const Google = () =>  (
    <Block>
      <Title>Google</Title>
      <p>This is Google. It's a search engine started by Sergey Brin and Larry Page.</p><p>PageRank is the search algorithm that started it all. Today it's a multibillion dollar company.</p>
    </Block>
);
                      
const FaceBook = () => (
    <Block>
      <Title>FaceBook</Title>
      <p>This is FaceBook. It was started by Mark Zuckerberg at Harvard.</p><p>FaceBook is the creator of the framework used to build this website, React.</p>
    </Block>
);

const Apple = () => (
    <Block>
      <Title>Apple</Title>
      <p>This is Apple. It's CEO is Tim Cook.</p> <p>Apple manufactures the iPhone and the Mac.</p>
    </Block>
);

const About = () => (
    <Block>
      <Title>About Us</Title>
      <p>This site is about tech companies.</p>
      <p>It's part of a tutorial. You can see the React tutorials I've created at <a href="https://www.reactever.com/">reactever.com</a>.</p>
    </Block>
);

const Home = () => (
    <div>
      <Amazon/>
      <Google/>      
      <Apple/>
      <FaceBook/>
    </div>
)

const NavButtons = ({setter}) => (
      <Spacer>
        <button onClick={()=>setter(()=>Home)}>Home</button>
        <button onClick={()=>setter(()=>Amazon)}>Amazon</button>      
        <button onClick={()=>setter(()=>Google)}>Google</button>
        <button onClick={()=>setter(()=>Apple)}>Apple</button>
        <button onClick={()=>setter(()=>FaceBook)}>FaceBook</button>
        <button onClick={()=>setter(()=>About)}>About</button>
      </Spacer>
)

export default function App() {
  const [Page, setPage] = useState(() => Home);
    return (
        <OneColumn>
          <Spacer>
            <Page />
            <NavButtons setter={setPage}/>
          </Spacer>
        </OneColumn>
    )
}


