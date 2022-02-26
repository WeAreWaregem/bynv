import React, {useEffect, useState} from "react";
import './SearchBar.css';

export default function SearchBar(){
    const [releasesList, fetchReleases] = useState([]);
    const [imgList, fetchImages] = useState([]);
    const coverList = [];

    async function test(album){
        fetch("https://coverartarchive.org/release/81ae60d4-5b75-38df-903a-db2cfa51c2c6")
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            fetchImages(res.images)
        })
        .thencoverList.push(imgList[0])
    }
    
    async function test2(inputlist) {
        coverList.push(inputlist[0])
    }

    const search = () => {
        fetch("https://musicbrainz.org/ws/2/release/?artist=0383dadf-2a4e-4d10-a46a-e9e041da8eb3&inc=recordings&fmt=json")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                fetchReleases(res.releases)
            })
        
            for(var i=0; i < releasesList.length; i++){

                test(releasesList[i])
                test2(imgList)          
        }
    }

    useEffect(() => {
        search()
    }, [])

    return (
        <> 
            <form className="form">
                <label className="label" htmlFor="query">Artist </label>
                <input className="input" type="text" name="query"/>
                <label className="label" htmlFor="query">Album</label>
                <input className="input" type="text" name="query"/>
                <button className="button" type="submit">Search</button>
            </form>
            
            <div className="card-list">
                {/* {releasesList.map((item, i) => {
                        return <li key={i}>{item.id}</li>
                })} */}

                {coverList.length}

                {coverList.map((item, i) => {
                        return <img src={item.image} alt='movie'></img>
                })}
            </div>
        </>

    )}