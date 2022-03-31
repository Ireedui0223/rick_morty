import gql from "graphql-tag";
import { characterModel } from "../model/character";
import { locationModel } from "../model/location";
import { episodeModel } from "../model/episode";

export const characterQuery = gql`
    query character ($id: ID!) {
        character (id: $id) {
            ${characterModel}
            origin {
                ${locationModel}
            }
            location {
                ${locationModel}
            }
            episode {
                ${episodeModel}
            }
        }
    }
`;
export const charactersQuery = gql`
        query characters ($page: Int , $filter: FilterCharacter){
            characters (page: $page, filter: $filter){
                results{
                    ${characterModel}
                    origin{
                        ${locationModel}
                    }
                    location{
                        ${locationModel}
                    }
                    episode{
                        ${episodeModel}
                    }
                }info{
                    pages
                }
            }
        }
`;
