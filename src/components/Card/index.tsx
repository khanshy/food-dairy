import "./index.scss";

interface IProps {
    children: JSX.Element | JSX.Element[];
}

const Card: React.FC<IProps> = ({children}): JSX.Element => {
    return (
        <div className="card">
            { children }
        </div>
    );
};

export default Card;