import gql from "graphql-tag";
import { characterModel } from "../model/character";
import { episodeModel } from "../model/episode";

export const episodeQuery = gql`
    query episode ($id: ID!){
        episode (id: $id){
            ${episodeModel}
            characters{
                ${characterModel}
            }
        }
    }    
`;

export const episodesQuery = gql`
    query  episodes($page: Int , $filter: FilterEpisode){
        episodes(page:$page, filter: $filter){
            results{
                ${episodeModel}
                characters{
                    ${characterModel}
                }
            } 
        }
    }   
`;
