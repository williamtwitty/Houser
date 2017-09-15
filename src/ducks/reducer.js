import axios from 'axios';
import api from '../api';

const initialState = {
    user: NULL,
    properties: [],
    steps: {
        name: null,
        description: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        image: null,
        loan_amount: null,
        monthly_mortgage: null,
        desired_rent: null,
        recommended_rent: null
    }
}

const AUTH = "AUTH";
const DASH = "DASH";
const LOGOUT = "LOGOUT";

// const UPDATE_STEPS = "UPDATE_STEPS";

const GET_PROPERTIES = "GET_PROPERTIES";
const CREATE_PROPERTY = "CREATE_PROPERTY";
const DELETE_PROPERTY = "DELETE_PROPERTY";
const FILTER_PROPERTIES = "FILTER_PROPERTIES";




export default function( state = initialState, action ) {
    let { payload } = action;
    switch( action.type ) {
    case AUTH + '_FULFILLED':
        return Object.assign({}, state, { user: payload.username, cart: payload.cart, total: payload.total });
  
    case DASH + '_FULFILLED':
        return Object.assign({}, state, { user: payload.username, cart: payload.cart, total: payload.total });
        
    case LOGOUT + '_FULFILLED':
        return Object.assign({}, initialState);
  
    case GET_PROPERTIES + '_FULFILLED':
        return Object.assign({}, state, { properties: payload });

    case CREATE_PROPERTY + '_FULFILLED':
        return Object.assign({}, state, { properties: payload });
    
    case GET_PROPERTIES + '_REJECTED':
        return Object.assign({}, initialState);

    case DELETE_PROPERTY + '_FULFILLED':
        return Object.assign({}, state, { properties: payload } );

    case FILTER_PROPERTIES + '_FULFILLED':
        return Object.assign({}, state, { properties: payload });

    // case UPDATE_STEPS:
    //     let updatedState = Object.assign({}, state);


      return {
        user: '',
        // swag: [],
        // cart: [],
        // total: 0
      };

    default: return state;
  }
}

export function login( obj, history ) {
  return {
    type: LOGIN,
    payload: axios.post(api.login, obj ).then( response => {
      history.push('/shop');
      return response.data;
    })
  };
}

export function register( obj, history ) {
  return {
    type: REGISTER,
    payload: axios.post(api.register, obj ).then( response => {
      history.push('/shop');
      return response.data;
    })
  };
}

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get(api.user ).then( response => response.data )
  };
}

export function getSwag() {
  return {
    type: GET_SWAG,
    payload: axios.get(api.swag ).then( response => response.data )
  };
}

export function searchSwag( category ) {
  return {
    type: SEARCH_SWAG,
    payload: axios.get( `.(api.search}?category=${category}` ).then( response => response.data )
  };
}

export function addToCart( id ) {
  return {
    type: ADD_TO_CART,
    payload: axios.post( `.(api.cart}?id=${id}` ).then( response => response.data )
  };
}

export function removeFromCart( id ) {
  return {
    type: REMOVE_FROM_CART,
    payload: axios.delete( `.(api.cart}?id=${id}` ).then( response => response.data )
  };
}

// export function checkout() {
//   return {
//     type: CHECKOUT,
//     payload: axios.post.(api.checkout ).then( response => response.data )
//   };
// }

// export function signout( history ) {
//   return {
//     type: SIGN_OUT,
//     payload: axios.post.(api.signout ).then( () => history.push('/') )
//   };
// }