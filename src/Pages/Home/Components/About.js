import React from 'react'

const About = ({ heading }) => {
    return (
        <>
            <h1 className='heading'>{heading}</h1>
            <section className="about">
                <img src={require("../../../assets/about-img.jpg")} alt="" />
                <div className="content">
                    <h2>Lorem ipsum dolor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dicta, ipsam nemo fugit iure recusandae nesciunt repellat incidunt minus deserunt eligendi aspernatur accusamus! Unde quasi repudiandae ea ipsum similique praesentium?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus nulla aliquam laboriosam ab non consequuntur quaerat officia perferendis repellendus nam, asperiores corporis nihil ratione dolorum perspiciatis reprehenderit. Omnis, aperiam?</p>
                </div>
            </section>
        </>
    )
}

export default About