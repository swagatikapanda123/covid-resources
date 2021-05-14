import React, { useState, useEffect } from 'react'
require ("es6-promise").polyfill()
require ("isomorphic-fetch");

function Resources() {
    const[data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Resources
