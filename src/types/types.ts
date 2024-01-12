export type TArticles = IArticle[]

export interface IArticle {
  _id: string
  _createdAt: string
  topic: Topic[]
  image: Image
  metatitle: string
  _updatedAt: string
  title: string
  slug: Slug
  excerpt: string
  content: Content[]
  writtenby: {
     name: string
     approved: boolean
     email: string
     bio: string
  }
  videoURL: any
  metadescription: string
}

export interface Topic {
  name: string
  slug?: Slug
}

export interface Slug {
  current: string
  _type: string
}

export interface Image {
  asset: {
     url: string
  }
}

export interface Content {
  style: string
  _key: string
  markDefs: any[]
  children: {
     _key: string
     _type: string
     marks: any[]
     text: string
  }
  _type: string
}


export interface ITopics {
  _type: string
  name: string
  _id: string
  _updatedAt: string
  slug?: Slug
  _createdAt: string
  _rev: string
}


export interface IReviewProps {
  name: string,
  review: string,
  twitter_link: string,
  linkedin_link: string,
  insta_link: string,
  image:{
      asset : {
          url: string
      }
  }
}