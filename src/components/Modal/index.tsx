import "./index.scss";

interface IProps {
    title: string;
    children: JSX.Element | JSX.Element[];
};

const Modal: React.FC<IProps> = ({title, children}): JSX.Element => {
    return (
        <div className="modal-window">
            <div className="modal">
                <div className="header">
                    <span className="title">{title}</span>
                </div>
                <div className="body">
                    { children }
                </div>
            </div>
        </div>
    );
};

export default Modal;