import "./index.scss";
import { useState } from "react";
import AddIcon from "../../assets/icons/add.svg";
import CaloriesIcon from "../../assets/icons/calories.svg";
import TimeIcon from "../../assets/icons/time.svg";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import Select from "../../components/Select";
import { tabButtons, caloriesCard, items } from "../../appConstants";


const Home: React.FC = (): JSX.Element => {
    const [isAdded, setIsAdded] = useState(false);
    const [selectedTab, setSelectedTab] = useState("breakFast");

    return (
        <div className="home-page">
            <div className="header">
                <div className="container">
                    <div className="logo">
                        <span className="title">Food Diary</span>
                        <button className="add-icon button" onClick={()=> setIsAdded(!isAdded)}><img src={AddIcon} alt="add-icon" /></button>
                    </div>
                    <div className="data-picker">
                        <input type="date" name="date-filter" placeholder="adsfaffsa" />
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="container">
                    <div className="tab-buttons">
                        {
                            tabButtons.map(({title, value})=> <button key={`btn-${value}`} className={`button black ${selectedTab === value && "active"}`} onClick={()=> setSelectedTab(value)}>{title}</button>)
                        }
                    </div>
                    <div className="calories">
                        {
                            caloriesCard.map(({title, value})=> <Card key={`cal-${value}`}>
                                <button className="calories-icon"><img src={CaloriesIcon} alt="calories-icon" /></button>
                                <div className="detail">
                                    <span className="title medium">{title}kcal</span>
                                    <span className="tag">{value}</span>
                                </div>
                            </Card>)
                        }
                    </div>
                    <div className="listing">
                        {
                            items[selectedTab].length === 0? <h6>No items found</h6>: items[selectedTab].map(({title, quantity, calories, time, img})=> <Card key={`item-${title}`}>
                                <img className="thumbnail" src={`assets/images/${img}.png`} alt={img} />
                                <div className="detail">
                                    <span className="title small">{title}</span>
                                    <span className="tag success">Quantity : {quantity}</span>
                                    <span className="tag error">Total Calories : {calories}kcal</span>
                                    <div className="time">
                                        <img className="time-icon" src={TimeIcon} alt="iime-icon" />
                                        <span>{time} ago</span>
                                    </div>
                                </div>
                            </Card>)
                        }
                    </div>
                </div>
            </div>
            { isAdded && <Modal title="Add New Item">
                <div className="row">
                    <span className="input-title">Food Name</span>
                    <input className="input" type="text" placeholder="Type name"/>
                </div>
                <div className="row">
                    <span className="input-title ">Select Category</span>
                    <Select onSelect={(selectedValue)=> console.log(selectedValue)} placeholder="Select option" options={tabButtons} />
                </div>
                <div className="row">
                    <span className="input-title ">Total Calories</span>
                    <input className="input" type="text" placeholder="Type here"/>
                </div>
                <div className="row">
                    <button className="button active">Add Item</button>
                </div>
                <div className="row">
                    <button className="button" onClick={()=> setIsAdded(false)}>Cancel</button>
                </div>
                
            </Modal> }
        </div>
    );
};

export default Home;