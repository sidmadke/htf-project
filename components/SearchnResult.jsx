
import React from 'react'
import PriceCard from './PriceCard'

const SearchnResult = (props) => {
    console.log(props);
    const sampleResult = props.sampleResult;

    console.log(sampleResult);
    return (
        <div className='flex flex-col gap-9 my-10'>
            {sampleResult.map((result) => (
                <PriceCard logo={result.logo} price={result.price} link={result.link} slink={result.slink} />
            ))}
        </div>
    )
}

export default SearchnResult