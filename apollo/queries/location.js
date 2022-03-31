import gql from "graphql-tag";
import { characterModel } from "../model/character";
import { locationModel } from "../model/location";

export const locationQuery = gql`
    query location ($id: ID!){
       location (id :$id){
            ${locationModel}
            residents{
                ${characterModel}
            }
        }
    }
`;
export const locationsQuery = gql`
    query locations ($page: Int, $filter: FilterLocation){
       locations (page : $page, filter : $filter){
           results{
            ${locationModel}
            residents{
                ${characterModel}
            }
        }
        }
    }
`;
