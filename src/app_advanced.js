import React, { useState } from 'react';
import styled from 'styled-components';

const Spacer = styled.div`
margin-left: 1vw;
`

const Wrap=styled.div`
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
`;

const Title = styled.h1`
  transition: 0.3s all ease-out;
  &:hover {
    color: red;
  }

`

function Company({title,content}) {
    return (
        <Wrap>
          <Block>
            <Title> {title}</Title>
            {content}
          </Block>
        </Wrap>
    )
}

const HomeList = ({items}) => {
    const list= items.map((item)=> <div>{item}</div>);
    return (
        <>
          {list}
        </>
    )
}

const ButtonList = ({dict,setter}) => {
    const list=Object.entries(dict).map(([key, value]) => <><button onClick={() => setter(()=>value)}>{key}</button></>);
    return (
        <Spacer>
          <Wrap>
            {list}
          </Wrap>      
        </Spacer>
    )
}

export default function App() {
  const [Page, setPage] = useState(() => Home);
  const match={"Home": Home, "Amazon": Amazon, "Google": Google, "Apple": Apple, "FaceBook": FaceBook, "About": About }
  return (
      <div>
        <Page />
        <ButtonList setter={setPage} dict={match} />        
      </div>
  )
}

const Google = () =>  <Company title="Google"  content={<><p>This is Google. It's a search engine started by Sergey Brin and Larry Page.</p><p>PageRank is the search algorithm that started it all. Today it's a multibillion dollar company.</p></>}/>;
                      
const Amazon = () => <Company title="Amazon" content={<><p>This is Amazon. It started off as an online bookstore.</p> <p>Amazon is the owner of AWS, the host this tutorial is targeting.</p></>}/>
      
const FaceBook = () => <Company title="FaceBook" content={<><p>This is FaceBook. It was started by Mark Zuckerberg at Harvard.</p><p>FaceBook is the creator of the framework used to build this website, React.</p></>}/>

const Apple = () => <Company title="Apple" content={<> <p>This is Apple. It's CEO is Tim Cook.</p> <p>Apple manufactures the iPhone and the Mac.</p> </>}/>

const About = () => <Company title="About Us" content={<>  <p>This site is about tech companies.</p>
      <p>It's part of a tutorial. You can see the React tutorials I've created at <a href="https://www.reactever.com/">reactever.com</a>.</p></>}/>

const Home = () => <HomeList items={[<Apple/>,<Google/>,<Amazon/>,<FaceBook/>]}/>
      


