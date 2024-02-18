  import { gql } from "@apollo/client";

  export const SIGNUP_USER = gql`
    mutation signupUser(
      $name: String!,
      $email: String!,
      $password: String!,
      $streetAddress: String!,
      $city: String!,
      $state: String!,
      $country: String!,
      $postalCode: String!
    ) {
      signupUser(
        name: $name,
        email: $email,
        password: $password,
        streetAddress: $streetAddress,
        city:$city,
        state:$state,
        country:$country,
        postalCode:$postalCode
      ) {
        _id
        name
        email
        password
        streetAddress
        city
        state
        country
        postalCode
      }
    }
  `;


export const LOGIN_USER = gql`
 mutation loginUser($email:String! , $password:String!){
  loginUser(email:$email , password:$password){
    token
     user{name , _id}

  }
 }
`;
export const GET_SINGLE_PRODUCT = gql`
mutation getSingleProduct($_id:ID!){
  getSingleProduct(_id:$_id){
    _id
    images
    name
    colors
    price
    discountedPrice
    sizes
  }
}
`;




export const PLACE_ORDER = gql`
  mutation PlaceOrder($username: String!, $userId: String!, $subtotal: Int!, $items: [ItemInput]!, $status: String!) {
    placeOrder(username: $username, userId: $userId, subtotal: $subtotal, items: $items, status: $status) {
      username
      userId
      subtotal
      items {
        _id
        quantity
        size
        name
        images
        price
      }
      status
    }
  }
`;


  // export const SIGNUP_USER = gql`
  //   mutation createUser($newUser: UserInput) {
  //     user:signupUser(newUser:$newUser) {
  //     email
  //     }
  //   }`;

  // export const DELETE_POST = gql`
  //   mutation deletePost($id: String) {
  //     deletePost(id: $id)
  //   }
  // `;
