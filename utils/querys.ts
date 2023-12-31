import { gql } from '@apollo/client'
export const queryCategories = gql`
  query Categories {
    categories {
      id
      disabled
      description
      image
    }
  }
`
export const queryMenu = gql`
  query Categories {
    categories {
      id
      name
      description
      image
      products {
        name
        description
        disabled
        id
        image
        price
        priority
      }
    }
  }
`
export const queryStaff = gql`
  query Staff {
    staff {
      id
      name
      description
      image
      role
      disabled
    }
  }
`
export const queryGetAllMeatProcess = gql`
  query GetAllMeatProcess {
    getAllMeatProcess {
      id
      image
      name
      description
      order
    }
  }
`
export const queryGetParams = gql`
  query GetParams {
    getParams {
      address
      aboutSectionTitle
      aboutSectionParagraph
      aboutBannerVideoTitle
      aboutBannerVideoParagraph
      aboutBannerVideoId
      aboutHeaderSectionTitle
      aboutHeaderSectionParagraph
      aboutHeaderSectionImage
      backgroundAbout
      backgroundBlogDetail
      backgroundContact
      backgroundBlog
      backgroundCover
      backgroundMenu
      blogDetailCommentTitle
      blogSectionSubtitle
      blogSectionTitle
      contactSectionSubtitle
      contactSectionTitle
      contactCover1
      contactCover2
      email
      facebook
      homeSection1Image1
      homeSection1Image2
      homeSection3Image1
      homeSection3Image2
      homeSection3Image3
      homeSection1ImagesText1
      homeSection1ImagesText2
      homeSection1Paragraph1
      homeSection1Paragraph2
      homeSection1Subtitle
      homeSection1Title
      homeSection2ButtonText
      homeSection2Subtitle
      homeSection2Title
      homeSection3Paragraph
      homeSection3Title
      homeSectionMenuSubtitle
      homeSectionMenuTitle
      id
      instagram
      menuSectionSubtitle
      menuSectionTitle
      phone
      titleCommentsHome
      twitter
      youtube
    }
  }
`


export const queryPutReservation = gql`mutation CreateReservation($createReservationInput2: CreateReservationInput!) {
  createReservation(input: $createReservationInput2) {
    date
    email
    firstName
    hour
    id
    numberOfPeople
    phone
    state
    surname
  }
}`



export const queryFoodSpecs = gql `
query FoodSpecs {
  foodSpecs {
    id
    image
    title
    content
  }
}
`
export const queryProducts = gql `
query Products {
  products {
    description
    disabled
    id
    image
    name
    price
    priority
    categories {
      image
      id
    }
  }
}
`
