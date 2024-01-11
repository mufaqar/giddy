
export const QArticles = `*[ _type == "articles"] | order(_createdAt desc){
     _id,
     _createdAt,
     _updatedAt,
     title,
     slug,
     excerpt,
     topic[]->{
          name,
          slug
     },
     featured,
     content,
     writtenby->{
          name,
          approved,
          email,
          bio
     },
     image{
          asset->{
               url
          }
     },
     videoURL,
     metatitle,
     metadescription
}`

export const QFeaturedArticles = `*[ _type == "articles" && featured == true ] | order(_updatedAt desc){
     _id,
     _createdAt,
     _updatedAt,
     title,
     slug,
     excerpt,
     topic[]->{
          name,
          slug
     },
     featured,
     content,
     writtenby->{
          name,
          approved,
          email,
          bio
     },
     image{
          asset->{
               url
          }
     },
     videoURL,
     metatitle,
     metadescription
}`

export const QPolls = `*[ _type == "polls"] | order(_createdAt asc)`

export const QTopics = `*[ _type == "topics"] | order(_createdAt asc)`


