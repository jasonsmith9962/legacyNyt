import React, {Component} from 'react';
import DisplayResults from './display'
type AcceptedProps = {
    results: {
        response: {
            docs: {
                multimedia: {
                    url: string;
                },
                headline: {
                    main: string;
                },
                keywords: [
                    {value: string}
                ]
            }
        }
    },
    searchTerm: string,
    startDate?: string,
    endDate?: string,
    pageNumber: number,
}
export default class NytFetch extends Component<{}, AcceptedProps> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state={
            results: {
                response: {
                    docs: {
                        multimedia: {
                            url: ''
                        },
                        headline: {
                            main: ''
                        },
                        keywords: [
                            {value: ''}
                        ]
                    }
                }
            },
            searchTerm: '',
            startDate: '',
            endDate: '',
            pageNumber: 0,
        }
    }
    fetchResults(e: any) {
        e.preventDefault();
        const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
        const key = 'EnnXjunQvPr40mVBXGdNxwPMk3qCLmSA';
        const url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.searchTerm}`;
        fetch(url)
            .then(function (result) {
                console.log(result)
                return result.json();
            })
            .then(function (json) {
                console.log(json);
            })
    }
    handleSearchInput(e: any) {
        this.setState({
            searchTerm: e.target.value
        })
        
    }

    // changePageNumber = (event: any, direction: string) => {
    //     event.preventDefault()
    //     if (direction === 'down') {
    //       if (this.state.pageNumber > 0) {
    //         this.setState(this.state.pageNumber - 1)
    //         fetchResults();
    //       }
    //     }
    //     if (direction === 'up') {
    //       setState(pageNumber + 1)
    //       fetchResults();
    //     }
    //   }
    
    render(){
        return(
            <div>
            <input type='text' onChange={this.handleSearchInput.bind(this)} placeholder='search here:'/>
            <button onClick={this.fetchResults.bind(this)}></button>
            <DisplayResults />
            </div>
        )
    }
}