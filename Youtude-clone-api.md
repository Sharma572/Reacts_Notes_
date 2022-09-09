1. npx create-react-app ./   (will create current folder and node modules will be install on that folder).
2. When we create multiple page website in react always try to use single import statement - Create a file and export {default as Navbar } from './Navbar' all component export like this in the file.  at the end we will import like  - imoprt {NavBar,Serch,Feed} from './Component'; 
