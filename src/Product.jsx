import React, { useEffect, useState } from 'react'
import "./Product.css"

const Product = () => {
    const [results, setResults] = useState([]);
    const [data, setData] = useState(
        {
            title: "",
            first: "",
            last: "",
            medium: "",
            number: "",
            name: "",
            state: "",
            country: "",
            postcode: "",
            offset: "",
            description: "",
            gender: ""

        })

    useEffect(() => {
        const getUser = async () => {
            const url = 'https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20';
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            console.log(resJson.results);
            setResults(resJson.results);
            data.title = resJson.results[0].name.title;
            data.first = resJson.results[0].name.first;
            data.last = resJson.results[0].name.last;
            data.medium = resJson.results[0].picture.medium;
            data.number = resJson.results[0].location.street.number;
            data.name = resJson.results[0].location.street.name;
            data.state = resJson.results[0].location.state;
            data.country = resJson.results[0].location.country;
            data.postcode = resJson.results[0].location.postcode;
            data.offset = resJson.results[0].location.timezone.offset;
            data.description = resJson.results[0].location.timezone.description;
            data.gender = resJson.results[0].gender;

        }
        getUser();

    }, []);
    // console.log(results, "jii");

    // const clickButton = (event) => {
    //     // <Cart props="jj" />
    //     console.log("hiii")
    //     console.log(event.target.value);
    //     setData
    // }
    // const showEventt = (id) => {
    //     console.log(id);
    //     const updatedItem = data.filter((ele, ind) => {
    //         return ind !== id;

    //     })
    //     setData(updatedItem);
    // }
    const showEventt = (currElement) => {
        // console.log(id);
        // const updatedItem = data.filter((event) => {
        //     console.log(event.target.value);
        // setData(currElement);
        console.log(currElement);

        // })

    }
    return (
        <>
            <div className='product-main'>
                <div className="cart1">
                    <div className="image">
                        <img src={data.medium} className='rounded' width='155' alt="scientist" />
                    </div>
                    <div className="about">
                        <h1 className='Name'>{data.title} {data.first}{data.last}</h1>
                        <p><span className="span1">{data.number}</span>,{data.name},{data.state},<span className="span2">{data.country}</span>, {data.postcode}</p>
                        {/* <p >{data.offset} - {data.description},<span className="span3">{data.description}</span>,{data.description}</p> */}
                        <p >{data.offset} - {data.description}</p>
                        <p><span className="span4">{data.gender}</span></p>
                    </div>
                </div>


                <div className="container-fluid mt-5">
                    <div className="row " >

                        {
                            results?.map((currElement) => (

                                <div className="col-10 col-md-3 mt-5">
                                    <div className="card p-2 " onClick={() => showEventt(currElement)}>
                                        <div className="d-flex ">
                                            <div className="ml-4 w-100" >
                                                <p className='p-2 mt-2  d-flex  '><span className="span5">{currElement.gender}</span>. {currElement.nat}</p>
                                                <h3 >{currElement.name?.title} {currElement.name?.first} {currElement.name?.last}</h3>
                                                <p style={{ color: "red" }}>{currElement.email}</p>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            )
                            )

                        }


                    </div>
                </div>
            </div>

        </>
    )
}

export default Product
