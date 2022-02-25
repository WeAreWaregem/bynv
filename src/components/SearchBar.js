import React, {useEffect, useState} from "react";
import './SearchBar.css';

export default function SearchBar(){
    const [releasesList, fetchReleases] = useState([]);
    const [imgList, fetchImages] = useState([]);

    const search = () => {
        fetch("https://musicbrainz.org/ws/2/release/?artist=0383dadf-2a4e-4d10-a46a-e9e041da8eb3&inc=recordings&fmt=json")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                fetchReleases(res.releases)
            })
        }

    const searchImg = (releaseID) => {
        const imgUrl = `https://coverartarchive.org/release/"${releaseID}"`
        fetch(imgUrl)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                fetchImages(res.images)
            })
        }

    useEffect(() => {
        search()
    }, [])

    // useEffect(() => {
    //     searchImg()
    // }, [])

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
                {releasesList.map((item, i) => {
                    searchImg(item.id)
                    imgList.map((img, j) =>  {
                        return <div key={j}>{img.image}</div>
                    })
                        return <li key={i}>{item.id}</li>
                })}
            </div>
        </>

    )

}