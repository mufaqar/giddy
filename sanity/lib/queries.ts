export const QArticles = `*[ _type == "articles"] | order(_createdAt desc){
     _id,
     _createdAt,
     _updatedAt,
     title,
     slug,
     excerpt,
     topic->{
          name,
          slug,
          subtopics[]->{
               name, slug
          },
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
}`;

export const QFeaturedArticles = `*[ _type == "articles" && featured == true ] | order(_updatedAt desc){
     _id,
     _createdAt,
     _updatedAt,
     title,
     slug,
     excerpt,
     topic->{
          name,
          slug,
          subtopics[]->{
               name, slug
          },
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
}`;

export const QPolls = `*[ _type == "polls"] | order(_createdAt asc)`;

export const QTopics = `*[ _type == "topics"] | order(_createdAt asc)`;

export const QNavTopics = `*[ _type == "topics"] | order(_createdAt asc){
     name,
     slug,
     subtopics[]->{
          name, slug
     },
}`;

export const QReviews = `*[ _type == "reviews"] | order(_createdAt asc){
     name,
     review,
     twitter_link,
     insta_link,
     linkedin_link,
     image{
          asset->{
               url
          }
     }
}`;

export const QSingleArticles = `*[ _type == "articles" && slug.current == $slug][0]{
     _id,
     _createdAt,
     _updatedAt,
     title,
     slug,
     excerpt,
     topic->{
          name,
          slug,
          subtopics[]->{
               name, slug
          },
          peopleAlsoAsk[]->{
               question,
               slug,
               answer,
               article,
               metatitle,
               metadescription,
               metaKeywords
          }
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
}`;

export const QSingleTopic = `*[ _type == "topics" && slug.current == $slug][0]{
     name,
     slug,
     subtopics[]->{
          name, slug
     },
     content[]{
          Title,
          excerpt,
          readmore
     },
     peopleAlsoAsk[]->{
          question,
          slug,
          answer,
          article,
          metatitle,
          metadescription,
          metaKeywords
     }
}
`;

export const QSingleSubTopic = `*[ _type == "subTopics" && slug.current == $slug][0]{
     name,
     slug,
     tags[]{
          tag
     },
     content[]{
          Title,
          excerpt,
          readmore
     },
     peopleAlsoAsk[]->{
          question,
          slug,
          answer,
          article,
          metatitle,
          metadescription,
          metaKeywords
     }
}
`;

export const QQuestion = `*[ _type == "questions"]`

export const QSingleQuestion = `*[ _type == "questions" && slug.current == $slug][0]{
     question,
     slug,
     answer,
     article->{
          title,
          slug,
          excerpt,
          topic->{
               name,
               slug,
               content[]{
                    Title,
                    excerpt,
                    readmore
               },
               peopleAlsoAsk[]->{
                    question,
                    slug,
               }
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
     },
     metatitle,
     metadescription,
     metaKeywords
}`;
