import React from 'react';
import Comment from './Comment';
import CommentsList from './CommentsList';
const commentsData = [
  {
    name:"Rashmi Shree S",
    text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
    replies:[
      {
        name:"Rashmi Shree S",
        text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
        replies:[
    
        ],
      },
      {
        name:"Rashmi Shree S",
        text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
        replies:[
    
        ],
      },
      {
        name:"Rashmi Shree S",
        text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
        replies:[
    
        ],
      },
    ],
  },
  {
    name:"Rashmi Shree S",
    text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
    replies:[
      {
        name:"Rashmi Shree S",
        text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
        replies:[
    
        ],
      },{
        name:"Rashmi Shree S",
        text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
        replies:[
          {
            name:"Rashmi Shree S",
            text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
            replies:[
              {
                name:"Rashmi Shree S",
                text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
                replies:[
            
                ],
              },{
                name:"Rashmi Shree S",
                text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
                replies:[
                  {
                    name:"Rashmi Shree S",
                    text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
                    replies:[
                
                    ],
                  },{
                    name:"Rashmi Shree S",
                    text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
                    replies:[
                
                    ],
                  },
                ],
              },{
                name:"Rashmi Shree S",
                text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
                replies:[
            
                ],
              },{
                name:"Rashmi Shree S",
                text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
                replies:[
            
                ],
              },
            ],
          },{
            name:"Rashmi Shree S",
            text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
            replies:[
        
            ],
          },
        ],
      },
    ],
  },
  {
    name:"Rashmi Shree S",
    text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
    replies:[

    ],
  },
  {
    name:"Rashmi Shree S",
    text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
    replies:[

    ],
  },
  {
    name:"Rashmi Shree S",
    text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
    replies:[

    ],
  },
  {
    name:"Rashmi Shree S",
    text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
    replies:[

    ],
  },
  {
    name:"Rashmi Shree S",
    text: "tyguh tygh asgddwegvb iouhgyhv b iuhyghfv bn",
    replies:[

    ],
  },
]

const CommentsContainer = () => {
  return (
    <div className='pl-5 pt-4'>
      <h1 className='font-bold text-2xl'>Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer