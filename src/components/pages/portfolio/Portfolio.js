import React from 'react'
import Card from './Cards'
import Portfolio_data from './Portfolio_data'


const Portfolio = () => {
  return (
    <>
        <section className='portfolio top' id='portfolio'>
            <div className='container'>
                <div className='heading text-center'>
                    <h4> VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK </h4>
                    <h1> My Portfolio </h1>
                </div>

                <div className='content'>
                    <div className="grid">
                    {
                        Portfolio_data.map((val, index)=>{
                            return(
                                <>
                                <Card key={index} category={val.category} totalLike={val.totalLike} title={val.title} image={val.image} />
                                </>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Portfolio