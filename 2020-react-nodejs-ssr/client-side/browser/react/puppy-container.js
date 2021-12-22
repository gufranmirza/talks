'use strict';
const React = require('react')
const { connect } = require('react-redux');
const { fetchPuppies, like } = require('./redux')

 class PuppyComponent extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    console.log('component did mount')
    this.props.fetchPuppies()
  }


  render() {
    const { like } = this.props
    console.log('this.props = ', this.props)
    console.log('rendering!')
    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Pup vs. Pup!</h1>
              <p>A puppy is a juvenile dog. Some puppies can weigh 1–3 lb (0.45–1.36 kg), while larger ones can weigh up to 15–23 lb (6.8–10.4 kg). All healthy puppies grow quickly after birth. A puppy's coat color may change as the puppy grows older, as is commonly seen in breeds such as the Yorkshire Terrier. In vernacular English, puppy refers specifically to dogs while pup may often be used for other mammals such as seals, giraffes, guinea pigs, or even rats.</p>
            </div>
          </div>
          <div className="row">
          {this.props.puppies && this.props.puppies.map(puppy => (
            <div className="col-sm-6" key={puppy.id}>
              <h3>{puppy.name}</h3>
              <img src={puppy.img} />
              <h2>Likes: {puppy.likes}</h2>
              <div className="btn btn-success" onClick={() => like(puppy.id)}>Like!</div>
            </div>
            ))
          }
        </div>
    </div>
    )
  }
 }

 const mapState = state => ({puppies: state.puppies})
 const mapDispatch = { fetchPuppies, like }

 const PuppyContainer = connect(mapState, mapDispatch)(PuppyComponent)

 module.exports = {PuppyContainer: PuppyContainer}


