import React,{ Component} from "react";
import icons from "../../icon.json";
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container";
import ClickItem from "../ClickItem";

class Game extends Component{
    state = {
        icons,
        score: 0,
        topScore: 0
    }
    componentDidMount(){
        this.setState({icons: this.shuffleIcons(this.state.icons)});
    }
    handleItemClick = id => {
        let guessedCorrectly = false;
        const newData = this.state.icons.map(item => {
            // take every property of the item with spread operator
            const newItem = {...item};
            if(newItem.id == id){
                if(!newItem.clicked){
                    newItem.clicked = true;
                    guessedCorrectly = true;
                }
            }
            return newItem;
        })
        guessedCorrectly ? this.handleCorrectGuess(newData) : this.handleInCorrectGuess(newData);
    }
    handleCorrectGuess = newData => {
        const {topScore, score} = this.state;
        const newScore = score+1;
        const newTopScore = newScore > topScore ? newScore : topScore;
        this.setState({
            data: this.shuffleData(newData),
            score: newScore,
            topScore: newTopScore
        })

    }
    handleInCorrectGuess = newData =>{
        this.setState({
            data: this.resetData(newData),
            score: 0
        })
    }
    resetData = newData => {
        const resetData = data.map(item =>({...item, clicked:false}));
        return this.shuffleData(resetData);
    }
    shuffleData = data => {
        let i = data.length - 1;
        while(i > 0){
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    }
    render(){
        return(
            <div>
                <Nav score={this.state.score} topScore = {this.state.topScore}></Nav>
                <Header />
                <Container>
                    {this.state.icons.map(item => {
                        <ClickItem 
                            key ={item.id}
                            id ={item.id}
                            randomizer={!this.state.score && this.state.topScore}
                            handleClick={this.handleItemClick}
                            image={item.image}
                        />
                    })}
                </Container>
                <Footer></Footer>
            </div>
        )
    }
}