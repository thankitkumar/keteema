import { gql } from '@apollo/client';
export const QUERY_ALL_propertyRentAdvertises = gql`
{
    propertyRentAdvertises {
        edges {
          node {
            id
            createdOn
            updatedOn
            city{
              city
            }
            category{
              name
            }
            title
            description
            price
            currency
            location
            availability
            advertiseAttachments {
              id
              file
            }
          }
        }
      }
}
`;
export const QUERY_ALL_motorAdvertises = gql`
{
    
  motorAdvertises {
    edges {
      node {
        id
        createdOn
        updatedOn
        city{
          city
        }
        category{
          name
        }
        title
        description
        price
        currency
        location
        availability
        advertiseAttachments {
          id
          file
        }
      }
    }
  }
}
`;
export const QUERY_ALL_jobAdvertises = gql`
{
    
    jobAdvertises {
    edges {
      node {
        id
        createdOn
        updatedOn
        city{
          city
        }
        category{
          name
        }
        title
        description
        price
        currency
        location
        availability
        advertiseAttachments {
          id
          file
        }
      }
    }
  }
}
`;
export const QUERY_ALL_propertySaleAdvertises = gql`
{
    
    propertySaleAdvertises {
    edges {
      node {
        id
        createdOn
        updatedOn
        city{
          city
        }
        category{
          name
        }
        title
        description
        price
        currency
        location
        availability
        advertiseAttachments {
          id
          file
        }
      }
    }
  }
}
`;
export const QUERY_ALL_electronicsAdvertises = gql`
{
    
    electronicsAdvertises {
    edges {
      node {
        id
        createdOn
        updatedOn
        city{
          city
        }
        category{
          name
        }
        title
        description
        price
        currency
        location
        availability
        advertiseAttachments {
          id
          file
        }
      }
    }
  }
}
`;
export const QUERY_ALL_communityAdvertises = gql`
{
    
    communityAdvertises {
    edges {
      node {
        id
        createdOn
        updatedOn
        city{
          city
        }
        category{
          name
        }
        title
        description
        price
        currency
        location
        availability
        advertiseAttachments {
          id
          file
        }
      }
    }
  }
}
`;
export const QUERY_ALL_exportImportAdvertises = gql`
{
    
    exportImportAdvertises {
    edges {
      node {
        id
        createdOn
        updatedOn
        city{
          city
        }
        category{
          name
        }
        title
        description
        price
        currency
        location
        availability
        advertiseAttachments {
          id
          file
        }
      }
    }
  }
}
`;
