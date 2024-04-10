import React from 'react'
import CommentsList from './CommentsList';

const commentData = [
    {
        name: 'Akshay Nalkol',
        text: 'Kon kon Rohit Sharma ke liye aaya hai ',
        replies: []
    },
    {
        name: 'BhumikaKamble402',
        text: 'Kapil sharma + Rohit Sharma =Entertainment',
        replies: [
            {
                name: 'Dream45777',
                text: 'Kapil paji and Rohit sir=Sharma ji ka beta ',
                replies: [
                    {
                        name: 'Akshay Nalkol',
                        text: 'ahgdj dhgdj dggdj dhhhfhf hfhfhhf fhhf',
                        replies: [
                            {
                                name: 'Antima0909sharmaa',
                                text: 'Rohitman Sharma is most honest and selfless player He is true leader',
                                replies: [
                                    {
                                        name: 'arpitapriyadarshini4155',
                                        text: 'The way Ro was dancing cutely️',
                                        replies: [
                                            {
                                                name: 'user-mw2zz7hd7r',
                                                text: 'Rohit + Iyer + kpil = full of love and entertainment ',
                                                replies: [
                                                    {
                                                        name: 'DreamstoriesTv35394',
                                                        text: 'रोहित और कपिल शर्मा दोनो best funny लिडर ',
                                                        replies: [
                                                            {
                                                                name: 'BankuraNews',
                                                                text: 'Rohit is the most open-minded in the Indian Cricket Team',
                                                                replies: [
                                                                    {
                                                                        name: 'zaid8957',
                                                                        text: 'Shreyas Iyer is a gifted dancer! His moves are SMOOTH!! ',
                                                                        replies: [
                                                                            {
                                                                                name: 'ArborVitae12354',
                                                                                text: 'Rohit Gurunath sharma- the Impact player.',
                                                                                replies: []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: 'SandeepDihati-Vlog',
        text: 'My favourite batsman Rohit and favourite comedian Kapil Sharma Love both of you',
        replies: [
            {
                name: 'royalgirl1638',
                text: 'Kapil Sharma show and Rohit Sharma show ',
                replies: []
            },
        ]
    },
    {
        name: 'TheYouthStudioIndia',
        text: 'Kapil Sharma Show Come Back 2024  congratulation ',
        replies: []
    },
    {
        name: 'devenderdhankhar4974',
        text: 'Rohit Sharma.....Captain of all time! Great player and great man.',
        replies: []
    },

]

const CommentsContainer = () => {
    return (
        <div className='overflow-x-auto'>
            <h4 className='fw-bold mb-2'>Comments :</h4>
            <CommentsList comments={commentData} />
        </div>
    )
}

export default CommentsContainer;
