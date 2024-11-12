//When taking in a prop and checking that the type is string, the syntax is:
//  {title}:{title:string}, there title is the name of the prop here.
import styles from "./header.module.css";

const Header = ({title}:{title:string}) => {
    return <>
    <h1 className= {styles.title}>{title}</h1>
    </>
}

export default Header;