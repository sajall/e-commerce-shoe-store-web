import { gql } from "@apollo/client";

export const getALL = gql`
  {
    getAll {
      title
      description
      _id
      name
      price
      discountedPrice
      colors
      sizes
      images
      details
      createdAt
      updatedAt
      category
    }
  }
`;

export const GET_ALL_ORDERS = gql`
  {
    getAllOrders {
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
