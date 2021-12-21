import './App.css'
import { Header } from './components/styled/Header.styled'
import { Menu } from './components/styled/Menu.styled'
import { Applications } from './components/styled/Applications.styled'
import { TechStack } from './components/styled/TechStack.styled'
import { Contact } from './components/styled/Contact.styled'
import { Footer } from './components/styled/Footer.styled'

function App() {
    return (
        <div className="wrapper">
            <Menu></Menu>
            <Header></Header>
            <Applications></Applications>
            <TechStack></TechStack>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

export default App
