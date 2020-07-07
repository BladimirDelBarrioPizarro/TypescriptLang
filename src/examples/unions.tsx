import React from 'react'



type StringOrNumber = string | number;
type ProcessStates = "open" | "closed";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
type AMessyUnion = "hello" | 156 | { error: true };

type WindowStates = "open" | "closed" | "minimized" | string;
type BoolStates = true | false | boolean

interface ErrorHandling {
    success: boolean;
    error?: { message: string };
  }
  
  interface ArtworksData {
    artworks: { title: string }[];
  }
  
  interface ArtistsData {
    artists: { name: string }[];
  }

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
    if (response.error) {
      console.error(response.error.message);
      return;
    }
    console.log(response.artists);
  };
  
interface CreateArtistBioBase {
    artistID: string
    thirdParty?: boolean
  }
  
type CreateArtistBioRequest = CreateArtistBioBase & { html: string } | { markdown: string }  

const workingRequest: CreateArtistBioRequest = {
    artistID: "banksy",
    markdown: "Banksy is an anonymous England-based graffiti artist..."
  }
console.log("Unión and intersection",workingRequest)
const Unions = () => {
    return (
        <p>Unions</p>
    )
}

export default Unions;