import React from 'react'
import BlogApi from './BlogApi'
import Card from './Card'

const Blog = () => {
  return (
    <>
        <section className='portfolio blog' id="blog">
            <div className='container'>
                <div className='heading text-center'>
                    <h4> VISIT MY BLOG AND KEEP YOUR FEEDBACK </h4>
                    <h1> My Blog </h1>
                </div>

                <div className='content'>
                    <div className='grid'>
                    {
                        BlogApi.map((curElm, index)=>{
                            return(
                                <>
                                    <Card key={index} id={curElm.id} image={curElm.image} date={curElm.date} title_one={curElm.title_one} desc_one={curElm.desc_one} title_two={curElm.title_two} desc_two={curElm.desc_two} title_three={curElm.title_three} desc_three={curElm.desc_three} /> 
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

export default Blog