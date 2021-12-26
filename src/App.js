import './App.css'
import { Header } from './components/styled/Header.styled'
import { Applications } from './components/styled/Applications.styled'
import { TechStack } from './components/styled/TechStack.styled'
import { Contact } from './components/styled/Contact.styled'
import { Footer } from './components/styled/Footer.styled'
import { Element } from 'react-scroll'
import Menu from './components/Menu'

function App() {
    return (
        <div className="wrapper">
            <Element id="home"></Element>
            <Menu></Menu>
            <Header></Header>
            <Element id="applications" name="applications"></Element>
            <Applications></Applications>
            <Element id="techstack" name="techstack"></Element>
            <TechStack></TechStack>
            <Element id="contact"></Element>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

export default App
