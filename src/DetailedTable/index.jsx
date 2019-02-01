import React from 'react';
import CustomizedTable from './DetailedList';
import axios from 'axios';



export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    async componentDidMount() {

        const TOKEN = localStorage.getItem("id_token")
        var axiosInstance = axios.create({
            baseURL: 'https://blooming-cove-35281.herokuapp.com',
            headers: {
            'Authorization': `Bearer ${TOKEN}`
            }
        })
        try {
            let response = await axiosInstance.get('/api/geo_caches')
            this.setState({
                user: response.data
            })
        } catch (err) {
            console.error(err)
        }
    }
  



   
    render() {
        
        return (
                <CustomizedTable userData={this.state.user} />
                  
        );
    }
}