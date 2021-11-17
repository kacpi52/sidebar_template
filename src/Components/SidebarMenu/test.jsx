import React from 'react'

const MainMenutest = () => {
    return (
        <div>
            <Col> <DropDown /> </Col> 
            <Col> <DropDown /> </Col>
             <Col> <DropDown /> </Col>
        </div>
    )
}

<Col> <DropDown/> </Col>export default test




const Dropdown = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}


const Dropdown = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}
<Dropdown>
    <ul>
        <li>Grześ</li>
    </ul>
</Dropdown>;

const Dropdown = ({ children, label }) => {
    const [isHidden, setIsHidden] = useState(false);
    return (
        <div className={isHidden ? " hidden" : ""}>
            <span
                onClick={() => {
                    setIsHidden(!isHidden);
                }}
            >
                {label}
                <Dropdown label="Menu1">
                    <ul>
                        <li>Grześ</li>
                    </ul>
                </Dropdown>;


                const Dropdown = ({children, label}) => {
  const [isHidden, setIsHidden] = useState(false);
                return (
                <div className={isHidden ? " hidden" : ""}>
                    <span
                        onClick={() => {
                            setIsHidden(!isHidden);
                        }}
                    >
                        {label}
                    </span>
                </div>
                );
};