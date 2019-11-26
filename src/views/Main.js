import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Cards from '../components/Cards/Cards'
import { fetchCommunities, fetchHomes } from '../api/commuties'
import Container from '@material-ui/core/Container';
import './Main.css';



export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            communitiesData: [],
            homesData: [],
            errorPage: false
        }
    }
    componentDidMount() {
        fetchCommunities()
            .then(response => this.setState({ communitiesData: response.data }))
            .catch((error) => {
                alert('Oops something went wrong. Please try again later')
            });

        fetchHomes()
            .then(homes => this.setState({ homesData: homes.data }))
            .catch((error) => {
                alert('Oops something went wrong. Please try again later')
            });

    }

    render() {
        return (
            <div className="mainDiv">
                <div>
                    <AppBar position="static">
                        <Toolbar className="toolBar">
                            <h4 className="title">COMMUNO</h4>
                        </Toolbar>
                    </AppBar>
                    <>
                        <div className="blackDiv">
                            <h3>Find your dream home today </h3>
                        </div>
                        <img src="/images/calgaryImg.jpg" alt="communityImage" className="image" />
                    </>
                </div>
                <div className="communities">
                    <h3>Our Communities</h3>
                </div>
                <Container maxWidth="md" className="cardsDiv">
                    {this.state.communitiesData.map(community => {
                        return <Cards key={community.id} homes={this.state.homesData} community={community} />
                    }
                    )}
                </Container>
            </div>

        )
    }
}