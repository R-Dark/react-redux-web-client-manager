import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { connect } from 'react-redux'
import '../styles/home.css';
import { clientsFetch } from '../actions/ClientActions'
import TableItem from './TableItem'
import TopRowButtons from './buttons/TopRowButtons'
import MiddleRowButtons from './buttons/MiddleRowButtons'
import BottomRowButtons from './buttons/BottomRowButtons'
import { Jumbotron } from 'reactstrap';
import TableRow from './TableRow';
import SearchForm from './SearchForm';
import BatchAndReportButtons from './BatchAndReportButtons';
import { searchClient } from '../actions'


class Home extends Component {

  constructor( props ) {
    super( props );

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey(){
    return this.keyCount++;
  }

  componentWillMount() {
    this.props.clientsFetch();
  }

  renderTableRow() {
    if (this.props.clients) {
      return this.props.clients.map(itemData => <TableRow key={this.getKey()} itemData={itemData} />)
    }
  }

  handleFormSubmit = ({ ownername}) => {
    this.props.searchClient({ ownername })
  }

  renderClientRow() {
    if (this.props.client) {
      return this.props.client.map(itemData => <TableRow key={this.getKey()} itemData={itemData} />)
    }
  }

  render() {
    return(
       <div style={ styles.mainDivStyles }>
        <Helmet>
          <title>the Brain</title>
        </Helmet>

        <div style={ styles.outterDivStyles }>
          <Jumbotron style={styles.jumboStyles} id='home-button-jumbotron'>
            <TopRowButtons />
            <MiddleRowButtons />
            <BottomRowButtons />
          </Jumbotron>
        </div>
            <TableItem>
              {this.renderTableRow()}
            </ TableItem>


       <div>
          <Jumbotron style={styles.jumboStyles2}>
            <SearchForm onSubmit={this.handleFormSubmit}/>
            <BatchAndReportButtons />
          </Jumbotron>
       </div>


       </div>
    )
  }
}

const styles = {
  jumboStyles: {
    marginTop: 17,
    paddingTop: 17,
    paddingBottom: 1,
    width: '98%',
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  mainDivStyles: {
    display: 'flex',
    flexDirection: 'column'
  },
  outterDivStyles: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: -14
  },
  jumboStyles2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,

  }
};

const mapStateToProps = state => {
  return {
    clients: state.clients.items,
    client: state.clients.clientItem
  }
}

export default connect(mapStateToProps, { clientsFetch, searchClient } )(Home)
