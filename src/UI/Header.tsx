//When taking in a prop and checking that the type is string, the syntax is:
//  {title}:{title:string}, there title is the name of the prop here.

const Header = ({title}:{title:string}) => {
    return <>
    <h1>{title}</h1>
    </>
}

export default Header;