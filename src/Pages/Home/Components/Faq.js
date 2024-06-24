import React, { useState } from 'react'

const Faq = () => {

    const data = [
        {
            question: "Question 1?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam quis voluptas molestias quas velit libero reiciendis? In animi unde explicabo, vero, ipsa iusto cum pariatur perspiciatis rem fugiat debitis et?"
        },
        {
            question: "Question 2?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam quis voluptas molestias quas velit libero reiciendis? In animi unde explicabo, vero, ipsa iusto cum pariatur perspiciatis rem fugiat debitis et?"
        },
        {
            question: "Question 3?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam quis voluptas molestias quas velit libero reiciendis? In animi unde explicabo, vero, ipsa iusto cum pariatur perspiciatis rem fugiat debitis et?"
        },
        {
            question: "Question 4?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam quis voluptas molestias quas velit libero reiciendis? In animi unde explicabo, vero, ipsa iusto cum pariatur perspiciatis rem fugiat debitis et?"
        },
        {
            question: "Question 5?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam quis voluptas molestias quas velit libero reiciendis? In animi unde explicabo, vero, ipsa iusto cum pariatur perspiciatis rem fugiat debitis et?"
        },
        {
            question: "Question 6?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam quis voluptas molestias quas velit libero reiciendis? In animi unde explicabo, vero, ipsa iusto cum pariatur perspiciatis rem fugiat debitis et?"
        },
        {
            question: "Question 7?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam quis voluptas molestias quas velit libero reiciendis? In animi unde explicabo, vero, ipsa iusto cum pariatur perspiciatis rem fugiat debitis et?"
        }
    ]

    const [selected, setSelected] = useState(null)

    const handleSelect = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <>
            <h1 className='heading'>FAQ</h1>

            <section className='faq'>
                <div className="item">
                    {
                        data.map((item, i) => {
                            return (
                                <div className='wrapper' key={i}>
                                    <div className="question" onClick={() => handleSelect(i)} >
                                        <h3>{item.question}</h3>
                                        <img src={require("../../../assets/uparrow.png")} alt="" className={selected === i ? "reverse" : ""} />
                                    </div>

                                    <div className={selected === i ? "answers show" : "answers"}>
                                        <p> {item.answers} </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Faq